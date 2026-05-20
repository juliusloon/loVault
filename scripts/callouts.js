// hexo-filter-callouts: Convert Obsidian-style callout syntax to HTML
// Syntax: > [!quote] content (same line) or > [!quote]\n> content (next line)
// Also protects $$...$$ math blocks from HTML escaping in marked

'use strict';

const calloutRegex = /^>\s*\[!([^\]]+)\]([^\n]*)\n((?:>[^\n]*\n?)+)/gm;
const { basename, dirname, extname, join } = require('path').posix;

// Protect $$...$$ math blocks by temporarily replacing with HTML comments
// This prevents marked from HTML-escaping < > characters inside math blocks
function protectMathBlocks(content) {
  return content.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
    return `<!-- MATH_BLOCK_${Buffer.from(math).toString('base64')}MATH_END -->`;
  });
}

function unprotectMathBlocks(content) {
  return content.replace(/<!-- MATH_BLOCK_([A-Za-z0-9+/=]+)MATH_END -->/g, (match, b64) => {
    const math = Buffer.from(b64, 'base64').toString('utf8');
    return `$$${math}$$`;
  });
}

// Convert markdown image syntax to <img> with resolved path
function resolveImagesInContent(content, postPath, hexo) {
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, href) => {
    // Skip external URLs and anchors
    if (/^(#|\/\/|http(s)?:)/.test(href)) {
      return match;
    }

    let resolvedHref = href;

    // Resolve asset path if post_asset_folder is enabled
    if (postPath && hexo.config.post_asset_folder) {
      const PostAsset = hexo.model('PostAsset');
      const asset = PostAsset.findById(join(postPath, href.replace(/\\/g, '/')));
      if (asset) {
        resolvedHref = asset.path.replace(/\\/g, '/');
      }
    }

    // Apply hexo's url_for
    resolvedHref = hexo.extend.helper.get('url_for').call(hexo, resolvedHref);

    return `<img src="${resolvedHref}" alt="${alt}">`;
  });
}

function convertCallouts(text, postPath, hexo) {
  return text.replace(calloutRegex, (match, type, sameLineContent, quoteContent) => {
    const normalizedType = type.toLowerCase();
    const iconMap = {
      'quote': '"',
      'note': '📝',
      'tip': '💡',
      'warning': '⚠️',
      'danger': '🚨',
      'info': 'ℹ️',
      'success': '✅'
    };
    const icon = iconMap[normalizedType] || '"';
    const title = sameLineContent.trim() || (normalizedType.charAt(0).toUpperCase() + normalizedType.slice(1));

    const cleanContent = quoteContent
      .split('\n')
      .map(line => line.replace(/^>\s?/, ''))
      .join('\n')
      .trim();

    // Resolve image paths in callout content
    const contentWithResolvedImages = resolveImagesInContent(cleanContent, postPath, hexo);

    // Wrap content in paragraph tags (simple markdown-like parsing)
    const renderedContent = contentWithResolvedImages
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p)
      .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('\n');

    return `<blockquote class="callout callout-${normalizedType}">
<div class="callout-title">${icon} ${title}</div>
<div class="callout-content">${renderedContent}</div>
</blockquote>\n`;
  });
}

hexo.extend.filter.register('before_post_render', (data) => {
  if (!data.content) return data;

  // Get post asset path
  const { source_dir } = hexo.config;
  let postPath = '';
  if (data.source) {
    const source = data.source.substring(source_dir.length).replace(/\\/g, '/');
    const postSource = data.source;
    postPath = join(source_dir, dirname(postSource), basename(postSource, extname(postSource)));
  }

  // Protect math blocks first
  data.content = protectMathBlocks(data.content);

  // Process callouts
  if (data.content.indexOf('[!') !== -1) {
    data.content = convertCallouts(data.content, postPath, hexo);
  }

  return data;
});

hexo.extend.filter.register('after_post_render', (data) => {
  if (!data.content) return data;

  // Restore math blocks after rendering
  data.content = unprotectMathBlocks(data.content);

  return data;
});
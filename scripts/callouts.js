// hexo-filter-callouts: Convert Obsidian-style callout syntax to HTML
// Syntax:
//   > [!type] Title
//   > Content line 1
//   > Content line 2
//
// Collapsible:
//   > [!type]- Title
//   > [!type]+ Title
//
// Also protects $...$ and $$...$$ math blocks from markdown parsing.

'use strict';

const { basename, dirname, extname, join } = require('path').posix;

// ------------------------------------------------------------------
// Math protection (before markdown rendering)
//
// Math placeholders use a plain-text format (MATHBLK_/MATHINL_ prefix +
// URL-safe base64 without padding) so that hexo-renderer-marked does NOT
// treat them as HTML comments (which would disable markdown rendering for
// the entire paragraph) and does NOT HTML-encode any characters.
// ------------------------------------------------------------------

function encodeMath(math) {
  // Use encodeURIComponent to avoid smartypants converting '--' to EN DASH
  return encodeURIComponent(math);
}

function decodeMath(str) {
  return decodeURIComponent(str);
}

const MATH_BLOCK_PREFIX = 'MATHBLK_';
const MATH_INLINE_PREFIX = 'MATHINL_';
const MATH_BLOCK_SUFFIX = '#';
const MATH_INLINE_SUFFIX = '#';

function protectMath(content) {
  // Protect $$...$$ display math first
  content = content.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
    return `${MATH_BLOCK_PREFIX}${encodeMath(math)}${MATH_BLOCK_SUFFIX}`;
  });

  // Protect $...$ inline math
  content = content.replace(
    /(?<![\\$])\$(?!\$)([^\n$]+?)\$(?!\$)/g,
    (match, math) => {
      const trimmed = math.trim();
      // Skip plain currency: $100, $1.50, $ 100
      if (/^\$?\d+([.,]\d+)?$/.test(trimmed)) return match;
      return `${MATH_INLINE_PREFIX}${encodeMath(math)}${MATH_INLINE_SUFFIX}`;
    }
  );

  return content;
}

function unprotectMath(content) {
  // Restore $$...$$
  content = content.replace(
    new RegExp(`${MATH_BLOCK_PREFIX}([^#]+)${MATH_BLOCK_SUFFIX}`, 'g'),
    (match, enc) => {
      const math = decodeMath(enc);
      return `$$${math}$$`;
    }
  );

  // Restore $...$
  content = content.replace(
    new RegExp(`${MATH_INLINE_PREFIX}([^#]+)${MATH_INLINE_SUFFIX}`, 'g'),
    (match, enc) => {
      const math = decodeMath(enc);
      return `$${math}$`;
    }
  );

  return content;
}

// ------------------------------------------------------------------
// Callout detection & conversion
// ------------------------------------------------------------------

const calloutRegex = /^>\s*\[!([^\]]+)\]([+-]?)\s*([^\n]*)(?:\n((?:>.*(?:\n|$))+))?/gm;

function resolveImagesInContent(content, postPath, hexo) {
  return content.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, href) => {
    if (/^(#|\/\/|http(s)?:)/.test(href)) return match;

    let resolvedHref = href;
    if (postPath && hexo.config.post_asset_folder) {
      const PostAsset = hexo.model('PostAsset');
      const asset = PostAsset.findById(join(postPath, href.replace(/\\/g, '/')));
      if (asset) {
        resolvedHref = asset.path.replace(/\\/g, '/');
      }
    }
    resolvedHref = hexo.extend.helper.get('url_for').call(hexo, resolvedHref);
    return `<img src="${resolvedHref}" alt="${alt}">`;
  });
}

function renderMarkdown(text, hexo) {
  if (!text) return '';
  let rendered = hexo.render.renderSync({ text: text, engine: 'markdown' });
  return rendered;
}

function renderInlineMarkdown(text, hexo) {
  if (!text) return '';
  let rendered = hexo.render.renderSync({ text: text, engine: 'markdown' });
  // Unwrap outer <p>...</p> for inline use
  rendered = rendered.replace(/^<p>/, '').replace(/<\/p>\n?$/, '');
  return rendered;
}

function convertCallouts(text, postPath, hexo) {
  return text.replace(calloutRegex, (match, type, fold, title, quoteContent) => {
    const normalizedType = type.toLowerCase();

    let cleanContent = '';
    if (quoteContent) {
      cleanContent = quoteContent
        .split('\n')
        .map(line => line.replace(/^>\s?/, ''))
        .join('\n')
        .trim();
    }

    const contentWithImages = cleanContent
      ? resolveImagesInContent(cleanContent, postPath, hexo)
      : '';

    const displayTitle = renderInlineMarkdown(title.trim(), hexo)
      || (normalizedType.charAt(0).toUpperCase() + normalizedType.slice(1));
    const renderedContent = renderMarkdown(contentWithImages, hexo);

    const foldClass = fold ? ` callout-fold-${fold === '-' ? 'closed' : 'open'}` : '';

    return `<blockquote class="callout callout-${normalizedType}${foldClass}">
<div class="callout-title">${displayTitle}</div>
<div class="callout-content">${renderedContent}</div>
</blockquote>\n\n`;
  });
}

// ------------------------------------------------------------------
// Hexo filters
// ------------------------------------------------------------------

hexo.extend.filter.register('before_post_render', (data) => {
  if (!data.content) return data;

  const { source_dir } = hexo.config;
  let postPath = '';
  if (data.source) {
    const postSource = data.source;
    postPath = join(source_dir, dirname(postSource), basename(postSource, extname(postSource)));
  }

  data.content = protectMath(data.content);

  if (data.content.indexOf('[!') !== -1) {
    data.content = convertCallouts(data.content, postPath, hexo);
  }

  return data;
});

hexo.extend.filter.register('after_post_render', (data) => {
  if (!data.content) return data;

  data.content = unprotectMath(data.content);

  return data;
});

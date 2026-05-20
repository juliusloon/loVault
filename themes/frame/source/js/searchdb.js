/**
 * LocalSearch - Standalone replacement for hexo-generator-searchdb
 * Generates a local search index from search.json and provides
 * fuzzy search across posts/pages.
 */

(function(global) {
  'use strict';

  var localSearch = function(opts) {
    this.path              = opts.path;
    this.top_n_per_article = parseInt(opts.top_n_per_article, 10) || 1;
    this.unescape          = opts.unescape === true || opts.unescape === 'true';
    this.isfetched        = false;
    this.datas            = [];
  };

  localSearch.prototype.fetchData = function() {
    var self = this;
    var xhr  = new XMLHttpRequest();
    xhr.open('GET', self.path, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        try {
          self.datas    = JSON.parse(xhr.responseText);
          self.isfetched = true;
          var event = new Event('search:loaded');
          window.dispatchEvent(event);
        } catch (e) {
          console.error('LocalSearch: failed to parse search data', e);
        }
      } else {
        console.error('LocalSearch: failed to load search data, status ' + xhr.status);
      }
    };
    xhr.onerror = function() {
      console.error('LocalSearch: network error while fetching search data');
    };
    xhr.send();
  };

  // Unescape HTML entities to readable characters
  localSearch.prototype.unescapeHtml = function(html) {
    if (!this.unescape) return html;
    return html
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      .replace(/&#x60;/g, '`');
  };

  // Escape HTML special characters for safe insertion into HTML
  localSearch.prototype.escapeHtml = function(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  // Wraps all occurrences of each keyword in plain text with <mark> tags,
  // returning a safe HTML string. Overlapping ranges are merged.
  localSearch.prototype.highlightText = function(text, keywords) {
    if (!text || !keywords || keywords.length === 0) return '';

    // Work on unescaped plain text
    var plain = this.unescapeHtml(text);
    var occurrences = [];

    // Find all keyword occurrences (case-insensitive)
    for (var i = 0; i < keywords.length; i++) {
      var kw = keywords[i];
      if (!kw) continue;
      var lowerPlain = plain.toLowerCase();
      var lowerKw   = kw.toLowerCase();
      var idx = 0;
      while ((idx = lowerPlain.indexOf(lowerKw, idx)) !== -1) {
        occurrences.push({ pos: idx, len: kw.length, text: kw });
        idx += kw.length;
      }
    }

    if (occurrences.length === 0) {
      return this.escapeHtml(plain);
    }

    // Sort by position
    occurrences.sort(function(a, b) { return a.pos - b.pos; });

    // Merge overlapping ranges
    var merged = [occurrences[0]];
    for (var m = 1; m < occurrences.length; m++) {
      var last = merged[merged.length - 1];
      if (occurrences[m].pos <= last.pos + last.len) {
        last.len = Math.max(last.pos + last.len, occurrences[m].pos + occurrences[m].len) - last.pos;
      } else {
        merged.push(occurrences[m]);
      }
    }

    // Build HTML string with <mark> wrappers
    var out = '';
    var cur = 0;
    for (var n = 0; n < merged.length; n++) {
      var off = merged[n];
      out += this.escapeHtml(plain.substring(cur, off.pos));
      out += '<mark>' + this.escapeHtml(plain.substring(off.pos, off.pos + off.len)) + '</mark>';
      cur = off.pos + off.len;
    }
    out += this.escapeHtml(plain.substring(cur));
    return out;
  };

  // Returns the number of occurrences of keyword in str (case-insensitive substring match)
  localSearch.prototype.occurrence = function(str, keyword) {
    str     = (str || '').toLowerCase();
    keyword = (keyword || '').toLowerCase();
    if (str === '' || keyword === '') return 0;
    var count = 0;
    var pos   = 0;
    while ((pos = str.indexOf(keyword, pos)) !== -1) {
      count++;
      pos += keyword.length;
    }
    return count;
  };

  localSearch.prototype.getResultItems = function(keywords) {
    var self    = this;
    var result  = [];
    var matches = [];

    for (var i = 0; i < this.datas.length; i++) {
      var item        = this.datas[i];
      var score       = 0;
      var matchCount  = 0;

      for (var j = 0; j < keywords.length; j++) {
        var keyword = keywords[j];
        if (!keyword) continue;

        var titleCount   = self.occurrence(item.title    || '', keyword);
        var contentCount = self.occurrence(item.content  || '', keyword);
        var tagCount     = 0;
        var cateCount    = 0;

        if (item.tags) {
          for (var k = 0; k < item.tags.length; k++) {
            tagCount += self.occurrence(item.tags[k], keyword);
          }
        }
        if (item.categories) {
          for (var l = 0; l < item.categories.length; l++) {
            cateCount += self.occurrence(item.categories[l], keyword);
          }
        }

        if (titleCount > 0 || contentCount > 0) {
          matchCount++;
          score += titleCount * 10 + contentCount + tagCount * 5 + cateCount * 2;
        }
      }

      if (matchCount > 0 && score > 0) {
        var url = decodeURIComponent(item.url || '');

        // Build snippet windowed around first keyword match
        var snippet = '';
        var contentRaw = item.content || '';
        if (contentRaw) {
          contentRaw = self.unescapeHtml(contentRaw);
          // Strip markdown formatting
          contentRaw = contentRaw.replace(/[#*`_~\[\]]/g, ' ').replace(/\s+/g, ' ').trim();

          var firstKwPos = -1;
          var firstKwLen = 0;
          for (var kj = 0; kj < keywords.length; kj++) {
            var kw = keywords[kj];
            if (!kw) continue;
            var pos = contentRaw.toLowerCase().indexOf(kw.toLowerCase());
            if (pos !== -1 && (firstKwPos === -1 || pos < firstKwPos)) {
              firstKwPos = pos;
              firstKwLen = kw.length;
            }
          }

          var start = 0;
          var end   = contentRaw.length;
          if (firstKwPos !== -1) {
            start = Math.max(0, firstKwPos - 80);
            end   = Math.min(contentRaw.length, firstKwPos + firstKwLen + 120);
            // Trim to word boundaries
            if (start > 0) {
              var sp = contentRaw.indexOf(' ', start);
              if (sp !== -1 && sp < firstKwPos) start = sp + 1;
            }
            if (end < contentRaw.length) {
              var ep = contentRaw.lastIndexOf(' ', end);
              if (ep !== -1 && ep > firstKwPos + firstKwLen) end = ep;
            }
          }

          snippet = contentRaw.substring(start, end).trim();
          if (start > 0) snippet = '...' + snippet;
          if (end < contentRaw.length) snippet = snippet + '...';
        }

        matches.push({
          score  : score,
          title  : self.highlightText(item.title || '', keywords),
          url    : url,
          content: snippet ? self.highlightText(snippet, keywords) : ''
        });
      }
    }

    // Sort by relevance score descending
    matches.sort(function(a, b) { return b.score - a.score; });

    // Apply top_n_per_article limit (default 1, -1 means show all)
    var limit = (this.top_n_per_article === -1) ? matches.length : this.top_n_per_article;
    for (var n = 0; n < Math.min(matches.length, limit); n++) {
      var entry = matches[n];
      var html  = '<div class="search-result-title"><a href="' + entry.url + '">' + entry.title + '</a></div>';
      if (entry.content) {
        html += '<div class="search-result">' + entry.content + '</div>';
      }
      result.push({ item: html });
    }

    return result;
  };

  global.LocalSearch = localSearch;

})(window);

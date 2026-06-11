(function () {
  'use strict';

  var THEME_KEY = 'hexo-theme-frame';
  var FONT_KEY = 'hexo-theme-frame-font';

  // ===== Theme helpers =====
  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      if (theme) {
        localStorage.setItem(THEME_KEY, theme);
      } else {
        localStorage.removeItem(THEME_KEY);
      }
    } catch (e) {
      // ignore
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    updateThemeIcon(theme);
  }

  function resolveTheme() {
    var stored = getStoredTheme();
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return getSystemTheme();
  }

  function toggleTheme() {
    var current = resolveTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
  }

  function updateThemeIcon(theme) {
    var btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    if (theme === 'dark') {
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
      btn.setAttribute('aria-label', 'Switch to light mode');
      btn.setAttribute('title', 'Switch to light mode');
    } else {
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
      btn.setAttribute('aria-label', 'Switch to dark mode');
      btn.setAttribute('title', 'Switch to dark mode');
    }
  }

  // ===== Font helpers =====
  function getStoredFont() {
    try {
      return localStorage.getItem(FONT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredFont(font) {
    try {
      if (font) {
        localStorage.setItem(FONT_KEY, font);
      } else {
        localStorage.removeItem(FONT_KEY);
      }
    } catch (e) {
      // ignore
    }
  }

  function applyFont(font) {
    var root = document.documentElement;
    if (font === 'serif') {
      root.setAttribute('data-font', 'serif');
    } else if (font === 'sans') {
      root.setAttribute('data-font', 'sans');
    } else {
      root.removeAttribute('data-font');
    }
    updateFontIcon(font);
  }

  function resolveFont() {
    var stored = getStoredFont();
    if (stored === 'serif' || stored === 'sans') {
      return stored;
    }
    return 'sans';
  }

  function toggleFont() {
    var current = resolveFont();
    var next = current === 'serif' ? 'sans' : 'serif';
    setStoredFont(next);
    applyFont(next);
  }

  function updateFontIcon(font) {
    var btn = document.getElementById('font-toggle-btn');
    if (!btn) return;
    if (font === 'serif') {
      // Serif icon: T with serifs (top bar with small vertical ends + bottom serif)
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>';
      btn.setAttribute('aria-label', 'Switch to sans-serif font');
      btn.setAttribute('title', 'Switch to sans-serif font');
    } else {
      // Sans-serif icon: plain T (single horizontal bar + single vertical bar)
      btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4" x2="20" y2="4"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>';
      btn.setAttribute('aria-label', 'Switch to serif font');
      btn.setAttribute('title', 'Switch to serif font');
    }
  }

  // ===== Initialize on DOM ready =====
  function init() {
    var theme = resolveTheme();
    applyTheme(theme);

    var font = resolveFont();
    applyFont(font);

    // Listen for system theme changes when no explicit preference is stored
    if (window.matchMedia) {
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      mql.addEventListener('change', function (e) {
        if (!getStoredTheme()) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose toggle functions globally for the buttons
  window.toggleTheme = toggleTheme;
  window.toggleFont = toggleFont;
})();

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-input');
  const container = document.getElementById('search-result-container');
  const messageEl = document.getElementById('search-result-message');
  const listEl = document.getElementById('search-result-list');

  const localSearch = new LocalSearch({
    path             : searchConfig.path,
    top_n_per_article: searchConfig.top_n_per_article,
    unescape         : searchConfig.unescape
  });

  localSearch.fetchData();

  function getQueryParam() {
    const params = new URLSearchParams(window.location.search);
    return params.get('s') || '';
  }

  function displaySearchResult(keywords) {
    if (!localSearch.isfetched) return;
    const searchText = keywords.trim();
    // Split on whitespace only — hyphens are NOT split boundaries,
    // so "hexo-gen" matches "hexo-generator" as a substring
    const kws = searchText.split(/\s+/).filter(k => k.length > 0);

    if (kws.length === 0) {
      messageEl.textContent = '';
      listEl.innerHTML = '';
      return;
    }

    const resultItems = localSearch.getResultItems(kws);

    if (resultItems.length === 0) {
      messageEl.textContent = 'No result found';
      listEl.innerHTML = '';
    } else {
      messageEl.textContent = resultItems.length + ' result(s) found';
      listEl.innerHTML = resultItems.map(result => '<li>' + result.item + '</li>').join('');
    }
  }

  // load query from URL on page load
  const initialQuery = getQueryParam();
  if (initialQuery) {
    input.value = initialQuery;
    displaySearchResult(initialQuery);
  }

  // search on input
  if (searchConfig.trigger === 'auto') {
    input.addEventListener('input', () => {
      const q = input.value.trim();
      const url = new URL(window.location);
      if (q) {
        url.searchParams.set('s', q);
      } else {
        url.searchParams.delete('s');
      }
      window.history.replaceState({}, '', url);
      displaySearchResult(q);
    });
  } else {
    input.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        const q = input.value.trim();
        const url = new URL(window.location);
        if (q) {
          url.searchParams.set('s', q);
        } else {
          url.searchParams.delete('s');
        }
        window.history.replaceState({}, '', url);
        displaySearchResult(q);
      }
    });
  }
});

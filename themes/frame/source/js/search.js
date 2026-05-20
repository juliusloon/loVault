document.addEventListener('DOMContentLoaded', () => {
  const input    = document.querySelector('.search-input');
  const container = document.querySelector('.search-result-container');

  const localSearch = new LocalSearch({
    path             : searchConfig.path,
    top_n_per_article: searchConfig.top_n_per_article,
    unescape         : searchConfig.unescape
  });

  if (searchConfig.preload === 'true') {
    localSearch.fetchData();
  }

  function openSearchPopup() {
    document.querySelector('.search-popup').classList.add('search-activate');
    if (!localSearch.isfetched) {
      localSearch.fetchData();
    }
  }

  function closeSearchPopup() {
    document.querySelector('.search-popup').classList.remove('search-activate');
    input.value = '';
    container.innerHTML = '';
  }

  document.querySelector('.search-btn').addEventListener('click', openSearchPopup);
  document.querySelector('.search-popup-overlay').addEventListener('click', closeSearchPopup);
  document.querySelector('.search-close-btn').addEventListener('click', closeSearchPopup);

  function displaySearchResult() {
    if (!localSearch.isfetched) return;

    const searchText = input.value.trim();
    // Split on whitespace only — hyphens are NOT split boundaries,
    // so "hexo-gen" matches "hexo-generator" as a substring
    const keywords = searchText.split(/\s+/).filter(k => k.length > 0);

    let resultItems = [];
    if (keywords.length > 0) {
      resultItems = localSearch.getResultItems(keywords);
    }

    if (keywords.length === 0) {
      container.innerHTML = '';
    } else if (resultItems.length === 0) {
      container.innerHTML = '<div class="search-result-message">No result found</div>';
    } else {
      container.innerHTML =
        '<div class="search-result-message">' + resultItems.length + ' result(s) found</div>' +
        '<ul class="search-result-list">' +
        resultItems.map(r => '<li>' + r.item + '</li>').join('') +
        '</ul>';
    }
  }

  if (searchConfig.trigger === 'auto') {
    input.addEventListener('input', displaySearchResult);
  } else {
    input.addEventListener('keypress', event => {
      if (event.key === 'Enter') displaySearchResult();
    });
  }

  window.addEventListener('search:loaded', displaySearchResult);
});
  
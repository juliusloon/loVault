'use strict';

hexo.extend.generator.register('search', function(locals) {
  var config = this.config;
  var searchConfig = config.search || {};
  var searchfield = (searchConfig.field || 'post').trim();
  var searchlimit = parseInt(searchConfig.limit, 10) || 200;
  var includeContent = searchConfig.content !== false;

  var posts, pages;
  if (searchfield === 'post') {
    posts = locals.posts.sort('-date');
  } else if (searchfield === 'page') {
    pages = locals.pages;
  } else {
    posts = locals.posts.sort('-date');
    pages = locals.pages;
  }

  var res = [];
  var index = 0;

  if (posts) {
    posts.slice(0, searchlimit).each(function(post) {
      if (post.indexing === false) return;

      var temp = {};
      if (post.title) temp.title = post.title;
      if (post.path)  temp.url  = encodeURIComponent(config.root + post.path);
      if (includeContent && post._content) temp.content = post._content;
      if (post.tags && post.tags.length > 0) {
        temp.tags = post.tags.map(function(tag) { return tag.name; });
      }
      if (post.categories && post.categories.length > 0) {
        temp.categories = post.categories.map(function(cate) { return cate.name; });
      }
      res[index++] = temp;
    });
  }

  if (pages) {
    pages.each(function(page) {
      if (page.indexing === false) return;

      var temp = {};
      if (page.title) temp.title = page.title;
      if (page.path)  temp.url  = encodeURIComponent(config.root + page.path);
      if (includeContent && page._content) temp.content = page._content;
      // Note: pages don't have tags/categories by default in Hexo
      res[index++] = temp;
    });
  }

  return {
    path: searchConfig.path || 'search.json',
    data: JSON.stringify(res)
  };
});

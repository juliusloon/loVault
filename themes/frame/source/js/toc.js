(function() {
  // Build both bar view and expanded TOC list
  function buildTOC() {
    const tocWrapper = document.getElementById('toc-wrapper');
    const tocBarView = document.querySelector('.toc-bar-view');
    const tocNav = document.getElementById('toc');

    if (!tocWrapper || !tocBarView || !tocNav) return;

    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
      tocWrapper.style.display = 'none';
      return;
    }

    // Assign IDs to headings if they don't have one
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }
    });

    // Build bar view
    tocBarView.innerHTML = '';
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.substring(1));
      const bar = document.createElement('div');
      bar.className = 'toc-bar-item h' + level;
      bar.dataset.headingId = heading.id;
      bar.title = heading.textContent.replace(/\$\$|\$/g, '').trim();

      bar.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.dataset.headingId;
        const target = document.getElementById(targetId);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          history.pushState(null, '', '#' + targetId);
        }
      });

      tocBarView.appendChild(bar);
    });

    // Build expanded list view
    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    headings.forEach(heading => {
      const level = parseInt(heading.tagName.substring(1));
      const li = document.createElement('li');
      li.className = 'toc-item';

      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.className = 'toc-link h' + level;
      a.textContent = heading.textContent;
      a.dataset.headingId = heading.id;

      a.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          history.pushState(null, '', '#' + targetId);
        }
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });

    tocNav.innerHTML = '';
    tocNav.appendChild(tocList);
  }

  // Scroll spy - highlight current section (updates both bar and list views)
  let currentActiveLink = null;

  function updateActiveLink() {
    const tocWrapper = document.getElementById('toc-wrapper');
    if (!tocWrapper) return;

    const tocBarView = document.querySelector('.toc-bar-view');
    const tocNav = document.getElementById('toc');
    if (!tocBarView || !tocNav) return;

    const headings = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6');
    if (headings.length === 0) return;

    const scrollTop = window.pageYOffset;
    let activeHeading = null;

    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      const headingTop = rect.top + scrollTop;
      const headingBottom = headingTop + rect.height;

      if (scrollTop >= headingTop - 100 && scrollTop < headingBottom) {
        activeHeading = heading;
      }
    });

    if (!activeHeading) {
      for (let i = headings.length - 1; i >= 0; i--) {
        const rect = headings[i].getBoundingClientRect();
        if (rect.top <= 100) {
          activeHeading = headings[i];
          break;
        }
      }
    }

    if (activeHeading && activeHeading.id) {
      // Update bar view
      const bars = tocBarView.querySelectorAll('.toc-bar-item');
      bars.forEach(bar => {
        if (bar.dataset.headingId === activeHeading.id) {
          bar.classList.add('active');
        } else {
          bar.classList.remove('active');
        }
      });

      // Update list view
      const listLinks = tocNav.querySelectorAll('.toc-link');
      listLinks.forEach(link => {
        if (link.dataset.headingId === activeHeading.id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  // Check viewport width and hide if too narrow
  function checkViewport() {
    const tocWrapper = document.getElementById('toc-wrapper');
    if (!tocWrapper) return;

    if (window.innerWidth <= 1200) {
      tocWrapper.classList.add('hidden');
    } else {
      tocWrapper.classList.remove('hidden');
    }
  }

  // Listen for scroll
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveLink, 50);
  });

  // Listen for resize
  window.addEventListener('resize', checkViewport);

  // Initial setup
  function init() {
    buildTOC();
    checkViewport();
    updateActiveLink();
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
})();
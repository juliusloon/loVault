(function() {
    var STORAGE_KEY = 'gallery-layout';
    var gallery = document.querySelector('.post-gallery');
    if (!gallery) return;

    var buttons = gallery.querySelectorAll('.layout-btn');
    var savedLayout = localStorage.getItem(STORAGE_KEY);

    function setLayout(layout) {
        if (layout === 'double') {
            gallery.classList.add('layout-double');
        } else {
            gallery.classList.remove('layout-double');
        }
        buttons.forEach(function(btn) {
            if (btn.dataset.layout === layout) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        try {
            localStorage.setItem(STORAGE_KEY, layout);
        } catch (e) {
            // ignore localStorage errors
        }
    }

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var layout = btn.dataset.layout;
            setLayout(layout);
        });
    });

    if (savedLayout === 'double') {
        setLayout('double');
    } else {
        setLayout('single');
    }
})();

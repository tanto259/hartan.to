(function () {
  // Theme toggle — same model as securitypuppy: no attr = follow system,
  // explicit data-theme on body overrides, persisted in localStorage.
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function apply(theme) {
    if (theme) document.body.setAttribute('data-theme', theme);
  }

  var stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    apply(stored);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    apply('light');
  } else {
    apply('dark');
  }

  toggle.addEventListener('click', function () {
    var next = (document.body.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

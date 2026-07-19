(() => {
  

  if (!window.__testHeaderBound) {
    window.__testHeaderBound = true;
    document.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-test-header-toggle]');
      if (!toggle) return;

      const header = toggle.closest('[data-test-header]');
      if (!header) return;

      event.preventDefault();
      const isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }
})();
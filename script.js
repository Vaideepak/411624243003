// ============================================================
//  script.js  —  Task 1 Responsive Website
// ============================================================

// Wait until the full HTML is parsed before touching the DOM
document.addEventListener('DOMContentLoaded', () => {

  // ── Button click feedback ──
  const btn = document.getElementById('actionBtn');

  if (btn) {
    btn.addEventListener('click', () => {
      btn.textContent = 'Clicked! ✓';

      // Reset text after 2 seconds
      setTimeout(() => {
        btn.textContent = 'Click Me';
      }, 2000);
    });
  }

  // ── Highlight grid items on click (toggle) ──
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');

      // Apply a quick visual highlight using inline style
      if (item.classList.contains('active')) {
        item.style.background = getComputedStyle(document.documentElement)
          .getPropertyValue('--accent').trim();
        item.style.color = '#ffffff';
      } else {
        item.style.background = '';
        item.style.color = '';
      }
    });
  });

  // ── Navbar: close mobile menu on link click (UX improvement) ──
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Smooth-scroll is handled by the browser via href="#section"
      // This just provides a visual active indicator
      navLinks.forEach(l => l.removeAttribute('data-active'));
      link.setAttribute('data-active', 'true');
    });
  });

});

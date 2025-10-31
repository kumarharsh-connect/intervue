document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // FAQ toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.flex.justify-between');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('[data-lucide]');

    // Initialize FAQ items
    content.classList.toggle('hidden', !item.classList.contains('active'));
    trigger?.setAttribute('aria-expanded', item.classList.contains('active'));

    trigger?.addEventListener('click', () => {
      // Close other FAQ items
      faqItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove('active');
          i.querySelector('.faq-content')?.classList.add('hidden');
          const triggerEl = i.querySelector('.flex.justify-between');
          if (triggerEl) {
            triggerEl.setAttribute('aria-expanded', 'false');
          }
          const ic = i.querySelector('[data-lucide]');
          if (ic) ic.setAttribute('data-lucide', 'plus');
        }
      });

      // Toggle current FAQ item
      const isActive = item.classList.toggle('active');
      content.classList.toggle('hidden', !isActive);
      trigger.setAttribute('aria-expanded', isActive);
      if (icon) {
        icon.setAttribute('data-lucide', isActive ? 'minus' : 'plus');
        lucide.createIcons();
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

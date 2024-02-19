let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.site-nav__link').forEach((link) => {
        link.getAttribute('href').replace('#', '');
        if (link.getAttribute('href').replace('#', '') === entry.target.id) {
          link.classList.add('site-nav__link--active');
        } else {
          link.classList.remove('site-nav__link--active');
        }
      });
    }
  });
}, {
  threshold: 1,
});

export const interactionObsInit = () => {
  document.querySelectorAll('.menu__wrapper').forEach((item) => {
    observer.observe(item);
  });
};

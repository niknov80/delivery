const header = document.querySelector('.header');
const burger = document.querySelector('[data-burger]');
const wrapper = document.querySelector('.wrapper');
const siteNav = document.querySelector('.site-nav');

const SITENAV_OFFSET = 586;

// const mobileBreakpoint = window.matchMedia('(max-width:768px)');
// const breakpointChecker = () => {
//   if (mobileBreakpoint.matches) {
//     console.log("<768");
//   } else {
//     console.log(">768");
//   }
// };
//
// window.addEventListener('resize', () => {
//   breakpointChecker();
// });

const openMenu = () => {
  header.classList.add('menu-opened');
  window.scrollLock.disableScrolling();
};
const closeMenu = () => {
  header.classList.remove('menu-opened');
  window.scrollLock.enableScrolling();
};

export const clickBurgerHandle = () => {
  burger.addEventListener('click', () => {
    if (header.classList.contains('menu-opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
};

export const scrollHandler = () => {

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      wrapper.classList.add('scroll');
    } else {
      wrapper.classList.remove('scroll');
    }

    if (SITENAV_OFFSET < siteNav.offsetTop) {
      siteNav.classList.add('site-nav--scroll');
    } else {
      siteNav.classList.remove('site-nav--scroll');
    }
  });
};

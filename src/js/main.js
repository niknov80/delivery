import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form.js';
import {sliderInit} from './modules/slider.js';
import {isWebP} from './utils/webp.js';
import {clickBurgerHandle, scrollHandler} from './modules/menu.js';
import {interactionObsInit} from './modules/interaction-observer.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  isWebP();

  // Modules
  // ---------------------------------
  sliderInit();
  clickBurgerHandle();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  //
  // const scrollableElement = document.querySelector('.header__toggler');
  // scrollLock.disableScrolling();


  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initModals();
    interactionObsInit();
    scrollHandler();
  });
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

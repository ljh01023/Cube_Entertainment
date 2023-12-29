let swiper1 = new Swiper('.videoInner', {});
let swiper2 = new Swiper('.infoInner', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
swiper1.controller.control = swiper2;
swiper2.controller.control = swiper1;

// 버튼위치
const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

window.addEventListener('scroll', () => {
  scrollY = document.documentElement.scrollTop + 500;
  videoHeight = $sec2.offsetTop;

  if (scrollY >= videoHeight) {
    $next.style.cssText = `top: 150%`;
    $prev.style.cssText = `top: 150%`;
  } else {
    $next.style.cssText = `margin-top: calc(0px - (var(--swiper-navigation-size)/ 2))`;
    $prev.style.cssText = `margin-top: calc(0px - (var(--swiper-navigation-size)/ 2))`;
  }
});

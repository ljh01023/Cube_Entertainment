// header start
const $hdLang = $header.querySelector('.hdLang');
const $langList = $header.querySelector('.langList');
const $nav = $header.querySelector('nav');
const $sub = $header.querySelectorAll('.sub');

const $ham = document.querySelector('.ham');
$ham.addEventListener('click', (e) => {
  e.target.classList.toggle('on');
  $nav.classList.toggle('on');
  document.body.classList.toggle('on');
});

$hdLang.addEventListener('click', () => {
  $hdLang.classList.toggle('on');
  $langList.classList.toggle('on');
});

// mobile nav
$nav.addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.matches('.gnb > li > a')) {
    const siblingSub = e.target.nextElementSibling;
    if (siblingSub && siblingSub.classList.contains('sub')) {
      e.preventDefault();
      siblingSub.classList.toggle('on');

      $sub.forEach((sub) => {
        if (sub !== siblingSub) {
          sub.classList.remove('on');
        }
      });
    }
  } else {
    $sub.forEach((sub) => {
      sub.classList.remove('on');
    });
  }
});
//footer start
const $family = document.querySelector('.family');
const $familyList = document.querySelector('.familyList');

$family.addEventListener('click', () => {
  $family.classList.toggle('on');
  $familyList.classList.toggle('on');
});

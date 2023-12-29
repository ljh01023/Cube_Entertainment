const $secBrand = document.querySelector('.secBrand');
const brandBg = `
<div class="brandBg1 brandBg"></div>
<div class="brandBg2 brandBg"></div>
`;
$secBrand.insertAdjacentHTML('afterbegin', brandBg);
const $brandBg2 = document.querySelector('.brandBg2');

$secBrand.addEventListener('mousemove', () => {
  $brandBg2.classList.add('on');
});

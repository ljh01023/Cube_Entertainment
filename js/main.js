// main_sec1
const $sec1 = document.querySelector('.sec1');
const $btns = document.querySelectorAll('.next, .prev');
const $swiperSlides = document.querySelectorAll('.sec1 .swiper-slide');
const $videos = document.querySelectorAll('.sec1 video');
const infoTxts = document.querySelectorAll('.sec1 .video > p');

// 비디오 재생
$btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    $swiperSlides.forEach((li) => {
      if (li.classList.contains('swiper-slide-active')) {
        li.querySelector('video').play();
      } else {
        li.querySelector('video').pause();
      }
    });
  });
});

// 비디오 정지
window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  let videoHeight = $sec1.clientHeight - 200;
  if (scrollTop > videoHeight) {
    $videos.forEach((video) => {
      video.pause();
    });
  } else {
    $videos.forEach((video) => {
      $swiperSlides.forEach((li) => {
        if (li.classList.contains('swiper-slide-active')) {
          li.querySelector('video').play();
        }
      });
    });
  }
});

// main_sec2
const $sec2 = document.querySelector('.sec2');
const $infoInner = document.querySelector('.infoInner');
const $albumCon = document.querySelector('.albumCon');
const $photoCon = document.querySelector('.photoCon');
let infoBtn = document.querySelector('.infoBtn');
let albumBtn = document.querySelector('.albumBtn');
let photoBtn = document.querySelector('.photoBtn');

let isDown = false;
let offset = { x: 0, y: 0 };
let isViewActive = false;

const albumCon = [albumList1, albumList2, albumList3];
const photoCon = [photoList1, photoList2, photoList3];

infoBtn.addEventListener(
  'mousedown',
  (e) => {
    isDown = true;
    startX = e.clientX;
    offset = {
      x: infoBtn.offsetLeft - e.clientX,
      y: infoBtn.offsetTop - e.clientY,
    };
  },
  true
);

$sec2.addEventListener('mouseup', (e) => {
  if (isViewActive) {
    e.preventDefault();
    return;
  }

  // mouseup
  let activeNum = 0;
  $swiperSlides.forEach((li, idx) => {
    if (li.classList.contains('swiper-slide-active')) {
      activeNum = idx;
    }
  });

  isDown = false;
  let endX = e.clientX;
  let diffX = endX - startX;

  if (diffX < 0) {
    albumView(activeNum); //앨범 보이는 함수
    isViewActive = true;
  } else if (diffX > 0) {
    photoView(activeNum); //사진 보이는 함수
    isViewActive = true;
  }
});

$sec2.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (isDown) {
    infoBtn.style.left = e.clientX + offset.x + 'px';
    infoBtn.style.top = e.clientY + offset.y + 'px';
  }
});

// 포토
function photoView(num) {
  $infoInner.classList.remove('active');
  infoBtn.classList.remove('active');
  $photoCon.innerHTML = photoCon[num];
  $photoCon.classList.add('active');
  photoBtn.classList.add('active');
  $next.classList.remove('active');
  $prev.classList.remove('active');

  openModal();

  //버튼
  photoBtn.addEventListener('click', () => {
    $photoCon.innerHTML = '';
    $photoCon.classList.remove('active');
    photoBtn.classList.remove('active');

    $infoInner.classList.add('active');
    infoBtn.classList.add('active');
    isViewActive = false;
    isDown = false;
    infoBtn.style.cssText = `
        top:50%;
        letft : 50%
    `;
    $next.classList.add('active');
    $prev.classList.add('active');
  });
}

// 모달
function openModal() {
  const $photoModal = document.querySelector('.sec2 .photoModal');
  const $popUpImg = document.querySelector('.sec2 .popUp img');
  const $photoImg = document.querySelectorAll('.photoList > li > img');
  const $closeBtn = document.querySelector('.sec2 .close');

  $photoImg.forEach((img) => {
    img.addEventListener('click', (e) => {
      let url = e.target.getAttribute('src');
      $photoModal.classList.add('on');
      $popUp.classList.add('on');
      $popUpImg.setAttribute('src', url);
    });
  });

  $closeBtn.addEventListener('click', () => {
    $photoModal.classList.remove('on');
    $popUp.classList.remove('on');
  });
}

// 앨범
function albumView(num) {
  isDown = true;

  $infoInner.classList.remove('active');
  infoBtn.classList.remove('active');
  $albumCon.innerHTML = albumCon[num];
  $albumCon.classList.add('active');
  albumBtn.classList.add('active');
  $next.classList.remove('active');
  $prev.classList.remove('active');

  trackList();

  //버튼
  albumBtn.addEventListener('click', () => {
    $albumCon.innerHTML = '';
    $albumCon.classList.remove('active');
    albumBtn.classList.remove('active');

    $infoInner.classList.add('active');
    infoBtn.classList.add('active');

    isViewActive = false;
    isDown = false;
    infoBtn.style.cssText = `
        top:50%;
        letft : 50%
    `;
    $next.classList.add('active');
    $prev.classList.add('active');
  });
}

function trackList() {
  const $track = document.querySelector('.sec2 .track');
  const $trackList = document.querySelector('.sec2 .trackList');

  $track.addEventListener('click', () => {
    $trackList.classList.toggle('on');
  });
}

// main_sec3
const aniBg1 = document.querySelector('.sec3 .aniBg');
const $aniLogo = document.querySelector('.sec3 .logo');

document.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  let aniTop1 = $sec3.offsetTop - 150;
  let aniTop2 = $sec3.offsetTop + 50;

  if (scrollTop >= aniTop1) {
    aniBg1.classList.add('on');
  } else {
    aniBg1.classList.remove('on');
  }

  if (scrollTop > aniTop2) {
    $aniLogo.classList.add('on');
  }
});

const $aniBgCircle = document.querySelectorAll('.aniBgCircle');
$sec3.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;

  $aniBgCircle[0].style.cssText = `
      top: ${-250 + y / 10}px;
      right: ${100 + x / 10}px;
`;
  $aniBgCircle[1].style.cssText = `
      bottom: ${10 + y / 20}px;
      right: ${-150 + x / 10}px;
`;
  $aniBgCircle[2].style.cssText = `
      bottom: ${0 + y / 15}px;
      left: ${-50 + x / 10}px;
`;
  $aniBgCircle[3].style.cssText = `
      top: ${120 + y / 10}px;
      left: ${250 + x / 25}px;
`;
});

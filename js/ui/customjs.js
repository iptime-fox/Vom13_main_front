/*---------- HEADER HIDE AND SHOW ---------*/
setTimeout(() => {
  let prevScrollpos = window.pageYOffset;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 150) {
      header.classList.remove('top');
      if (prevScrollpos > currentScrollPos) {
        // 헤더 나타남
        header.style.top = 0;
      } else {
        // 헤더 사라짐
        header.style.top = -100 + '%';
      }
      prevScrollpos = currentScrollPos; // 마우스 이동 후 스크롤 위치값 재할당
    } else {
      header.classList.add('top');
    }
  });

  /*---------- MOBILE MENU HIDE AND SHOW ---------*/
  const mobileMenuIcon = document.querySelector('.menu-icon');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileCloseIcon = document.querySelector('.close-icon');
  mobileMenuIcon.addEventListener('click', function (e) {
    e.preventDefault(); // 스크롤 맨 위로 올라가는 디폴트 효과 막아줌
    mobileOverlay.classList.add('on');
    document.body.style.overflow = 'hidden'; // 메뉴 활성화 시, 모든 스크롤 멈춤
  });
  mobileCloseIcon.addEventListener('click', function (e) {
    e.preventDefault();
    mobileOverlay.classList.remove('on');
    document.body.style.overflow = 'auto';
  });

  // target, currenttarget
  mobileOverlay.addEventListener('click', function (e) {
    // console.log(e.target); // point to clicked element
    // console.log(e.currentTarget); // point to uppest element(최상위)
    if (
      e.target.getAttribute('class') !== 'mobile-menus' &&
      e.target.nodeName !== 'LI' &&
      e.target.nodeName !== 'A' &&
      e.target.nodeName !== 'IMG'
    ) {
      mobileOverlay.classList.remove('on');
      document.body.style.overflow = 'auto';
    }
  });
}, 300);
/*---------- BEST ITEMS SLIDE ---------*/
const isSwiper = document.querySelectorAll('.swiper-wrapper');
if (isSwiper.length > 0) {
  const bestArtSwiper = new Swiper('.best-image-wrapper .swiper', {
    slidesPerView: 4,
    spaceBetween: 15,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      480: {
        // 480 이하
        slidesPerView: 1, // 보이는 슬라이드 갯수
        slidesPerGroup: 1,
        spaceBetween: 0, // 하나의 페이지네이션에 묶이는 슬라이드 갯수
      },
      880: {
        // 880 이하
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1400: {
        // 1400 이하
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  /*---------- MD PICK TABS ----------*/
  const btns = document.querySelectorAll('.pick-tab-btn');
  const panels = document.querySelectorAll('.pick-tab-panel');

  function onTabs(i) {
    btns.forEach((btn) => {
      btn.classList.remove('on');
    });
    panels.forEach((panel) => {
      panel.classList.remove('on');
    });
    btns[i].classList.add('on');
    panels[i].classList.add('on');
  }

  // 함수 호출
  btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      onTabs(idx);
    });
  });

  /*---------- NEW ART SLIDE ---------*/
  const newArtSwiper = new Swiper('.new-art-slider-wrapper .swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      480: {
        // 480 이하
        slidesPerView: 1, // 보이는 슬라이드 갯수
        slidesPerGroup: 1,
        spaceBetween: 0, // 하나의 페이지네이션에 묶이는 슬라이드 갯수
      },
      786: {
        // 880 이하
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
    },
  });
}
/*---------- DIRECT GALLERY TEXT EFFECT ---------*/
const dgLetters = document.querySelectorAll('.direct-gallery-inside span');
dgLetters.forEach((lt, i) => {
  const delayIndex = i + 8;
  if (delayIndex < 10) {
    lt.style.animationDelay = `0.${delayIndex}s`;
  } else {
    lt.style.animationDelay = `${delayIndex / 10}s`;
    // const strIndex = string(i);
    // const strArr = [...strIndex];
    // lt.style.animationDelay = `${strArr[0]}.${strArr[1]}s`;
  }
});

/*---------- AOS Plugin Initiate ---------*/
AOS.init({
  duration: 1200,
});

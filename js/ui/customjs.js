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
  // }, 2000);
  /*---------- BEST ITEMS SLIDE ---------*/
  const isSwiper = document.querySelectorAll('.swiper-wrapper');
  if (isSwiper.length > 0) {
    const bestArtSwiper = new Swiper('.best-image-wrapper .swiper', {
      slidesPerView: 4,
      spaceBetween: 15,

      // If we need pagination
      pagination: {
        el: '.best-swiper-pagination',
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

    /*---------- NEW ART SLIDE ---------*/
    const newArtSwiper = new Swiper('.new-art-slider-wrapper .swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.new-swiper-pagination',
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

    /*---------- PRODUCT PAGE SLIDE ---------*/
    const contentsNumber = $('.swiper-contents .text-contents');
    const slideCount = $('.swiper-contents .swiper-slide').length;
    const num = $('.swiper-text-wrapper .num');
    console.log(slideCount);
    const productSwiper = new Swiper('.product .swiper', {
      slidesPerView: 1,
      loop: true,
      on: {
        init: function () {
          $('.swiper-text-wrapper .text-contents:first-of-type').addClass(
            'active'
          );

          num.text($(this)[0].activeIndex + ' / ' + slideCount);
        },
        slideChange: () => {
          contentsNumber.removeClass('active');
          contentsNumber.eq(productSwiper.realIndex).addClass('active');
          num.text(productSwiper.realIndex + 1 + ' / ' + slideCount);
        },
      },
      navigation: {
        nextEl: '.preview-swiper .btn_next',
        prevEl: '.preview-swiper .btn_prev',
      },
    });
  }
  /*---------- AOS Plugin Initiate ---------*/
  AOS.init({
    duration: 1200,
  });
}, 2000);

/*---------- MD PICK TABS ----------*/
// 1. 요소 선택
// pick 패널 요소
const btns = document.querySelectorAll('.pick-tab-btn');
const panels = document.querySelectorAll('.pick-tab-panel');

// admin 패널 요소
const adminBtns = document.querySelectorAll('.admin-btns button');
const adminPanels = document.querySelectorAll('.admin-panel');

function commonTabs(bts, pns) {
  function onTabs(i) {
    bts.forEach((btn) => {
      btn.classList.remove('on');
    });
    pns.forEach((panel) => {
      panel.classList.remove('on');
    });
    bts[i].classList.add('on');
    pns[i].classList.add('on');
  }
  // 함수 호출
  bts.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      onTabs(idx);
    });
  });
}

commonTabs(btns, panels); // pick 패널 실행
commonTabs(adminBtns, adminPanels); // admin 패널 실행

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

// 브라우저가 컨텐츠 내용 보다 크면 요소를 화면 위아래로 맞춤
function fitBrowerHeight(el1, el2) {
  const windowHeight = $(el1).outerHeight();
  const wrapperHeight = $(el2).outerHeight();

  if (windowHeight > wrapperHeight) {
    //786 < 1023
    $(el2).css({
      display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'space-between',
      height: '100vh',
    });
  } else {
    $(el2).css({
      display: 'block',
      height: 'auto',
    });
  }
}
setTimeout(() => {
  fitBrowerHeight(window, '.wrapper');
}, 2000);

// 모바일 버전 감지 후 PC 버전에서만 실행 시킴(계획)
// setTimeout(() => {
//   fitBrowerHeight(window, '.wrapper');
// }, 300);

// const delay = 200;
// let timer = null;
// $(window).on('resize', function () {
//   clearTimeout(timer);
//   timer = setTimeout(function () {
//     fitBrowerHeight(window, '.wrapper');
//     document.location.reload();
//   }, delay);
// });

/*---------- 이미지 미리보기 ---------*/
const imageFile = document.querySelector('#f_img');
if (imageFile) {
  imageFile.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      // console.log(e);
      const imagePreview = document.querySelector('#preview-img');
      imagePreview.setAttribute('src', e.target.result);
    };
    fitBrowerHeight(window, '.wrapper');
  });
}

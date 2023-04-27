/*---------- HEADER HIDE AND SHOW ---------*/
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

/*---------- BEST ITEMS SLIDE ---------*/
const bestArtSwiper = new Swiper('.best-image-wrapper .swiper', {
  slidesPerView: 4,
  spaceBetween: 15,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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

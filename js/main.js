"use strict";
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
// _.throttle(cb, 000ms) -> lodash module안에 있는 기능 제공. cb함수를 300ms에 한번씩 호출한다.
// scorll 의 경우 많이 cb를 호출하게 되므로 프로그램이 버벅거릴 수 있다. (프로그램이 무거졌을 경우)
window.addEventListener(
  "scroll",
  // _throttle(함수, 시간)
  _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      // hidden badge
      // gsap.to(요소, 지속시간(sec), {옵션}); -> 눈에서만 안보이게 한다.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // visible button
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // visible badge
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // hidden button
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  // gsap.to(요소, 지속시간(sec), {옵션});
  gsap.to(fadeEl, 1, {
    // 각각의 fadeEl을 0.7을 기준으로 delay시킨다. 0.7 1.4 2.1 2.8
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper('선택자', {옵션})
new Swiper(".notice-line .swiper-container", {
  // 방향은 수직
  direction: "vertical",
  // 자동재생
  autoplay: true,
  // 반복재생
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // direction: "horizontal", default
  // 한번에 보여줄 slide 개수 지정 default = 1
  slidesPerView: 3,
  // slide 사이의 여백을 10px로 지정
  spaceBetween: 10,
  // 첫번째 슬라이드를 센터에서 시작하겠다고 지정
  centeredSlides: true,
  // 반복 재생
  loop: true,
  // 자동 재생
  autoplay: {
    // optional default 3000ms "ms"는 생략
    delay: 5000,
  },
  pagination: {
    // element selector pagination
    el: ".promotion .swiper-pagination",
    // 사용자의 페이지 번호 요소 제어 여부
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  // 기본 값자체가 horizontal
  // direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  // promotionToggleBtn이 클릭 될 때 마다, isHidePromotion 값의 반대값을 할당해준다. true -> false, false -> true;
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // hide
    promotionEl.classList.add("hide");
  } else {
    // visible
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    // y축
    y: size,
    // 무한 반복!
    repeat: -1,
    // 한번 재생된 요소를 반대로 재생시켜준다.
    yoyo: true,
    // 반복 easeinout 설정
    ease: Power1.easeInOut,
    // 지연 시간
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    // 보여짐 여부를 감시할 요소를 지정
    triggerElement: spyEl,
    triggerHook: 0.8,
  }) //
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

"use strict";
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  // element.focus() element에 강제로 focus를 해준다.
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  // element.classList.add('className'); className을 가진 클래스를 추가 하겠다.
  searchEl.classList.add("focused");
  // element.setAttribute("html속성명", 'html속성값'); element의 html 속성값을 추가할 수 있다.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// blur <=> focus focusOut이 된다면, cb를 실행
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2021

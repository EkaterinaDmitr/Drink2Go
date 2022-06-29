const headerNav = document.querySelector(".header__navigation");
const navToggle = document.querySelector(".main-nav__toggle");

headerNav.classList.remove("header__navigation--nojs");

navToggle.addEventListener("click", () => {
  if (headerNav.classList.contains("header__navigation--closed")) {
    headerNav.classList.remove("header__navigation--closed");
    headerNav.classList.add("header__navigation--opened");
  } else {
    headerNav.classList.add("header__navigation--closed");
    headerNav.classList.remove("header__navigation--opened");
  }
});

const swiper = new Swiper(".swiper__wrapper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // SLIDER
  let slideIndex = 1,
    sliders = document.querySelectorAll(".slider-item"),
    dotsWrap = document.querySelector(".slider-control-list"),
    dots = document.querySelectorAll(".slider-control");

  // showSlides(slideIndex);

  function showSlides(n) {
    if (n > sliders.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sliders.length;
    }

    sliders.forEach((item) => item.classList.remove("active"));
    dots.forEach((item) => item.classList.remove("active"));

    sliders[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  dotsWrap.addEventListener("click", function (e) {
    for (let i = 1; i < dots.length + 1; i++) {
      if (
        e.target.classList.contains("slider-control") &&
        e.target == dots[i - 1]
      ) {
        currentSlide(i);
      }
    }
  });

  function smoothScroll(link, target) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Scroll
  const toAboutLink = document.querySelector("[href='#about']"),
    toWorkLink = document.querySelector("[href='#work']"),
    toShopLink = document.querySelector("[href='#shop']"),
    toContactLink = document.querySelector("[href='#contact']"),
    toHomeMobileLink = document.querySelector(".mobile-logo"),
    toHomeLink = document.querySelector(".desctop-logo");

  const aboutSection = document.getElementById("about"),
    workSection = document.getElementById("work"),
    shopSection = document.getElementById("shop"),
    contactSection = document.getElementById("contact"),
    homeSection = document.getElementById("home");

  smoothScroll(toAboutLink, aboutSection);
  smoothScroll(toWorkLink, workSection);
  smoothScroll(toShopLink, shopSection);
  smoothScroll(toContactLink, contactSection);
  smoothScroll(toHomeLink, homeSection);
  smoothScroll(toHomeMobileLink, homeSection);

  const sticky = document.querySelector(".main-nav");

  var stickyTop = 50;

  document.addEventListener("scroll", function () {
    window.scrollY >= stickyTop
      ? sticky.classList.add("fixed")
      : sticky.classList.remove("fixed");
  });

  // Menu mobile
  const navMenuWrap = document.querySelector(".nav-list-wrap ");

  if (navMenuWrap.classList.contains("active")) {
    navMenuWrap.classList.remove("active");
  }

  const menuBtn = document.querySelector(".menu-btn button");
  const menuItems = document.querySelectorAll(".nav-item");
  menuBtn.addEventListener("click", function () {
    navMenuWrap.classList.toggle("active");
  });

  // ЗАкрываем меню по клику на Esc
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
      navMenuWrap.classList.remove("active");
    }
  });

  // Закрываем блок по клику вне блока
  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = menuItems.length;
    const its_btnMenu = target == menuBtn;
    const menu_is_active = navMenuWrap.classList.contains("active");

    if (its_menu && !its_btnMenu && menu_is_active) {
      navMenuWrap.classList.remove("active");
    }
  });
});

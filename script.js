"use strict";
// Sticky navigation

const sectionOpereEl = document.querySelector(".gallery__item--1");
const nav = document.querySelector(".header__bottom-nav");
const header = document.querySelector("header");
const navHeight = header.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
  const ent = entries[0];
  // console.log(ent);

  if (!ent.isIntersecting) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  }
};
const obs = new IntersectionObserver(stickyNav, {
  // In the viewport
  root: null,
  threshold: 0,
  // rootMargin: `-${navHeight}px`,
});
obs.observe(sectionOpereEl);

const images = document.querySelectorAll(".gallery_img");

const openPopUp = function () {
  const galleryImgSrc = this.getAttribute("src");
  console.log(galleryImgSrc);

  document.getElementById("popup_img").src = galleryImgSrc;
  document.querySelector(".popup").style.visibility = "visible";
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".popup__content").style.opacity = 1;
};

const closePopUp = function () {
  document.getElementById("popup_img").src = "";
  document.querySelector(".popup").style.visibility = "hidden";
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup__content").style.opacity = 0;
};

images.forEach((image) => image.addEventListener("click", openPopUp));

document.querySelector(".popup__close").addEventListener("click", closePopUp);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !document.getElementById("popup_img").src == "") {
    console.log("work");
    closePopUp();
  }
});

popup.addEventListener("click", closePopUp);

// Page scrolling

document.querySelector(".main-nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Navbar animation
// const handleHover = function (e) {
//   if (e.target.classList.contains("main-nav-link")) {
//     const link = e.target;
//     const siblings = link.closest(".header__bottom-nav").querySelectorAll("a");

//     siblings.forEach((s) => {
//       if (s !== link) s.style.opacity = this;
//       console.log("done");
//     });
//     console.log("not done");
//   }
// };

// nav.addEventListener("mouseover", handleHover.bind(0.5));
// nav.addEventListener("mouseout", handleHover.bind(1));

"use strict";

// const reviews = document.getElementsByClassName("reviews");
// const articles = document.getElementsByClassName("article");
// const btnLeftR = document.querySelector(".btn--left-r");
// const btnRightR = document.querySelector(".btn--right-r");
// const btnLeftA = document.querySelector(".btn--left-a");
// const btnRightA = document.querySelector(".btn--right-a");
// let pre = 0;
// let rev = 0;
// let prea = 0;
// let art = 0;
// carousel(reviews, rev, pre);
// carousel(articles, art, pre);

// // Call the addEventListener method for review section
// ["click", "touch"].forEach((event) => {
//   btnLeftR.addEventListener(event, function () {
//     reviews;
//     pre = rev;
//     rev -= 1;
//     carousel(reviews, rev, pre);
//   });
// });

// ["click", "touch"].forEach((event) => {
//   btnRightR.addEventListener(event, function () {
//     reviews;
//     pre = rev;
//     rev += 1;
//     carousel(reviews, rev, pre);
//   });
// });

// // Call the addEventListener method for review section
// ["click", "touch"].forEach((event) => {
//   btnLeftA.addEventListener(event, function () {
//     articles;
//     prea = art;
//     art -= 1;
//     carousel(articles, art, prea);
//   });
// });

// ["click", "touch"].forEach((event) => {
//   btnRightA.addEventListener(event, function () {
//     articles;
//     prea = art;
//     art += 1;
//     carousel(articles, art, prea);
//   });
// });

// function greaterOrEqual() {
//   let review = 0;
//   let preav = type.length - 1;
// }

// function lessthan() {
//   let preav = 0;
// }

// function carousel(type, review, preav) {
//   type;
//   if (type === reviews && review >= type.length) {
//     review = 0;
//     preav = type.length - 1;
//     rev = 0;
//   }
//   if (type === reviews && review < 0) {
//     review = type.length - 1;
//     preav = 0;
//     rev = type.length - 1;
//   }
//   if (type === articles && review >= type.length) {
//     review = 0;
//     preav = type.length - 1;
//     art = 0;
//   }
//   if (type === articles && review < 0) {
//     review = type.length - 1;
//     preav = 0;
//     art = type.length - 1;
//   }
//   type[preav].classList.remove("visible");
//   type[review].classList.add("visible");
//   // type[review].classlist.toggle("visible");
//   // type[preav].classlist.toggle("visible");
// }

// Updatet slider
const reviews = document.querySelectorAll(".reviews");
const btnLeftR = document.querySelector(".btn--left-r");
const btnRightR = document.querySelector(".btn--right-r");

let curSlideR = 0;
const maxSlideR = reviews.length - 1;
console.log(maxSlideR);

const goToSlideR = function (slide) {
  reviews.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - curSlideR)}%`;
  });
};

goToSlideR(0);

// Next slide
const nextSlideR = function () {
  if (curSlideR === maxSlideR) {
    curSlideR = 0;
  } else {
    curSlideR++;
  }
  goToSlideR(curSlideR);
};

// Preavious slide
const prevSlideR = function () {
  if (curSlideR === 0) {
    curSlideR = maxSlideR;
  } else {
    curSlideR--;
  }
  goToSlideR(curSlideR);
};

btnRightR.addEventListener("click", nextSlideR);
btnLeftR.addEventListener("click", prevSlideR);

const articles = document.querySelectorAll(".article");
const btnLeftA = document.querySelector(".btn--left-a");
const btnRightA = document.querySelector(".btn--right-a");

let curSlideA = 0;
const maxSlideA = articles.length - 1;
console.log(maxSlideA);

const goToSlideA = function (slide) {
  articles.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * (i - curSlideA)}%`;
  });
};

goToSlideA(0);

// Next slide
const nextSlideA = function () {
  if (curSlideA === maxSlideA) {
    curSlideA = 0;
  } else {
    curSlideA++;
  }
  goToSlideA(curSlideA);
};

// Preavious slide
const prevSlideA = function () {
  if (curSlideA === 0) {
    curSlideA = maxSlideA;
  } else {
    curSlideA--;
  }
  goToSlideA(curSlideA);
};

btnRightA.addEventListener("click", nextSlideA);
btnLeftA.addEventListener("click", prevSlideA);

"use strict";

const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
let pre = 0;
let rev = 0;
carousel(rev, pre);

// Call the addEventListener method
["click", "touch"].forEach((event) => {
  btnLeft.addEventListener(event, function () {
    pre = rev;
    rev -= 1;
    console.log(rev);
    console.log(pre);
    carousel(rev, pre);
  });
});

["click", "touch"].forEach((event) => {
  btnRight.addEventListener(event, function () {
    pre = rev;
    rev += 1;
    console.log(rev);
    console.log(pre);
    carousel(rev, pre);
  });
});

function carousel(review, preav) {
  let reviews = document.getElementsByClassName("reviews");
  console.log(reviews);
  if (review >= reviews.length) {
    review = 0;
    preav = reviews.length - 1;
    rev = 0;
    console.log("+");
  }
  if (review < 0) {
    review = reviews.length - 1;
    preav = 0;
    rev = reviews.length - 1;
    console.log("-");
  }
  console.log(preav);
  reviews[preav].classList.remove("reviews--visible");
  reviews[review].classList.add("reviews--visible");
  console.log("c");
}

"use strict";

const images = document.querySelectorAll(".gallery__second_img");

const openPopUpSec = function () {
  const gallerySecImgSrc = this.getAttribute("src");
  console.log(gallerySecImgSrc);
  document.getElementById("popup_img").src = gallerySecImgSrc;
  document.querySelector(".popup").style.visibility = "visible";
  document.querySelector(".popup").style.opacity = 1;
  document.querySelector(".popup__content").style.opacity = 1;
};

const closePopUpSec = function () {
  document.getElementById("popup_img").src = "";
  document.querySelector(".popup").style.visibility = "hidden";
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup__content").style.opacity = 0;
};

images.forEach((image) => image.addEventListener("click", openPopUpSec));

document
  .querySelector(".popup__close")
  .addEventListener("click", closePopUpSec);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !document.getElementById("popup_img").src == "") {
    console.log("work");
    closePopUpSec();
  }
});

popup.addEventListener("click", closePopUpSec);

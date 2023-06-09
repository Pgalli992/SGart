// Sticky navigation

const sectionOpereEl = document.querySelector(".gallery__item--1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionOpereEl);

const images = document.querySelectorAll(".gallery_img");

images.forEach((image) =>
  image.addEventListener("click", function () {
    const galleryImgSrc = this.getAttribute("src");
    console.log(galleryImgSrc);
    document.getElementById("popup_img").src = galleryImgSrc;
    document.querySelector(".popup").style.visibility = "visible";
    document.querySelector(".popup").style.opacity = 1;
    document.querySelector(".popup__content").style.opacity = 1;
  })
);

document.querySelector(".popup__close").addEventListener("click", function () {
  document.getElementById("popup_img").src = "";
  document.querySelector(".popup").style.visibility = "hidden";
  document.querySelector(".popup").style.opacity = 0;
  document.querySelector(".popup__content").style.opacity = 0;
});

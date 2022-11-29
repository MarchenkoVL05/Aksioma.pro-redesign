window.addEventListener("DOMContentLoaded", () => {
  let fadeInLeft = document.querySelectorAll(".fadeInLeft");

  fadeInLeft.forEach((item, itemIndex) => {
    if (itemIndex === 0) {
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    }
  });
  window.addEventListener("scroll", () => {
    fadeInLeft.forEach((item) => {
      let position = item.getBoundingClientRect().top;
      if (position < window.innerHeight / 2) {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }
    });
  });

  let ourTeamSlider = document.querySelectorAll(".our-team__left-icon");
  let ourTeamSliderImg = document.querySelector(".our-team__left-img");

  if (ourTeamSlider && ourTeamSliderImg) {
    ourTeamSlider.forEach((slide, slideIndex) => {
      slide.addEventListener("click", () => {
        changeOurTeamSlide(slideIndex);
      });
    });

    function changeOurTeamSlide(slideIndex) {
      if (slideIndex === 0) {
        ourTeamSliderImg.src = "./images/1c-img.png";
      }
      if (slideIndex === 1) {
        ourTeamSliderImg.src = "./images/1c-bx.png";
      }
      if (slideIndex === 2) {
        ourTeamSliderImg.src = "./images/bx24.png";
      }
    }

    let slideTimerCount = 0;

    function autoSlide() {
      changeOurTeamSlide(slideTimerCount);
      slideTimerCount++;

      if (slideTimerCount > 2) {
        slideTimerCount = 0;
      }
    }

    setInterval(autoSlide, 4000);
  }

  let accordeonItem = document.querySelectorAll(".accordeon__item");

  if (accordeonItem) {
    accordeonItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.toggle("accordeon__item-descr--show");
        item.querySelector("img").classList.toggle("accordeon__item-arrow--rotate");
      });
    });
  }
});

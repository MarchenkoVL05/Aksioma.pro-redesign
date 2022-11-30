window.addEventListener("DOMContentLoaded", () => {
  // Анимация появления слева
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

  // Бургер меню
  let openBurger = document.querySelector(".open-burger");
  let burger = document.querySelector(".burger");
  let burgerClose = document.querySelector(".burger__close");
  let overlay = document.querySelector(".overlay");

  if (openBurger && burger && burgerClose && overlay) {
    openBurger.addEventListener("click", () => {
      burger.style.opacity = "1";
      burger.style.transform = "TranslateX(-500px)";
      overlay.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
    });

    burgerClose.addEventListener("click", () => {
      burger.style.opacity = "0";
      burger.style.transform = "TranslateX(0)";
      overlay.style.display = "none";
      document.querySelector("body").style.overflowY = "visible";
    });
  }

  let sectionInfo = document.querySelectorAll(".burger__nav-section-info");
  if (sectionInfo) {
    sectionInfo.forEach((section) => {
      section.addEventListener("click", (e) => {
        section.nextElementSibling.style.display = "flex";
      });
    });
  }

  // Первый слайдер на главной странице
  let ourTeamSlider = document.querySelectorAll(".our-team__left-icon");
  let ourTeamSliderImg = document.querySelector(".our-team__left-img");

  let ourTeamLeftDescr = document.querySelector(".our-team__left-descr");

  if (ourTeamSlider && ourTeamSliderImg && ourTeamLeftDescr) {
    ourTeamSlider.forEach((slide, slideIndex) => {
      slide.addEventListener("click", () => {
        changeOurTeamSlide(slideIndex);
      });
    });

    function changeOurTeamSlide(slideIndex) {
      // Подход конечно в лоб, можно переписать изящней когда будет время
      if (slideIndex === 0) {
        ourTeamSlider[0].style.backgroundColor = "#a53dff";
        ourTeamSlider[0].querySelector("img").src = "./images/1c--white.png";

        ourTeamSlider[1].style.backgroundColor = "#fff";
        ourTeamSlider[1].querySelector("img").src = "./images/1c-bx--purple.png";

        ourTeamSlider[2].style.backgroundColor = "#fff";
        ourTeamSlider[2].querySelector("img").src = "./images/24.png";

        ourTeamLeftDescr.textContent = "«1С:Предприятие 8.3»";
        ourTeamSliderImg.src = "./images/1c-img.png";
      }
      if (slideIndex === 1) {
        ourTeamSlider[0].querySelector("img").src = "./images/1c.png";
        ourTeamSlider[0].style.backgroundColor = "#fff";

        ourTeamSlider[1].style.backgroundColor = "#a53dff";
        ourTeamSlider[1].querySelector("img").src = "./images/bx.png";

        ourTeamSlider[2].style.backgroundColor = "#fff";
        ourTeamSlider[2].querySelector("img").src = "./images/24.png";

        ourTeamLeftDescr.textContent = "«1С-Битрикс CMS»";
        ourTeamSliderImg.src = "./images/1c-bx.png";
      }
      if (slideIndex === 2) {
        ourTeamSlider[0].querySelector("img").src = "./images/1c.png";
        ourTeamSlider[0].style.backgroundColor = "#fff";

        ourTeamSlider[1].style.backgroundColor = "#fff";
        ourTeamSlider[1].querySelector("img").src = "./images/1c-bx--purple.png";

        ourTeamSlider[2].style.backgroundColor = "#a53dff";
        ourTeamSlider[2].querySelector("img").src = "./images/bx24--white.png";

        ourTeamLeftDescr.textContent = "«CRM-система Битрикс24»";
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

  // Второй слайдер на главной странице
  let webCards = document.querySelector(".web__cards");
  let webCardsInner = document.querySelector(".web__cards-inner");
  let dots = document.querySelectorAll(".dot");

  let webCardsWidth;

  if (webCards) {
    webCardsWidth = webCards.offsetWidth;
  }

  if (dots) {
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => {
        slideWeb(dotIndex);
      });
    });
  }

  function slideWeb(dotIndex) {
    if (dotIndex == 0 && webCardsInner) {
      webCardsInner.style.transform = `TranslateX(0)`;
      dots[0].classList.add("dot--active");
      dots[1].classList.remove("dot--active");
    }
    if (dotIndex == 1 && webCardsInner) {
      // 24 - это свойство gap, без него слайдер не доедет до конца контейнера
      webCardsInner.style.transform = `TranslateX(-${webCardsWidth + 24}px)`;
      dots[1].classList.add("dot--active");
      dots[0].classList.remove("dot--active");
    }
  }

  setInterval(() => {
    slideWeb(Math.round(Math.random()));
  }, 5000);

  // Аккордеон в секции Учебный центр на главной странице
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

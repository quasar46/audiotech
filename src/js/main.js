document.addEventListener('DOMContentLoaded', function () {

  const burgerBtn = document.querySelector('.burger');
  burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
  })

  const minViewPort = (min = 360) => {
    if (window.innerWidth <= min) {
      const viewport = document.querySelector('[name="viewport"]');
      if (viewport) viewport.setAttribute("content", `width=${min}, user-scalable=no`);
    }
  };

  minViewPort();

  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 11,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      381: {
        slidesPerView: 9,
      },
      769: {
        slidesPerView: 11,
      }
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },

  });


})

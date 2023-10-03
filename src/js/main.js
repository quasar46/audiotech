document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger");
  const mainNav = document.querySelector(".main-nav");
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  const minViewPort = (min = 360) => {
    if (window.innerWidth <= min) {
      const viewport = document.querySelector('[name="viewport"]');
      if (viewport)
        viewport.setAttribute("content", `width=${min}, user-scalable=no`);
    }
  };

  minViewPort();

  const swiper = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    // effect: 'fade',
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 750,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      // dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="20" height="20" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="transparent" stroke-width="4"></circle><circle class="svg__circle-second" cx="14" cy="14" r="5.5" fill="red" stroke-width=""></circle></svg></span>';
      },
    },
  });

  const swiperProductsActual = new Swiper(".actual-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      360: {
        slidesPerView: "auto",
      },
    },
  });

  const swiperThumbs = new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  const swiperProduct = new Swiper(".swiper-product", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  const showSubMenu = function () {
    const btnShowSubMenu = document.querySelector("#showMainSubmenu");
    const wrapMainSubMenu = document.querySelector(".main-submenu");
    btnShowSubMenu.addEventListener("mouseover", () => {
      wrapMainSubMenu.classList.add("active");
    });
    wrapMainSubMenu.addEventListener("mouseleave", () => {
      wrapMainSubMenu.classList.remove("active");
    });
  };

  if (window.innerWidth > 1024) {
    showSubMenu();
  }

  const showFilter = function () {
    const btnShowFilter = document.querySelector("#showFilter");
    const filterWindow = document.querySelector(".filter");
    if (btnShowFilter !== null) {
      btnShowFilter.addEventListener("click", function () {
        filterWindow.classList.add("active");
        scrollLock.disablePageScroll();
      });
    }
  };

  showFilter();

  const overlay = document.querySelector("#overlay");

  btnSubmitReg = document.querySelector('.modal__reg .btn');

  btnSubmitReg.addEventListener('click', function (e) {
    e.preventDefault();
    modalReg.classList.remove('active');
    modalAccept.classList.add('active');
  })

  document.addEventListener('click', function (e) {
    if (e.target.dataset.target === 'modal-reg') {
      e.preventDefault();
      scrollLock.disablePageScroll();
      document.querySelector('#modalReg').classList.add('active');
      overlay.classList.add('active');
    } else if (e.target.dataset.target === 'modal-call') {
      e.preventDefault();
      scrollLock.enablePageScroll();
      document.querySelector('#modalCall').classList.add('active');
      overlay.classList.add('active');
    } else if (e.target.dataset.close === 'modal') {
      e.preventDefault();
      scrollLock.enablePageScroll();
      e.target.closest('.modal').classList.remove('active');
      overlay.classList.remove('active');
    }
  });

  customSelect("select");

  new AirDatepicker('#input');

  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic",
    },
    Toolbar: {
      display: {
        left: [],
        right: ["close"],
      },
    },
  });

});

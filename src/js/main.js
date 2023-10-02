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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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

  const btnsCloseWindow = document.querySelectorAll(".close-window");

  btnsCloseWindow.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      scrollLock.enablePageScroll();
      btn.closest("div").classList.remove("active");
      if (overlay.classList.contains("active")) {
        overlay.classList.remove("active");
      }
    });
  });

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
  const btnsShowReg = document.querySelectorAll(".showModalReg");
  const btnsShowCall = document.querySelectorAll(".showModalCall");
  const modalReg = document.querySelector("#modalReg");
  const modalAccept = document.querySelector('#modalAccept');
  const modalCall = document.querySelector("#modalCall");

  btnSubmitReg = document.querySelector('.modal__reg .btn');

  btnSubmitReg.addEventListener('click', function(e) {
    e.preventDefault();
    modalReg.classList.remove('active');
    modalAccept.classList.add('active');
  })

  btnsShowReg.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      scrollLock.disablePageScroll();
      overlay.classList.add("active");
      modalReg.classList.add("active");
    });
  });

  btnsShowCall.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      scrollLock.disablePageScroll();
      overlay.classList.add("active");
      modalCall.classList.add("active");
    });
  });

  customSelect("select");


  new AirDatepicker('#input');

});

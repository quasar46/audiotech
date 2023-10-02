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
});

const btnsCloseWindow = document.querySelectorAll('.close-window');

btnsCloseWindow.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    scrollLock.enablePageScroll();
    btn.closest('div').classList.remove('active');
  });
})

const showFilter = function () {
  const btnShowFilter = document.querySelector('#showFilter');
  const filterWindow = document.querySelector(".filter");
  btnShowFilter.addEventListener("click", function () {
    console.log(this);
    filterWindow.classList.add("active");
    scrollLock.disablePageScroll();
  });
};

showFilter();

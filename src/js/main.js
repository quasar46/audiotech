document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger");
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("active");
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

  const btnShowSubMenu = document.querySelector("#showMainSubmenu");
  const wrapMainSubMenu = document.querySelector(".main-submenu");
  btnShowSubMenu.addEventListener("mouseover", () => {
    wrapMainSubMenu.classList.add("active");
  });
  wrapMainSubMenu.addEventListener("mouseleave", () => {
    wrapMainSubMenu.classList.remove("active");
  });
});

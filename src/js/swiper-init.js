const mainSlider = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    effect: 'fade',
    parallax: true,
    loop: true,
    loopFillGroupWithBlank: false,
    speed: 750,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".main-slider .swiper-button-next",
        prevEl: ".main-slider .swiper-button-prev"
    },
    pagination: {
        el: ".main-slider .swiper-pagination",
        // dynamicBullets: true,
        renderBullet: function (index, className) {
            return('<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="20" height="20" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="transparent" stroke-width="4"></circle><circle class="svg__circle-second" cx="14" cy="14" r="5.5" fill="red" stroke-width=""></circle></svg></span>');
        }
    }
});

const swiperProductsActual = new Swiper(".actual-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".actual-slider .swiper-button-next",
        prevEl: ".actual-slider .swiper-button-prev"
    },
    pagination: {
        el: ".actual-slider .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        1024: {
            slidesPerView: 4
        },
        360: {
            slidesPerView: "auto"
        }
    }
});

const swiperThumbs = new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical"
});

const swiperProduct = new Swiper(".swiper-product", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-product .swiper-button-next",
        prevEl: ".swiper-product .swiper-button-prev"
    },
    thumbs: {
        swiper: swiperThumbs
    }
});

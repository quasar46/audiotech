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
    speed: 750,
    autoplay: {
        delay: 7000
    },
    navigation: {
        nextEl: ".actual-slider .swiper-button-next",
        prevEl: ".actual-slider .swiper-button-prev"
    },
    pagination: {
        el: ".actual-slider .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        941: {
            slidesPerView: 4
        },
        300: {
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
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-product .swiper-button-next",
        prevEl: ".swiper-product .swiper-button-prev"
    },
    lazy: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: swiperThumbs
    },
    pagination: {
        el: '.swiper-product .swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

const previews = document.querySelectorAll('.product__preview');
const fullPics = document.querySelectorAll('.product__full .slideFull');
const thumbsPics = document.querySelectorAll('.swiper-thumbs .swiper-slide');
const thumbsWrap = document.querySelector('.swiper-thumbs');
const productPaginationWrap = document.querySelector('.swiper-product__wrap .swiper-pagination');
const productPagination = document.querySelectorAll('.swiper-product__wrap .swiper-pagination-bullet');

previews.forEach((preview, i) => {
    preview.addEventListener('click', function (e) {
        e.preventDefault();
        btnCloseFull.classList.add('active');
        swiperThumbs.slideTo(i);
        swiperProduct.slideTo(i);
        // swiperProduct.pagination.bullets[i];
        fullPics[i].classList.add('show');
        thumbsWrap.classList.add('active');
        if (window.innerWidth <= 940) {
            productPaginationWrap.style.position = 'fixed';
        }
    })
    productPagination[i].addEventListener('click', function () {
        if (btnCloseFull.classList.contains('active')) {
            fullPics.forEach(item => {
                item.classList.remove('show');
            })
            thumbsWrap.classList.add('active');
            fullPics[i].classList.add('show');
        }
        swiperProduct.pagination.bullets[i];


    })
    thumbsPics[i].addEventListener('click', function (e) {
        if (thumbsWrap.classList.contains('active')) {
            e.preventDefault();
            swiperThumbs.slideTo(i);
            swiperProduct.slideTo(i);

            fullPics.forEach(item => {
                item.classList.remove('show');
            })
            fullPics[i].classList.add('show');
        }
    })
})

const btnCloseFull = document.querySelector('#closeFullWindow');
btnCloseFull.addEventListener('click', function () {
    this.classList.toggle('active');
    fullPics.forEach(item => {
        item.classList.remove('show');
        thumbsWrap.classList.remove('active');
    })
    if (window.innerWidth <= 940) {
        productPaginationWrap.style.position = '';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27 && btnCloseFull.classList.contains('active')) {
        fullPics.forEach(item => {
            item.classList.remove('show');
            thumbsWrap.classList.remove('active');
        })
        btnCloseFull.classList.remove('active');
        if (window.innerWidth <= 940) {
            productPaginationWrap.style.position = '';
        }
    }
})
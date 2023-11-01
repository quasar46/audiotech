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
            return ('<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="20" height="20" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="transparent" stroke-width="2"></circle><circle class="svg__circle-second" cx="14" cy="14" r="7" fill="red" stroke-width=""></circle></svg></span>');
        }
    }
});

const swiperProductsActual = new Swiper(".actual-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    // loop: true,
    speed: 750,
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
            slidesPerView: "auto",
            slidesPerGroup: 1,
        }
    }
});

const swiperPopular = new Swiper(".popular-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    loop: true,
    speed: 750,
    navigation: {
        nextEl: ".popular-slider .swiper-button-next",
        prevEl: ".popular-slider .swiper-button-prev"
    },
    pagination: {
        el: ".popular-slider .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        941: {
            slidesPerView: 4
        },
        300: {
            slidesPerView: "auto",
            slidesPerGroup: 1,
        }
    }
});

const basketSlider = new Swiper(".basket-slider", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    loop: true,
    speed: 750,
    navigation: {
        nextEl: ".basket-slider .swiper-button-next",
        prevEl: ".basket-slider .swiper-button-prev"
    },
    pagination: {
        el: ".basket-slider .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        941: {
            slidesPerView: 4
        },
        300: {
            slidesPerView: "auto",
            slidesPerGroup: 1,
        }
    }
});

if (window.innerWidth <= 940) {
    const swiperBlog = new Swiper(".blog-slider", {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        loop: true,
        speed: 750,
        breakpoints: {
            0: {
                slidesPerView: "auto",
                spaceBetween: 20,
                loop: true,
            }
        },
        navigation: {
            nextEl: ".blog-slider .swiper-button-next",
            prevEl: ".blog-slider .swiper-button-prev"
        },
        pagination: {
            el: ".blog-slider .swiper-pagination",
            clickable: true
        },
    });
}


const articlesSlider = new Swiper(".articles-slider", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    // loop: true,
    speed: 750,
    breakpoints: {
        941: {
            slidesPerView: 4,
        },
        701: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: "auto",
        },
    },
    navigation: {
        nextEl: ".articles-slider .swiper-button-next",
        prevEl: ".articles-slider .swiper-button-prev"
    },
    pagination: {
        el: ".articles-slider .swiper-pagination",
        clickable: true
    },
});


if (window.innerWidth <= 940) {
    const swiperArticle = new Swiper(".article-slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        speed: 750,
        navigation: {
            nextEl: ".article-slider .swiper-button-next",
            prevEl: ".article-slider .swiper-button-prev"
        },
        pagination: {
            el: ".article-slider .swiper-pagination",
            clickable: true
        },
        breakpoints: {
            701: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            0: {
                slidesPerView: "auto",
            }
        }
    });
}



const swiperThree = new Swiper('.swiper-three', {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        701: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        0: {
            slidesPerView: "auto",
            slidesPerGroup: 1,
        }
    }
});

const swiperThreeNews = new Swiper('.swiper-three-news', {
    spaceBetween: 20,
    slidesPerView: 3,
    // loop: true,
    breakpoints: {
        701: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        0: {
            slidesPerView: "auto",
            slidesPerGroup: 1,
        }
    }
});

const swiperThumbs = new Swiper(".product__slider .swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
    on: {
        click: function () {
            swiperProduct2.slideTo(swiperProduct.activeIndex);
        },

    }
});

const swiperProduct = new Swiper(".product__slider .swiper-product", {
    slidesPerView: 1,
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
        clickable: true,
    },
    on: {
        slideChange: function () {
            swiperProduct2.slideTo(swiperProduct.activeIndex);
        }
    }
});

const swiperThumbs2 = new Swiper(".product__slider2 .swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",

    on: {
        click: function () {
            swiperProduct.slideTo(swiperProduct2.activeIndex);
        },

    }
});

const swiperProduct2 = new Swiper(".product__slider2 .swiper-product", {
    slidesPerView: 1,
    lazy: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: swiperThumbs2
    },
    pagination: {
        el: '.product__slider2 .swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    on: {
        slideChange: function () {
            swiperProduct.slideTo(swiperProduct2.activeIndex);
        }
    }
});

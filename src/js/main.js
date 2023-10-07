document.addEventListener("DOMContentLoaded", function () {
    const minViewPort = (min = 300) => {
        if (window.innerWidth<= min) {
        const viewport = document.querySelector('[name="viewport"]');
        if (viewport)
          viewport.setAttribute("content", `width=${min}, user-scalable=no`);
    }
    };

    minViewPort();


    customSelect(".mySelect");

    new AirDatepicker('#airpicker', [

    ]);
    new AirDatepicker('#airpicker2', [

    ]);

    window.onscroll = function () {
        myFunction()
    };
    const header = document.querySelector("header");
    const sticky = header.offsetTop;
    const headerHeight = header.clientHeight;
    function myFunction() {
        if (window.scrollY> sticky) {
            header.classList.add("sticky");
            document.querySelector('.sticky + main').style.paddingTop = headerHeight + 'px';
        } else {
            header.classList.remove("sticky");
            document.querySelector('main').style.paddingTop = '0px';
        }
    }

    const menuFullScreen = document.querySelector('.main-nav__submenu-wrap--full-screen')
    if (window.innerWidth > 1024) {
        menuFullScreen.style.top = headerHeight - 1 + 'px';
    }

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        document.addEventListener('click', e => {
            if (!e.target.closest('.modal') && !e.target.closest('.air-datepicker')) {
                modal.classList.remove('active');
                overlay.classList.remove('active');
                scrollLock.enablePageScroll();
            }
        })
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 27) {
                modal.classList.remove('active');
                overlay.classList.remove('active');
                scrollLock.enablePageScroll();
            }
        });
    })

    const burgerBtn = document.querySelector(".burger");
    const mainNav = document.querySelector(".main-nav");
    burgerBtn.addEventListener("click", function () {
        if (burgerBtn.classList.contains('active')) {
            document.body.style = "overflow: ";
        } else {
            document.body.style = "overflow: hidden";
        } burgerBtn.classList.toggle("active");
        mainNav.classList.toggle("active");
    });

    const showFilter = function () {
        const btnShowFilter = document.querySelector("#showFilter");
        const filterWindow = document.querySelector(".filter");
        if (btnShowFilter !== null) {
            btnShowFilter.addEventListener("click", function () {
                filterWindow.classList.add("active");
                document.body.style = "overflow: hidden";
            });
        }
    };

    showFilter();

    const overlay = document.querySelector("#overlay");

    // btnSubmitReg = document.querySelector('.modal__reg .btn');

    // btnSubmitReg.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     modalReg.classList.remove('active');
    //     modalAccept.classList.add('active');
    // })



    document.addEventListener('click', function (e) {
        if (e.target.dataset.target === 'modal-reg' || e.target.closest('a[data-target="modal-reg"]')) {
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


    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            type: "classic"
        },
        Toolbar: {
            display: {
                left: [],
                right: ["close"]
            }
        }
    });

    if (document.querySelectorAll('.tabs').length > 0) {
        new ItcTabs('.tabs');
    }

    // add in favorite
    if (document.querySelectorAll('.btn-favorite').length > 0) {
        document.querySelector('.btn-favorite').addEventListener('click', function (e) {
            e.target.classList.toggle('active');
        })
    }

    const counters = document.querySelectorAll('[data-counter]');
    if (counters) {
        counters.forEach(counter => {
            counter.addEventListener('click', e => {
                const target = e.target;
                if (target.closest('.counter__btn')) {
                    let value = parseInt(target.closest('.counter').querySelector('input').value);
                    if (target.closest('.counter__btn--plus')) {
                        value++;
                    } else {
                        -- value;
                    }
                    if (value <= 0) {
                        value = 0;
                        target.closest('.counter').querySelector('.counter__btn--minus').classList.add('disabled');
                    } else {
                        target.closest('.counter').querySelector('.counter__btn--minus').classList.remove('disabled');
                    } target.closest('.counter').querySelector('input').value = value;
                }
            })
        })
    }

    document.addEventListener('click', e => {
        target = e.target;
        if (target.classList.contains('addInBasket')) {
            target.remove();
            document.querySelector('.counter').classList.add('show');
        }
    })


    // tooltip
    let tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.hidden = true;
    document.body.append(tip);

    document.addEventListener("mouseover", showTip);
    document.addEventListener("mouseout", hideTip);

    function showTip(event) {
        let tar = event.target;
        if (! tar.closest('.product-descr__inf')) 
            return;
        


        tip.innerHTML = tar.closest('.product-descr__inf').dataset.tooltip;
        tip.hidden = false;

        let tarRect = tar.getBoundingClientRect(); // координаты HTML-элемента
        let x,
            y; // координаты подсказки

        x = tarRect.x; // подсказка над
        y = tarRect.y - tip.offsetHeight - 5; // HTML-элементом

        tip.style.left = x + "px"; // перемещаем подсказку
        tip.style.top = y + "px"; // в нужное место
    }

    function hideTip() {
        tip.hidden = true;
    }

    if (document.querySelectorAll('.basket__items').length > 0) {
        document.querySelector('.basket__items').addEventListener('click', e => {
            const target = e.target;
            if (target.closest('.basket__remove-item')) {
                target.closest('.basket__item').remove();
            }
        })
    }

    if (document.querySelectorAll('.filter').length > 0) {
        document.querySelector('.filter').addEventListener('click', e => {
            const target = e.target;
            if (target.closest('.close-filter')) {
                target.closest('.filter').classList.remove('active');
                document.body.style = "overflow: ";
            }
        })
    }

    const btnsLink = document.querySelectorAll('.main-nav__link');
    btnsLink.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('active');
            item.nextElementSibling.classList.toggle('active');
        })
    })

    const btnsTitle = document.querySelectorAll('.main-submenu__title');
    btnsTitle.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('active');
            item.nextElementSibling.classList.toggle('show');
        })
    })

    if (window.innerWidth < 1025) {
        mainNav.style.height = `calc(100vh - ${headerHeight}px)`;
    }


});

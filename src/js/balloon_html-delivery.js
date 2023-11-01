ymaps.ready(function () {
    // Создание экземпляра карты и его привязка к созданному контейнеру.
    var myMap = new ymaps.Map('map-delivery', {
            center: [55.751574, 37.573856],
            zoom: 9,
            behaviors: ['default', 'scrollZoom'],
            controls: [],
        }),

        // Создание макета балуна на основе Twitter Bootstrap.
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="popover top">' +
                '<a class="close" href="#"><img src="img/icns/md-x.svg"></a>' +
                '<div class="arrow"></div>' +
                '<div class="popover-inner">' +
                '$[[options.contentLayout observeSize minWidth=220 maxWidth=220 maxHeight=350]]' +
                '</div>' +
                '</div>', {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.popover', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function () {
                    this._$element.find('.close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function () {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if(!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                    });
                },

                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function (e) {
                    e.preventDefault();
                    this.events.fire('userclose');
                },

                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                // getShape: function () {
                //     if(!this._isElement(this._$element)) {
                //         return MyBalloonLayout.superclass.getShape.call(this);
                //     }

                //     var position = this._$element.position();

                //     return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                //         [position.left, position.top], [
                //             position.left + this._$element[0].offsetWidth,
                //             position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                //         ]
                //     ]));
                // },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function (element) {
                    return element && element[0] && element.find('.arrow')[0];
                }
            }),

        // Создание вложенного макета содержимого балуна.
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<h3 class="popover-title">$[properties.balloonHeader]</h3>' +
                '<div class="popover-content">$[properties.balloonContent]</div>'
        ),

        // Создание метки с пользовательским макетом балуна.
        myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonHeader: 'Почтовое отделение 900524',
            balloonContent: '<ul><li><span>Адрес</span><span>900524, Алма-Ата, ул. Богенбай Батыра, 134</span></li><li><span>Время работы</span><span>Пн-Пт: 8:00-20:00<br>Выходные: Сб, Вс</span></li><li><span>Оплата</span><span>карта, наличные</span></li><li class="popover__footer"><span>Доставка</span><span>от 2 дней / 300 ₽</span></li></ul>'
        }, {
            balloonShadow: false,
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            // Не скрываем иконку при открытом балуне.
            hideIconOnBalloonOpen: false,
            // И дополнительно смещаем балун, для открытия над иконкой.
            // balloonOffset: [3, -40]
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icns/sm-location-marker.svg',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-5, -38]
        }),
        myPlacemark2 = window.myPlacemark = new ymaps.Placemark([55.676754, 37.893324], {
            balloonHeader: 'Почтовое отделение 900524',
            balloonContent: '<ul><li><span>Адрес</span><span>900524, Алма-Ата, ул. Богенбай Батыра, 134</span></li><li><span>Время работы</span><span>Пн-Пт: 8:00-20:00<br>Выходные: Сб, Вс</span></li><li><span>Оплата</span><span>карта, наличные</span></li><li class="popover__footer"><span>Доставка</span><span>от 2 дней / 300 ₽</span></li></ul>'
        }, {
            balloonShadow: false,
            balloonLayout: MyBalloonLayout,
            balloonContentLayout: MyBalloonContentLayout,
            balloonPanelMaxMapArea: 0,
            // Не скрываем иконку при открытом балуне.
            hideIconOnBalloonOpen: false,
            // И дополнительно смещаем балун, для открытия над иконкой.
            // balloonOffset: [3, -40]
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icns/sm-location-marker.svg',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            hideIconOnBalloonOpen: false,
            iconImageOffset: [-5, -38]
        });
        

    myMap.geoObjects.add(myPlacemark),
    myMap.geoObjects.add(myPlacemark2);
});
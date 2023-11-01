ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [43.261952, 76.920231],
        zoom: 12,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([43.261952, 76.920231], {
        balloonContentBody: [
            '<address>',
            '<ul><li><b>Центр слуха<br>',
            'на ул. Макатаева, 18</b></li>',
            '<li><label>Адрес</label><br>',
            '900524, Алма-Ата,<br>',
            'ул. Макатаева, 18<br>',
            '<li><label>Время работы</label><br>',
            'Пн-Пт: 8:00-20:00<br>',
            'Выходные: Сб, Вс</li>',
            '<li><label>Телефон</label><br>',
            '+7 (900) 232-23-23</li>',
            '<li><label>Электронная почта</label><br>',
            'kazahstan@audiotech.ru</li>',
            '</address>',
        ].join('')
    },  {
           // Опции.
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
    var myPlacemark2 = new ymaps.Placemark([43.252924, 76.912461], {
        balloonContentBody: [
            '<address>',
            '<ul><li><b>Центр слуха<br>',
            'на ул. Макатаева, 20</b></li>',
            '<li><label>Адрес</label><br>',
            '900524, Алма-Ата,<br>',
            'ул. Макатаева, 18<br>',
            '<li><label>Время работы</label><br>',
            'Пн-Пт: 8:00-20:00<br>',
            'Выходные: Сб, Вс</li>',
            '<li><label>Телефон</label><br>',
            '+7 (900) 232-23-23</li>',
            '<li><label>Электронная почта</label><br>',
            'kazahstan@audiotech.ru</li>',
            '</address>',
        ].join('')
    },{
        // Опции.
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
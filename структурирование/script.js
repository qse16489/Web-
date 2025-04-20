ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.838011, 60.597464],
        zoom: 13
    });

    var museumData = [
        {
            type: "Feature",
            id: 0,
            geometry: {
                type: "Point",
                coordinates: [56.837487, 60.605657]
            },
            properties: {
                hintContent: '<div style="text-align: center;"><strong>Музей природы Урала</strong><br><img src="PrirodaYrala.jpg" alt="Музей природы Урала" style="width: 300px; height: auto;"></div>',
                balloonContent: 'Музей природы Урала'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: 'marker.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-15, -42]
            }
        },
        {
            type: "Feature",
            id: 1,
            geometry: {
                type: "Point",
                coordinates: [56.836255, 60.605714]
            },
            properties: {
                hintContent: '<div style="text-align: center;"><strong>Музей архитектуры и дизайна</strong><br><img src="ArxitDiz.jpg" alt="Музей архитектуры и дизайна" style="width: 300px; height: auto;"></div>',
                balloonContent: 'Музей архитектуры и дизайна'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: 'marker.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-15, -42]
            }
        },
        {
            type: "Feature",
            id: 2,
            geometry: {
                type: "Point",
                coordinates: [56.835295, 60.603326]
            },
            properties: {
                hintContent: 'Екатеринбургский музей изобразительных искусств',
                balloonContent: 'Екатеринбургский музей изобразительных искусств'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: 'marker.png',
                iconImageSize: [30, 42],
                iconImageOffset: [-15, -42]
            }
        }
    ];

    var objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: false
    });

    objectManager.add({
        type: "FeatureCollection",
        features: museumData
    });

    myMap.geoObjects.add(objectManager);
}
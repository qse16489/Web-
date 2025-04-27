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
                hintContent: '<div style="text-align: center;"><strong>Музей природы Урала</strong><br><img src="img/PrirodaYrala.jpg" alt="Музей природы Урала" style="width: 300px; height: auto;"></div>',
                balloonContent: `
                    <h3 style="text-align: center;">Музей природы Урала</h3>
                    <div class="gallery">
                        <img src="img/PrirodaYrala2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala6.jpg" alt="Фoto 5" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala7.jpg" alt="Фoto 6" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala8.jpg" alt="Фoto 7" onclick="showFullscreenImage(this.src)">
                        <img src="img/PrirodaYrala9.jpg" alt="Фoto 8" onclick="showFullscreenImage(this.src)">
                    </div>
                `
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
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
                hintContent: '<div style="text-align: center;"><strong>Музей архитектуры и дизайна</strong><br><img src="img/ArxitDiz.jpg" alt="Музей архитектуры и дизайна" style="width: 300px; height: auto;"></div>',
                balloonContent: `
                    <h3 style="text-align: center;">Музей архитектуры и дизайна</h3>
                    <div class="gallery">
                        <img src="img/ArxitDiz2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz6.jpg" alt="Фoto 5" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz7.jpg" alt="Фoto 6" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz8.jpg" alt="Фoto 7" onclick="showFullscreenImage(this.src)">
                        <img src="img/ArxitDiz9.jpg" alt="Фoto 8" onclick="showFullscreenImage(this.src)">
                    </div>
                `
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
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
                hintContent: '<div style="text-align: center;"><strong>Музей изобразительных искусств</strong><br><img src="img/IsobrazIsk.jpg" alt="Екатеринбургский музей изобразительных искусств" style="width: 300px; height: 150px;"></div>',
                balloonContent: `
                    <h3 style="text-align: center;">Музей изобразительных искусств</h3>
                    <div class="gallery">
                        <img src="img/IsobrazIsk2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk4.jpg" alt="Фото 3" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk5.jpg" alt="Фото 4" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk6.jpg" alt="Фoto 5" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk7.jpg" alt="Фoto 6" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk8.jpg" alt="Фoto 7" onclick="showFullscreenImage(this.src)">
                        <img src="img/IsobrazIsk9.jpg" alt="Фoto 8" onclick="showFullscreenImage(this.src)">
                    </div>
                `
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
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

function showFullscreenImage(src) {
    document.getElementById('full-image').src = src;
    document.querySelector('.fullscreen-image').style.display = 'flex';
}

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.fullscreen-image').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.querySelector('.fullscreen-image')) {
        document.querySelector('.fullscreen-image').style.display = 'none';
    }
});
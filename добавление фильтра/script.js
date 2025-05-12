// Глобальная переменная для хранения отфильтрованных музеев
let filteredMuseums = [];
let currentRoute = null;

// Массив данных о музеях с категориями
const museumData = [
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
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.837487, 60.605657])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.837487, 60.605657])">Автомобильный маршрут</button>
                </div>
                <h3 style="text-align: center;">Музей природы Урала</h3>
                <div class="gallery">
                    <img src="img/PrirodaYrala2.jpg" alt="Фото 1" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala3.jpg" alt="Фото 2" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala4.jpg" alt="Фoto 3" onclick="showFullscreenImage(this.src)">
                    <img src="img/PrirodaYrala5.jpg" alt="Фoto 4" onclick="showFullscreenImage(this.src)">
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
        },
        category: "природа" // Добавлено поле категории
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
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.836255, 60.605714])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.836255, 60.605714])">Автомобильный маршрут</button>
                </div>
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
        },
        category: "архитектура" // Добавлено поле категории
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
                <div class="route-buttons">
                    <button class="route-button pedestrian-button" onclick="buildRoute([56.835295, 60.603326])">Пешеходный маршрут</button>
                    <button class="route-button car-button" onclick="buildCarRoute([56.835295, 60.603326])">Автомобильный маршрут</button>
                </div>
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
        },
        category: "искусство" // Добавлено поле категории
    }
];

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [56.838011, 60.597464],
        zoom: 13
    });

    const objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: false
    });

    filteredMuseums = [...museumData];
    updateMapMarkers();

    myMap.geoObjects.add(objectManager);

    // Обработчики кнопок рубрикатора
    document.querySelectorAll('.rubricator-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Сбрасываем активный класс у всех кнопок
            document.querySelectorAll('.rubricator-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Фильтрация музеев
            if (category === 'all') {
                filteredMuseums = [...museumData];
            } else {
                filteredMuseums = museumData.filter(museum => museum.category === category);
            }
            
            // Обновление маркеров на карте
            updateMapMarkers();
        });
    });

    // Функция для обновления маркеров на карте
    function updateMapMarkers() {
        objectManager.removeAll();
        objectManager.add({
            type: "FeatureCollection",
            features: filteredMuseums
        });
    }

    // Запрос геопозиции пользователя
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];
                addUserMarker(userCoordinates);
            },
            function() {
                alert("Не удалось получить вашу геопозицию.");
            }
        );
    } else {
        alert("Геолокация не поддерживается вашим браузером.");
    }

    // Функция добавления маркера пользователя
    function addUserMarker(coordinates) {
        const userPlacemark = new ymaps.Placemark(coordinates, {
            hintContent: "Ваша позиция"
        }, {
            preset: "islands#blueCircleIcon"
        });
        myMap.geoObjects.add(userPlacemark);
        myMap.setCenter(coordinates, 13);
    }

    // Функция удаления текущего маршрута
    function removeCurrentRoute() {
        if (currentRoute) {
            myMap.geoObjects.remove(currentRoute);
            currentRoute = null;
            document.getElementById('clear-route-btn').style.display = 'none';
        }
    }

    // Функция построения пешеходного маршрута
    window.buildRoute = function(destinationCoordinates) {
        myMap.balloon.close();
        objectManager.objects.balloon.close();

        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];

                removeCurrentRoute();

                const multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [userCoordinates, destinationCoordinates],
                    params: {
                        routingMode: "pedestrian",
                        results: 1
                    }
                }, {
                    boundsAutoApply: true
                });

                myMap.geoObjects.add(multiRoute);
                currentRoute = multiRoute;

                document.getElementById('clear-route-btn').style.display = 'block';

                multiRoute.model.events.add("requestsuccess", function() {
                    const activeRoute = multiRoute.getActiveRoute();
                    if (activeRoute) {
                        const distance = activeRoute.properties.get("distance").text;
                        alert("Расстояние до музея: " + distance);
                    }
                });
            },
            function() {
                alert("Не удалось получить вашу геопозицию.");
            }
        );
    };

    // Функция построения автомобильного маршрута
    window.buildCarRoute = function(destinationCoordinates) {
        myMap.balloon.close();
        objectManager.objects.balloon.close();
        
        if (!navigator.geolocation) {
            alert("Геолокация не поддерживается вашим браузером.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoordinates = [position.coords.latitude, position.coords.longitude];

                removeCurrentRoute();

                const multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [userCoordinates, destinationCoordinates],
                    params: {
                        routingMode: "auto",
                        results: 1
                    }
                }, {
                    boundsAutoApply: true
                });

                myMap.geoObjects.add(multiRoute);
                currentRoute = multiRoute;

                document.getElementById('clear-route-btn').style.display = 'block';

                multiRoute.model.events.add("requestsuccess", function() {
                    const activeRoute = multiRoute.getActiveRoute();
                    if (activeRoute) {
                        const distance = activeRoute.properties.get("distance").text;
                        alert("Расстояние до музея на автомобиле: " + distance);
                    }
                });
            },
            function() {
                alert("Не удалось получить вашу геопозицию.");
            }
        );
    };

    document.getElementById('clear-route-btn').addEventListener('click', function() {
        removeCurrentRoute();
    });
}

// Функция для отображения полноразмерного изображения
function showFullscreenImage(src) {
    document.getElementById('full-image').src = src;
    document.querySelector('.fullscreen-image').style.display = 'flex';
}

// Закрытие полноразмерного изображения
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.fullscreen-image').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.querySelector('.fullscreen-image')) {
        document.querySelector('.fullscreen-image').style.display = 'none';
    }
});

document.getElementById('show-rubricator-btn').addEventListener('click', function() {
    const rubricator = document.getElementById('rubricator');
    if (rubricator.style.display === 'none' || rubricator.style.display === '') {
        rubricator.style.display = 'block';
        this.textContent = 'Скрыть фильтр';
    } else {
        rubricator.style.display = 'none';
        this.textContent = 'Фильтр';
    }
});
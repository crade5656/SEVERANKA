function setDarkBackground() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function setLightBackground() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}





let map;
let placemark;
let locations = {
    'Щельюр': [61.003, 50.751],  
    'Вертел': [60.759, 51.234],
    'Краснобор': [61.109, 50.567],
    'Диор': [60.865, 50.903]
};

function init() {
    map = new ymaps.Map("map", {
        center: locations['Щельюр'], 
        zoom: 10
    });
    placemark = new ymaps.Placemark(locations['Щельюр'], { hintContent: "Магазин в Щельюре" });
    map.geoObjects.add(placemark);
}

function changeLocation(place) {
    map.setCenter(locations[place], 10);
    placemark.geometry.setCoordinates(locations[place]);
    placemark.properties.set({ hintContent: place });

    document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

ymaps.ready(init);
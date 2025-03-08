document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const menuToggle = document.getElementById("menu-toggle");
    const buttons = document.querySelectorAll(".btn");

    function toggleMenu() {
        menu.classList.toggle("menu-hidden");
    }

    menuToggle.addEventListener("click", toggleMenu);

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.add("menu-hidden");
        }
    });

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const place = this.dataset.place;
            if (places[place] && map && marker) {
                map.setCenter(places[place]);
                marker.setPosition(places[place]);
                marker.setTitle(this.innerText);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const menuToggle = document.getElementById("menu-toggle");
    const buttons = document.querySelectorAll(".btn");

    function toggleMenu() {
        menu.classList.toggle("menu-hidden");
    }

    menuToggle.addEventListener("click", toggleMenu);

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.add("menu-hidden");
        }
    });

    // Инициализация карты
    ymaps.ready(init);
    function init() {
        const map = new ymaps.Map("map", {
            center: [55.751574, 37.573856], // Координаты центра карты
            zoom: 10
        });

        let placemark = new ymaps.Placemark([55.751574, 37.573856], {}, { preset: "islands#redDotIcon" });
        map.geoObjects.add(placemark);

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const coords = button.dataset.coords.split(",").map(Number);
                if (coords.length === 2) {
                    map.setCenter(coords, 14, { duration: 500 });
                    placemark.geometry.setCoordinates(coords);
                }
            });
        });
    }
});

document.querySelectorAll(".rating span").forEach(star => {
    star.addEventListener("click", function () {
        let value = this.getAttribute("data-value");
        let stars = this.parentElement.querySelectorAll("span");
        stars.forEach(s => s.classList.remove("active"));
        stars.forEach(s => {
            if (s.getAttribute("data-value") >= value) {
                s.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".catalog-button");
    const dropdown = document.querySelector(".catalog-dropdown");

    button.addEventListener("click", function () {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
        if (!button.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});
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

function initMap() {
    window.places = {
        moscow: { lat: 55.751244, lng: 37.618423 },
        spb: { lat: 59.93428, lng: 30.335098 },
        kazan: { lat: 55.796391, lng: 49.108891 }
    };

    window.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: places.moscow
    });

    window.marker = new google.maps.Marker({
        position: places.moscow,
        map: map,
        title: "Москва"
    });
}

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
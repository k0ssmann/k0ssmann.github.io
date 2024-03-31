document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const firstSection = document.getElementById('start-section');
    
    // Setting rootMargin to be negative to start changing when the first section bottom is close to the menu
    const observerOptions = {
        root: null, // observing the viewport
        threshold: 0,
        rootMargin: "0px 0px -100% 0px" // Adjust based on menu height and desired effect
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When the bottom of the first section is not intersecting the viewport (i.e., is above the viewport), make the menu sticky.
            if (!entry.isIntersecting) {
                menu.classList.add('sticky');
            } else {
                menu.classList.remove('sticky');
            }
        });
    }, observerOptions);

    // Start observing the bottom of the first section.
    observer.observe(firstSection);
});


document.querySelectorAll('#menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var map = L.map('festival-map').setView([52.56936, 9.60162], 80); // Replace Latitude and Longitude with your festival's coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([52.56936, 9.60162],).addTo(map); // Replace Latitude and Longitude as above
    marker.bindPopup("<b>Freaks of Rock</b>").openPopup();


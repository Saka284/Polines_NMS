// Inisialisasi peta dengan batasan zoom in dan zoom out
var map = L.map('map', {
    center: [-7.052120379739278, 110.4355867990092],
    zoom: 18,
    minZoom: 18,
    maxZoom: 22  // Increased max zoom to allow for floor plan details
});

var kiri = L.latLng(-7.054918957999227, 110.43151205599631);
var kanan = L.latLng(-7.050757506597283, 110.43711227634674);
var bounds = L.latLngBounds(kanan, kiri);

map.setMaxBounds(bounds);
map.on('drag', function () {
    map.panInsideBounds(bounds, { animate: false });
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

// Gedung GKS (unchanged)
var gedung_gks = L.polygon([
    [-7.052203, 110.434865],
    [-7.052209, 110.435174],
    [-7.052510, 110.435166],
    [-7.052499, 110.434868]
], {
    color: 'rgb(132, 0, 255)',
    fillColor: 'rgb(182, 103, 255)',
    fillOpacity: 0.5
}).addTo(map);

var teksGedung_gks = L.marker([-7.052358, 110.435002], {
    icon: L.divIcon({
        className: 'text-label',
        html: 'Gedung <br>Kerjasama',
        iconSize: [100, 40]
    }),
    interactive: false
}).addTo(map);

// Gedung Direktur
var gedung_direktur = L.polygon([
    [-7.052086, 110.435260],
    [-7.052097, 110.435753],
    [-7.052483, 110.435745],
    [-7.052470, 110.435260]
], {
    color: 'rgb(132, 0, 255)',
    fillColor: 'rgb(182, 103, 255)',
    fillOpacity: 0.5
}).addTo(map);

var teksGedung_direktur = L.marker([-7.052305, 110.435501], {
    icon: L.divIcon({
        className: 'text-label',
        html: 'Gedung <br>Direktur',
        iconSize: [100, 40]
    }),
    interactive: false
}).addTo(map);

// Floor plans for Gedung Direktur
var lantai2_direktur = L.polygon([
    [-7.052086, 110.435260],
    [-7.052097, 110.435753],
    [-7.052483, 110.435745],
    [-7.052470, 110.435260]
], {
    color: 'rgb(255, 0, 0)',
    fillColor: 'rgb(255, 150, 150)',
    fillOpacity: 0.7
});

var lantai1_direktur = L.polygon([
    [-7.052086, 110.435260],
    [-7.052097, 110.435753],
    [-7.052483, 110.435745],
    [-7.052470, 110.435260]
], {
    color: 'rgb(0, 0, 255)',
    fillColor: 'rgb(150, 150, 255)',
    fillOpacity: 0.7
});

// Text labels for floors
var teksLantai2 = L.marker([-7.052305, 110.435501], {
    icon: L.divIcon({
        className: 'text-label',
        html: 'Lantai 2',
        iconSize: [80, 20]
    }),
    interactive: false
});

var teksLantai1 = L.marker([-7.052305, 110.435501], {
    icon: L.divIcon({
        className: 'text-label',
        html: 'Lantai 1',
        iconSize: [80, 20]
    }),
    interactive: false
});

// Function to update floor visibility based on zoom level
function updateFloorVisibility() {
    var currentZoom = map.getZoom();
    if (currentZoom >= 21) {
        // Show only Lantai 1
        map.addLayer(lantai1_direktur);
        map.addLayer(teksLantai1);
        map.removeLayer(lantai2_direktur);
        map.removeLayer(teksLantai2);
        map.removeLayer(gedung_direktur);
        map.removeLayer(teksGedung_direktur);
    } else if (currentZoom >= 19) {
        // Show only Lantai 2
        map.addLayer(lantai2_direktur);
        map.addLayer(teksLantai2);
        map.removeLayer(lantai1_direktur);
        map.removeLayer(teksLantai1);
        map.removeLayer(gedung_direktur);
        map.removeLayer(teksGedung_direktur);
    } else {
        // Show only the building outline
        map.addLayer(gedung_direktur);
        map.addLayer(teksGedung_direktur);
        map.removeLayer(lantai1_direktur);
        map.removeLayer(lantai2_direktur);
        map.removeLayer(teksLantai1);
        map.removeLayer(teksLantai2);
    }
}

// Add zoom end event listener
map.on('zoomend', updateFloorVisibility);

// Click event for Gedung Direktur
gedung_direktur.on('click', function () {
    map.flyTo([-7.052305, 110.435501], 19, {
        duration: 2,
        easeLinearity: 0.5,
    });
});

// Click event for Gedung GKS (unchanged)
gedung_gks.on('click', function () {
    map.flyTo([-7.052358, 110.435002], 19, {
        duration: 2,
        easeLinearity: 0.5,
    });

    map.once('zoomend', function () {
        if (map.getZoom() === 19) {
            window.location.href = 'denah-lantai1.html';
        }
    });
});
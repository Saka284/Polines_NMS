import { initializeGedungGKS } from './gedung_gks.js';
import { initializeGedungDirektur } from './gedung_direktur.js';

var map = L.map('map', {
    center: [-7.052120379739278, 110.4355867990092],
    zoom: 18,
    minZoom: 18,
    maxZoom: 22
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

// Inisialisasi gedung
initializeGedungGKS(map);
initializeGedungDirektur(map);
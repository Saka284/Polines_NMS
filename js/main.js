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

// Inisialisasi gedung dan dapatkan fungsi navigasi
const navigateToGedungGKS = initializeGedungGKS(map);
const navigateToGedungDirektur = initializeGedungDirektur(map);

// Fungsi untuk menangani navigasi
function navigateToGedung(gedung, lantai = 0) {
    switch (gedung) {
        case 'direktur':
            navigateToGedungDirektur(lantai);
            break;
        case 'gks':
            navigateToGedungGKS(lantai);
            break;
        // Tambahkan case untuk gedung lainnya di sini
        default:
            console.log('Gedung tidak dikenal');
    }
}

// Event listener untuk tombol gedung
document.querySelectorAll('.cb-btn:not(.dropdown-toggle)').forEach(button => {
    button.addEventListener('click', function () {
        const gedung = this.getAttribute('data-gedung');
        navigateToGedung(gedung);
    });
});

// Event listener untuk dropdown lantai
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const gedung = this.getAttribute('data-gedung');
        const lantai = parseInt(this.getAttribute('data-lantai'));
        navigateToGedung(gedung, lantai);
    });
});

//fungsi dropdown agar kelihatan currently selected
document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const allItems = this.closest('.dropdown-menu').querySelectorAll('.dropdown-item');
            allItems.forEach(i => i.classList.remove('selected'));

            this.classList.add('selected');
        });
    });
});

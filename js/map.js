// Inisialisasi peta dengan batasan zoom in dan zoom out
var map = L.map('map', {
    center: [-7.052120379739278, 110.4355867990092],
    zoom: 18, // Set awal zoom
    minZoom: 18, // Batasan minimum zoom out
    maxZoom: 19 // Batasan maksimum zoom in
});

var kiri = L.latLng(-7.054918957999227, 110.43151205599631);
var kanan = L.latLng(-7.050757506597283, 110.43711227634674);
var bounds = L.latLngBounds(kanan, kiri);

map.setMaxBounds(bounds); // Membatasi peta agar hanya bisa berada di dalam area Polines
map.on('drag', function () {
    map.panInsideBounds(bounds, { animate: false });
});

// Ganti Tile Layer dengan CartoDB tanpa label (menghilangkan nama jalan dan simbol)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);

var gedung_gks = L.polygon([
    [-7.052203, 110.434865],
    [-7.052209, 110.435174],
    [-7.052510, 110.435166],
    [-7.052499, 110.434868]
], {
    color: 'rgb(132, 0, 255)',       // Warna tepi (border) poligon
    fillColor: 'rgb(182, 103, 255)', // Warna isi poligon
    fillOpacity: 0.5                 // Transparansi warna isi poligon
}).addTo(map);

// Tambahkan teks di atas gedung tanpa latar belakang menggunakan divIcon
var teksGedung_gks = L.marker([-7.052358, 110.435002], { // Sesuaikan koordinat agar teks berada di tengah gedung
    icon: L.divIcon({
        className: 'text-label',   // Nama kelas CSS untuk teks
        html: 'Gedung <br>Kerjasama',          // Teks yang ditampilkan
        iconSize: [100, 40]        // Ukuran kotak teks (sesuaikan jika diperlukan)
    }),
    interactive: false             // Nonaktifkan interaksi agar tidak dianggap sebagai marker
}).addTo(map);

var gedung_direktur = L.polygon([
    [-7.052086, 110.435260],
    [-7.052097, 110.435753],
    [-7.052483, 110.435745],
    [-7.052470, 110.435260]
], {
    color: 'rgb(132, 0, 255)',       // Warna tepi (border) poligon
    fillColor: 'rgb(182, 103, 255)', // Warna isi poligon
    fillOpacity: 0.5                 // Transparansi warna isi poligon
}).addTo(map);

var teksGedung_direktur = L.marker([-7.052305, 110.435501], { // Sesuaikan koordinat agar teks berada di tengah gedung
    icon: L.divIcon({
        className: 'text-label',   // Nama kelas CSS untuk teks
        html: 'Gedung <br>Direktur',          // Teks yang ditampilkan
        iconSize: [100, 40]        // Ukuran kotak teks (sesuaikan jika diperlukan)
    }),
    interactive: false             // Nonaktifkan interaksi agar tidak dianggap sebagai marker
}).addTo(map);

// Fungsi untuk navigasi ke terminal yang berbeda
function goToTerminal(terminalNumber) {
    switch (terminalNumber) {
        case 1:
            map.setView([-7.052120379739278, 110.4355867990092], 18); // Koordinat untuk Terminal 1
            break;
        case 2:
            map.setView([-7.052305548510228, 110.43497612938614], 18); // Koordinat untuk Terminal 2
            break;
        case 3:
            map.setView([-7.052120379739278, 110.4355867990092], 18); // Koordinat untuk Terminal 3
            break;
    }
}

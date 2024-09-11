export function initializeGedungGKS(map) {
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
}
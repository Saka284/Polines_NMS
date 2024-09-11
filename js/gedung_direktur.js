export function initializeGedungDirektur(map) {
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

    function updateFloorVisibility() {
        var currentZoom = map.getZoom();
        if (currentZoom >= 21) {
            map.addLayer(lantai1_direktur);
            map.addLayer(teksLantai1);
            map.removeLayer(lantai2_direktur);
            map.removeLayer(teksLantai2);
            map.removeLayer(gedung_direktur);
            map.removeLayer(teksGedung_direktur);
        } else if (currentZoom >= 19) {
            map.addLayer(lantai2_direktur);
            map.addLayer(teksLantai2);
            map.removeLayer(lantai1_direktur);
            map.removeLayer(teksLantai1);
            map.removeLayer(gedung_direktur);
            map.removeLayer(teksGedung_direktur);
        } else {
            map.addLayer(gedung_direktur);
            map.addLayer(teksGedung_direktur);
            map.removeLayer(lantai1_direktur);
            map.removeLayer(lantai2_direktur);
            map.removeLayer(teksLantai1);
            map.removeLayer(teksLantai2);
        }
    }

    map.on('zoomend', updateFloorVisibility);

    gedung_direktur.on('click', function () {
        map.flyTo([-7.052305, 110.435501], 19, {
            duration: 2,
            easeLinearity: 0.5,
        });
    });
}
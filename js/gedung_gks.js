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

    var lantai3_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(0, 255, 0)',
        fillColor: 'rgb(150, 255, 150)',
        fillOpacity: 0.7
    });

    var lantai2_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(255, 0, 0)',
        fillColor: 'rgb(255, 150, 150)',
        fillOpacity: 0.7
    });

    var lantai1_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(0, 0, 255)',
        fillColor: 'rgb(150, 150, 255)',
        fillOpacity: 0.7
    });

    var teksLantai3 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Lantai 3',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    var teksLantai2 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Lantai 2',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    var teksLantai1 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Lantai 1',
            iconSize: [80, 20]
        }),
        interactive: false
    });


    function updateFloorVisibilityGKS() {
        var currentZoom = map.getZoom();
        if (currentZoom >= 21) {
            map.addLayer(lantai1_gks);
            map.addLayer(teksLantai1);
            map.removeLayer(lantai2_gks);
            map.removeLayer(teksLantai2);
            map.removeLayer(lantai3_gks);
            map.removeLayer(teksLantai3);
            map.removeLayer(gedung_gks);
            map.removeLayer(teksGedung_gks);
        } else if (currentZoom >= 20) {
            map.addLayer(lantai2_gks);
            map.addLayer(teksLantai2);
            map.removeLayer(lantai1_gks);
            map.removeLayer(teksLantai1);
            map.removeLayer(lantai3_gks);
            map.removeLayer(teksLantai3);
            map.removeLayer(gedung_gks);
            map.removeLayer(teksGedung_gks);
        } else if (currentZoom >= 19) {
            map.addLayer(lantai3_gks);
            map.addLayer(teksLantai3);
            map.removeLayer(lantai1_gks);
            map.removeLayer(lantai2_gks);
            map.removeLayer(teksLantai1);
            map.removeLayer(teksLantai2);
            map.removeLayer(gedung_gks);
            map.removeLayer(teksGedung_gks);
        } else {
            map.addLayer(gedung_gks);
            map.addLayer(teksGedung_gks);
            map.removeLayer(lantai1_gks);
            map.removeLayer(lantai2_gks);
            map.removeLayer(lantai3_gks);
            map.removeLayer(teksLantai1);
            map.removeLayer(teksLantai2);
            map.removeLayer(teksLantai3);
        }
    }

    map.on('zoomend', updateFloorVisibilityGKS);

    gedung_gks.on('click', function () {
        map.flyTo([-7.052305, 110.435501], 19, {
            duration: 2,
            easeLinearity: 0.5,
        });
    });
}
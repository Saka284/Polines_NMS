export function initializeGedungGKS(map) {
    // Base polygon for Gedung GKS
    var gedung_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(255,255,255)',
        fillColor: 'rgb(162, 190, 227)',
        fillOpacity: 0.5
    }).addTo(map);

    // Marker for Gedung GKS text
    var teksGedung_gks = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Gedung <br>Kerjasama',
            iconSize: [100, 40]
        }),
        interactive: false
    }).addTo(map);

    // Warna denah perlantai
    //lantai 3
    var lantai3_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(106, 156, 137)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    // lantai 2
    var lantai2_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(201, 104, 104)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    //lantai 1
    var lantai1_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(34, 123, 148)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    // teks perlantai
    //lantai 3
    var teksLantai3 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label-dua',
            html: 'Lantai 3',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    //lantai 2
    var teksLantai2 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label-dua',
            html: 'Lantai 2',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    //lantai 1
    var teksLantai1 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label-dua',
            html: 'Lantai 1',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    let currentLantai = 0;

    // fungsi untuk menganti tampilan lantai
    function updateFloorVisibility(lantai) {
        map.removeLayer(gedung_gks);
        map.removeLayer(teksGedung_gks);
        map.removeLayer(lantai1_gks);
        map.removeLayer(lantai2_gks);
        map.removeLayer(lantai3_gks);
        map.removeLayer(teksLantai1);
        map.removeLayer(teksLantai2);
        map.removeLayer(teksLantai3);

        currentLantai = lantai;

        switch (lantai) {
            case 0:
                map.addLayer(gedung_gks);
                map.addLayer(teksGedung_gks);
                map.setView([-7.052358, 110.435002], 19);
                break;
            case 1:
                map.addLayer(lantai1_gks);
                map.addLayer(teksLantai1);
                map.setView([-7.052358, 110.435002], 22);
                break;
            case 2:
                map.addLayer(lantai2_gks);
                map.addLayer(teksLantai2);
                map.setView([-7.052358, 110.435002], 22);
                break;
            case 3:
                map.addLayer(lantai3_gks);
                map.addLayer(teksLantai3);
                map.setView([-7.052358, 110.435002], 22);
                break;
        }
    }

    // Click event to zoom into the building
    gedung_gks.on('click', function () {
        map.flyTo([-7.052355, 110.434898], 18, {
            duration: 2,
            easeLinearity: 0.5,
        });
    });

    // Function to navigate between floors via buttons
    function navigateToGedungGKS(lantai) {
        updateFloorVisibility(lantai);
    }

    return navigateToGedungGKS;
}

export function initializeGedungGKS(map) {
    // Base polygon for Gedung GKS
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

    // Marker for Gedung GKS text
    var teksGedung_gks = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Gedung <br>Kerjasama',
            iconSize: [100, 40]
        }),
        interactive: false
    }).addTo(map);

    // Defining polygons for each floor with unique colors
    var lantai3_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(0, 255, 0)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    var lantai2_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(255, 0, 0)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    var lantai1_gks = L.polygon([
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ], {
        color: 'rgb(0, 0, 255)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    // Markers for floor labels
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

    // Track the current floor
    let currentLantai = 0;

    // Function to update the visible floor
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
                map.setView([-7.052358, 110.435002], 21);
                break;
            case 2:
                map.addLayer(lantai2_gks);
                map.addLayer(teksLantai2);
                map.setView([-7.052358, 110.435002], 21);
                break;
            case 3:
                map.addLayer(lantai3_gks);
                map.addLayer(teksLantai3);
                map.setView([-7.052358, 110.435002], 21);
                break;
        }
    }

    // Zoom handler to show/hide floors
    map.on('zoomend', function () {
        var currentZoom = map.getZoom();
        if (currentZoom < 20) {
            updateFloorVisibility(0);  // Show the whole building if zoom level is below 20
        } else if (currentZoom === 20 && currentLantai !== 0) {
            updateFloorVisibility(0);  // Reset to the whole building on zoom 20
        }
    });

    // Click event to zoom into the building
    gedung_gks.on('click', function () {
        map.flyTo([-7.052374, 110.434997], 19, {
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

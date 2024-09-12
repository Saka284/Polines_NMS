export function initializeGedungGKS(map) {
    // Define polygons and markers for Gedung GKS and its floors
    const gedungGKSCoords = [
        [-7.052203, 110.434865],
        [-7.052209, 110.435174],
        [-7.052510, 110.435166],
        [-7.052499, 110.434868]
    ];

    const lantai3Coords = gedungGKSCoords;
    const lantai2Coords = gedungGKSCoords;
    const lantai1Coords = gedungGKSCoords;

    
    // Create the polygon layers
    const gedungGKS = L.polygon(gedungGKSCoords, {
        color: 'rgb(255,255,255)',
        fillColor: 'rgb(162, 190, 227)',
        fillOpacity: 0.5
    }).addTo(map);

    const lantai3GKS = L.polygon(lantai3Coords, {
        color: 'rgb(106, 156, 137)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    const lantai2GKS = L.polygon(lantai2Coords, {
        color: 'rgb(201, 104, 104)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    const lantai1GKS = L.polygon(lantai1Coords, {
        color: 'rgb(34, 123, 148)',
        fillColor: 'rgb(255,255,255)',
        fillOpacity: 0.7
    });

    // Create the text markers
    const teksGedungGKS = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Gedung <br>Kerjasama',
            iconSize: [100, 40]
        }),
        interactive: false
    }).addTo(map);

    const teksLantai3 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label-dua',
            html: 'Lantai 3',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    const teksLantai2 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label-dua',
            html: 'Lantai 2',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    const teksLantai1 = L.marker([-7.052358, 110.435002], {
        icon: L.divIcon({
            className: 'text-label-dua',
            html: 'Lantai 1',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    let currentLantai = 0;

    // Function to update floor visibility
    function updateFloorVisibility(lantai) {
        map.removeLayer(gedungGKS);
        map.removeLayer(teksGedungGKS);
        map.removeLayer(lantai1GKS);
        map.removeLayer(lantai2GKS);
        map.removeLayer(lantai3GKS);
        map.removeLayer(teksLantai1);
        map.removeLayer(teksLantai2);
        map.removeLayer(teksLantai3);

        currentLantai = lantai;

        switch (lantai) {
            case 0:
                map.addLayer(gedungGKS);
                map.addLayer(teksGedungGKS);
                map.setView([-7.052358, 110.435002], 19);
                break;
            case 1:
                map.addLayer(lantai1GKS);
                map.addLayer(teksLantai1);
                map.setView([-7.052358, 110.435002], 22);
                break;
            case 2:
                map.addLayer(lantai2GKS);
                map.addLayer(teksLantai2);
                map.setView([-7.052358, 110.435002], 22);
                break;
            case 3:
                map.addLayer(lantai3GKS);
                map.addLayer(teksLantai3);
                map.setView([-7.052358, 110.435002], 22);
                break;
        }
    }

    // Click event to zoom into the building
    gedungGKS.on('click', function () {
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

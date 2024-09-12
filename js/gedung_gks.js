export function initializeGedungGKS(map) {
    // Define polygons and markers for Gedung GKS and its floors
    const gedungGKSCoords = [
        [-7.052203, 110.434865],
        [-7.052209, 110.435165],
        [-7.052506, 110.435162],
        [-7.052502, 110.434858]
    ];

    const lantai3Coords = gedungGKSCoords;
    const lantai2Coords = gedungGKSCoords;
    const lantai1Coords = gedungGKSCoords;

    const ruanganCoordsgksLt1 = [
        { coords: [[-7.052205, 110.434867], [-7.052207, 110.434971], [-7.052284, 110.434970], [-7.052282, 110.434865]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Lab upt Bahasa 1', icon: 'images/language.png' },
        { coords: [[-7.052207, 110.434971], [-7.052209, 110.435071], [-7.052286, 110.435070], [-7.052284, 110.434970]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Lab upt Bahasa 2', icon: 'images/language.png' },
        { coords: [[-7.052209, 110.435071], [-7.052210, 110.435112], [-7.052286, 110.435111], [-7.052286, 110.435070]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Adm<br>UPT BHS', icon: 'images/adminis.png' },
        { coords: [[-7.052210, 110.435112], [-7.0522103, 110.435138], [-7.052256, 110.435138], [-7.052256, 110.435111]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Toilet', icon: 'images/toilet.png' },
        { coords: [[-7.0522103, 110.435138], [-7.052211, 110.435163], [-7.052256, 110.435163], [-7.052256, 110.435138]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Toilet', icon: 'images/toilet.png' },
        { coords: [[-7.052266, 110.435138], [-7.052266, 110.435163], [-7.052286, 110.435163], [-7.052286, 110.435138]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Switch', icon: '' },
        { coords: [[-7.052320, 110.434864], [-7.052320, 110.434971], [-7.052390, 110.434969], [-7.05239, 110.434862]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Gudang Arsip', icon: 'images/archive.png' },
        { coords: [[-7.052390, 110.434862], [-7.052390, 110.434969], [-7.052420, 110.434969], [-7.052420, 110.4348615]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Adm. Arsip', icon: 'images/adminis.png' },
        { coords: [[-7.052420, 110.434862], [-7.052420, 110.434969], [-7.052450, 110.434969], [-7.052450, 110.4348610]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Adm. Arsip', icon: 'images/adminis.png' },
        { coords: [[-7.052450, 110.434861], [-7.052450, 110.434969], [-7.052502, 110.434969], [-7.052499, 110.4348610]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Gudang Arsip', icon: 'images/archive.png' },
        { coords: [[-7.052450, 110.435010], [-7.052450, 110.435080], [-7.052502, 110.435080], [-7.052502, 110.435010]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Tamu Ka.<br> UPT BHS', icon: 'images/orang.png' },
        { coords: [[-7.052450, 110.435080], [-7.052450, 110.435160], [-7.052502, 110.435160], [-7.052502, 110.435080]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Classroom', icon: 'images/classroom.png' },

    ];

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

    const ruanganLayersgksLt1 = ruanganCoordsgksLt1.map(room => {
        const polygon = L.polygon(room.coords, {
            color: room.color,
            fillColor: room.fillColor,
            fillOpacity: 0.7
        });

        // Create a marker for the room with optional icon and text
        const textMarker = L.marker([
            (room.coords[0][0] + room.coords[2][0]) / 2,
            (room.coords[0][1] + room.coords[2][1]) / 2
        ], {
            icon: L.divIcon({
                className: 'text-label',
                html: `
                    <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 60px;">
                        ${room.icon ? `<img src="${room.icon}" style="width: 20px; height: 20px;" />` : ''}
                        ${room.text ? `<div style="margin-top: 4px; font-size: 10px; color: black;">${room.text}</div>` : ''}
                    </div>`,
                iconSize: [80, 60], // Adjust iconSize to fit the icon and text
                iconAnchor: [40, 30], // Adjust iconAnchor to center the icon properly
                popupAnchor: [0, -60] // Adjust popupAnchor if you want to position the popup differently
            }),
            interactive: false
        });

        return { polygon, textMarker };
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
        ruanganLayersgksLt1.forEach(layer => {
            map.removeLayer(layer.polygon);
            map.removeLayer(layer.textMarker);
        });

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
                ruanganLayersgksLt1.forEach(layer => {
                    map.addLayer(layer.polygon);
                    map.addLayer(layer.textMarker);
                })
                map.setView([-7.052358, 110.435002], 21);
                break;
            case 2:
                map.addLayer(lantai2GKS);
                map.addLayer(teksLantai2);
                map.setView([-7.052358, 110.435002], 21);
                break;
            case 3:
                map.addLayer(lantai3GKS);
                map.addLayer(teksLantai3);
                map.setView([-7.052358, 110.435002], 21);
                break;
        }
    }

    // Event listener for zoom level changes
    map.on('zoomend', function () {
        const currentZoom = map.getZoom();
        if (currentZoom < 20) {
            updateFloorVisibility(0);
        } else if (currentZoom === 20 && currentLantai !== 0) {
            updateFloorVisibility(0);
        }
    });

    // Function to navigate between floors via buttons
    function navigateToGedungGKS(lantai) {
        updateFloorVisibility(lantai);
    }

    return navigateToGedungGKS;
}

export function initializeGedungDirektur(map) {
    // Define polygons and markers for Gedung Direktur and its floors
    const gedungDirekturCoords = [
        [-7.052086, 110.435260],
        [-7.052097, 110.435753],
        [-7.052483, 110.435745],
        [-7.052470, 110.435260]
    ];

    const lantai2Coords = gedungDirekturCoords;
    const lantai1Coords = gedungDirekturCoords;

    const ruanganCoords = [
        { coords: [[-7.052105, 110.435280], [-7.052107, 110.435400], [-7.052150, 110.435400], [-7.052150, 110.435280]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 1' },
        { coords: [[-7.052107, 110.435400], [-7.052150, 110.435400], [-7.052150, 110.435430], [-7.052107, 110.435430]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 2' },
        { coords: [[-7.052107, 110.435430], [-7.052170, 110.435430], [-7.052170, 110.435450], [-7.052107, 110.435450]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 3' },
        { coords: [[-7.052107, 110.435450], [-7.052150, 110.435450], [-7.052150, 110.435510], [-7.052110, 110.435510]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 4' },
        { coords: [[-7.052100, 110.435510], [-7.052270, 110.435510], [-7.052270, 110.435560], [-7.052100, 110.435560]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 5' },
        { coords: [[-7.052107, 110.435630], [-7.052170, 110.435630], [-7.052170, 110.435580], [-7.052107, 110.435580]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 6' },
        { coords: [[-7.052107, 110.435630], [-7.052170, 110.435630], [-7.052170, 110.435680], [-7.052107, 110.435680]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 7' },
        { coords: [[-7.052107, 110.435680], [-7.052170, 110.435680], [-7.052170, 110.435730], [-7.052107, 110.435730]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 8' },
        { coords: [[-7.052195, 110.435690], [-7.052270, 110.435690], [-7.052270, 110.435730], [-7.052195, 110.435730]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 9' },
        { coords: [[-7.052195, 110.435650], [-7.052270, 110.435650], [-7.052270, 110.435690], [-7.052195, 110.435690]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 10' },
        { coords: [[-7.052195, 110.435630], [-7.052270, 110.435630], [-7.052270, 110.435590], [-7.052195, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 11' },
        { coords: [[-7.052195, 110.435560], [-7.052270, 110.435560], [-7.052270, 110.435590], [-7.052195, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 12' },
        { coords: [[-7.052195, 110.435450], [-7.052270, 110.435450], [-7.052270, 110.435510], [-7.052195, 110.435510]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 13' },
        { coords: [[-7.052195, 110.435400], [-7.052235, 110.435400], [-7.052235, 110.435450], [-7.052195, 110.435450]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 14' },
        { coords: [[-7.052235, 110.435400], [-7.052270, 110.435400], [-7.052270, 110.435450], [-7.052235, 110.435450]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 15' },
        { coords: [[-7.052195, 110.435340], [-7.052195, 110.435400], [-7.052270, 110.435400], [-7.052270, 110.435340]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 16' },
        { coords: [[-7.052195, 110.435280], [-7.052195, 110.435340], [-7.052270, 110.435340], [-7.052270, 110.435280]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruangan 17' }
    ];

    // Create the polygon layers
    const gedungDirektur = L.polygon(gedungDirekturCoords, {
        color: 'rgb(132, 0, 255)',
        fillColor: 'rgb(182, 103, 255)',
        fillOpacity: 0.5
    }).addTo(map);

    const lantai2Direktur = L.polygon(lantai2Coords, {
        color: 'rgb(255, 0, 0)',
        fillColor: 'rgb(255, 255, 225)',
        fillOpacity: 0.7
    });

    const lantai1Direktur = L.polygon(lantai1Coords, {
        color: 'rgb(0, 0, 255)',
        fillColor: 'rgb(255, 255, 255)',
        fillOpacity: 0.7
    });

    // Create the text markers
    const teksGedungDirektur = L.marker([-7.052305, 110.435501], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Gedung <br>Direktur',
            iconSize: [100, 40]
        }),
        interactive: false
    }).addTo(map);

    const teksLantai2 = L.marker([-7.052305, 110.435501], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Lantai 2',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    const teksLantai1 = L.marker([-7.052305, 110.435501], {
        icon: L.divIcon({
            className: 'text-label',
            html: 'Lantai 1',
            iconSize: [80, 20]
        }),
        interactive: false
    });

    // Create the room polygons
    const ruanganLayers = ruanganCoords.map(room => {
        const polygon = L.polygon(room.coords, {
            color: room.color,
            fillColor: room.fillColor,
            fillOpacity: 0.7
        });

        const textMarker = L.marker([
            (room.coords[0][0] + room.coords[2][0]) / 2, 
            (room.coords[0][1] + room.coords[2][1]) / 2
        ], {
            icon: L.divIcon({
                className: 'text-label',
                html: room.text,
                iconSize: [80, 20]
            }),
            interactive: false
        });

        return { polygon, textMarker };
    });

    let currentLantai = 0;

    // Function to update floor visibility
    function updateFloorVisibility(lantai) {
        map.removeLayer(gedungDirektur);
        map.removeLayer(teksGedungDirektur);
        map.removeLayer(lantai1Direktur);
        map.removeLayer(lantai2Direktur);
        map.removeLayer(teksLantai1);
        map.removeLayer(teksLantai2);
        ruanganLayers.forEach(layer => {
            map.removeLayer(layer.polygon);
            map.removeLayer(layer.textMarker);
        });

        currentLantai = lantai;

        switch (lantai) {
            case 0:
                map.addLayer(gedungDirektur);
                map.addLayer(teksGedungDirektur);
                map.setView([-7.052305, 110.435501], 19);
                break;
            case 1:
                map.addLayer(lantai1Direktur);
                map.addLayer(teksLantai1);
                ruanganLayers.forEach(layer => {
                    map.addLayer(layer.polygon);
                    map.addLayer(layer.textMarker);
                });
                map.setView([-7.052305, 110.435501], 21);
                break;
            case 2:
                map.addLayer(lantai2Direktur);
                map.addLayer(teksLantai2);
                map.setView([-7.052305, 110.435501], 21);
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

    // Click event for Gedung Direktur
    gedungDirektur.on('click', function () {
        map.flyTo([-7.052305, 110.435501], 19, {
            duration: 2,
            easeLinearity: 0.5,
        });
    });

    // Function to navigate to specific floor
    function navigateToGedungDirektur(lantai) {
        updateFloorVisibility(lantai);
    }

    return navigateToGedungDirektur;
}
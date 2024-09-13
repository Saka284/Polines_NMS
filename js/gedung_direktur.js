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

    const ruanganCoordsLt1 = [
        { coords: [[-7.052105, 110.435280], [-7.052107, 110.435400], [-7.052150, 110.435400], [-7.052150, 110.435280]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '', icon : '' },
        { coords: [[-7.052107, 110.435400], [-7.052150, 110.435400], [-7.052150, 110.435430], [-7.052107, 110.435430]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '', icon : '' },
        { coords: [[-7.052107, 110.435430], [-7.052170, 110.435430], [-7.052170, 110.435450], [-7.052107, 110.435450]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Rapat', icon : '/images/users.png' },
        { coords: [[-7.052107, 110.435450], [-7.052150, 110.435450], [-7.052150, 110.435510], [-7.052110, 110.435510]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'WADIR III' },
        { coords: [[-7.052100, 110.435510], [-7.052270, 110.435510], [-7.052270, 110.435560], [-7.052100, 110.435560]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'HALL' },
        { coords: [[-7.052107, 110.435630], [-7.052170, 110.435630], [-7.052170, 110.435580], [-7.052107, 110.435580]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R.SPI' },
        { coords: [[-7.052107, 110.435630], [-7.052170, 110.435630], [-7.052170, 110.435680], [-7.052107, 110.435680]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R.Rapat SPI', icon : '/images/home.png' },
        { coords: [[-7.052107, 110.435680], [-7.052170, 110.435680], [-7.052170, 110.435730], [-7.052107, 110.435730]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'ULP', icon : '/images/home.png' },
        { coords: [[-7.052195, 110.435690], [-7.052270, 110.435690], [-7.052270, 110.435730], [-7.052195, 110.435730]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Rapat', icon : '/images/users.png' },
        { coords: [[-7.052195, 110.435650], [-7.052270, 110.435650], [-7.052270, 110.435690], [-7.052195, 110.435690]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'ULP', icon : '/images/home.png' },
        { coords: [[-7.052195, 110.435630], [-7.052270, 110.435630], [-7.052270, 110.435590], [-7.052195, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052195, 110.435560], [-7.052270, 110.435560], [-7.052270, 110.435590], [-7.052195, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052195, 110.435450], [-7.052270, 110.435450], [-7.052270, 110.435510], [-7.052195, 110.435510]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'ULT' },
        { coords: [[-7.052195, 110.435400], [-7.052235, 110.435400], [-7.052235, 110.435450], [-7.052195, 110.435450]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052235, 110.435400], [-7.052270, 110.435400], [-7.052270, 110.435450], [-7.052235, 110.435450]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052195, 110.435340], [-7.052195, 110.435400], [-7.052270, 110.435400], [-7.052270, 110.435340]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052195, 110.435280], [-7.052195, 110.435340], [-7.052270, 110.435340], [-7.052270, 110.435280]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052270, 110.435480], [-7.052340, 110.435480], [-7.052340, 110.435590], [-7.052270, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052270, 110.435400], [-7.052340, 110.435400], [-7.052340, 110.435480], [-7.052270, 110.435480]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052270, 110.435590], [-7.052270, 110.435630], [-7.052320, 110.435630], [-7.052320, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Rapat AD II-1/16', icon : '/images/users.png' },
        { coords: [[-7.052340, 110.435530], [-7.052400, 110.435530], [-7.052400, 110.435590], [-7.052340, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Rumah Tangga' },
        { coords: [[-7.052340, 110.435480], [-7.052400, 110.435480], [-7.052400, 110.435530], [-7.052340, 110.435530]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Counter Pelayanan' },
        { coords: [[-7.052400, 110.435480], [-7.052460, 110.435480], [-7.052460, 110.435530], [-7.052400, 110.435530]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Keuangan', icon : '/images/computer.png' },
        { coords: [[-7.052400, 110.435530], [-7.052460, 110.435530], [-7.052460, 110.435590], [-7.052400, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'WADIR II' },
        { coords: [[-7.052340, 110.435340], [-7.052460, 110.435340], [-7.052460, 110.435480], [-7.052340, 110.435480]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Counter Pelayanan & BAKPK', icon : '/images/computer.png' },
        { coords: [[-7.052400, 110.435340], [-7.052460, 110.435340], [-7.052460, 110.435380], [-7.052400, 110.435380]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Arsip' },
        { coords: [[-7.052400, 110.435300], [-7.052460, 110.435300], [-7.052460, 110.435340], [-7.052400, 110.435340]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Periksa' },
        { coords: [[-7.052340, 110.435300], [-7.052385, 110.435300], [-7.052385, 110.435340], [-7.052340, 110.435340]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Poliklinik' },
        { coords: [[-7.052400, 110.435590], [-7.052460, 110.435590], [-7.052460, 110.435655], [-7.052400, 110.435655]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Rapat', icon : '/images/users.png' },
        { coords: [[-7.052400, 110.435655], [-7.052460, 110.435655], [-7.052460, 110.435730], [-7.052400, 110.435730]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Gudang' },
        { coords: [[-7.052340, 110.435655], [-7.052390, 110.435655], [-7.052390, 110.435730], [-7.052340, 110.435730]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Gudang' },
    ];

    const ruanganCoordsLt2 = [
        { coords: [[-7.052105, 110.435280], [-7.052105, 110.435310], [-7.052150, 110.435310], [-7.052150, 110.435280]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052105, 110.435310], [-7.052105, 110.435340], [-7.052128, 110.435340], [-7.052128, 110.435310]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052128, 110.435310], [-7.052128, 110.435340], [-7.052150, 110.435340], [-7.052150, 110.435310]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052105, 110.435340], [-7.052150, 110.435340], [-7.052150, 110.435400], [-7.052105, 110.435400]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'R. Internet' },
        { coords: [[-7.052105, 110.435400], [-7.052235, 110.435400], [-7.052235, 110.435717], [-7.052110, 110.435720]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Ruang Baca & Perpustakaan' },
        { coords: [[-7.052180, 110.435430], [-7.052235, 110.435430], [-7.052235, 110.435460], [-7.052180, 110.435460]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052180, 110.435460], [-7.052235, 110.435460], [-7.052235, 110.435490], [-7.052180, 110.435490]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Koleksi TA' },
        { coords: [[-7.052180, 110.435400], [-7.052235, 110.435400], [-7.052235, 110.435430], [-7.052180, 110.435430]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Multimedia' },
        { coords: [[-7.052180, 110.435280], [-7.052180, 110.435340], [-7.052235, 110.435340], [-7.052235, 110.435280]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Void' },
        { coords: [[-7.052235, 110.435400], [-7.052330, 110.435400], [-7.052330, 110.435590], [-7.052235, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Void' },
        { coords: [[-7.052270, 110.435365], [-7.052330, 110.435365], [-7.052330, 110.435400], [-7.052270, 110.435400]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '11' },
        { coords: [[-7.052235, 110.435590], [-7.052235, 110.435650], [-7.052290, 110.435650], [-7.052290, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052290, 110.435590], [-7.052290, 110.435650], [-7.052330, 110.435650], [-7.052330, 110.435590]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: '' },
        { coords: [[-7.052330, 110.435500], [-7.052390, 110.435500], [-7.052390, 110.435630], [-7.052330, 110.435630]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Direktur', icon: '/images/orang.png' },
        { coords: [[-7.052330, 110.435365], [-7.052390, 110.435365], [-7.052390, 110.435500], [-7.052330, 110.435500]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Sidang Direktur' },
        { coords: [[-7.052410, 110.435500], [-7.052460, 110.435500], [-7.052460, 110.435575], [-7.052410, 110.435575]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'WADIR I', icon: '/images/orang.png' },
        { coords: [[-7.052410, 110.435575], [-7.052460, 110.435575], [-7.052460, 110.435650], [-7.052410, 110.435650]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'WADIR II', icon: '/images/orang.png' },
        { coords: [[-7.052410, 110.435385], [-7.052460, 110.435385], [-7.052460, 110.435430], [-7.052410, 110.435430]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'SPI', icon: '/images/computer.png' },
        { coords: [[-7.052410, 110.435340], [-7.052460, 110.435340], [-7.052460, 110.435385], [-7.052410, 110.435385]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Senat' },
        { coords: [[-7.052410, 110.435310], [-7.052460, 110.435310], [-7.052460, 110.435340], [-7.052410, 110.435340]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'P3', icon: '/images/computer.png' },
        { coords: [[-7.052410, 110.435280], [-7.052460, 110.435280], [-7.052460, 110.435310], [-7.052410, 110.435310]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Control CCTV' },
        { coords: [[-7.052330, 110.435310], [-7.052390, 110.435310], [-7.052390, 110.435340], [-7.052330, 110.435340]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'P3', icon: '/images/computer.png' },
        { coords: [[-7.052330, 110.435280], [-7.052390, 110.435280], [-7.052390, 110.435310], [-7.052330, 110.435310]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'Audit' },
        { coords: [[-7.052410, 110.435650], [-7.052460, 110.435650], [-7.052460, 110.435715], [-7.052410, 110.435715]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'WADIR III', icon: '/images/orang.png' },
        { coords: [[-7.052330, 110.435650], [-7.052390, 110.435650], [-7.052390, 110.435715], [-7.052330, 110.435715]], color: 'rgb(0, 255, 0)', fillColor: 'rgb(150, 255, 150)', text: 'WADIR IV' },
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
    const ruanganLayersLt1 = ruanganCoordsLt1.map(room => {
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
    

    const ruanganLayersLt2 = ruanganCoordsLt2.map(room => {
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

    //Garis route
    const routers = [
        { id: 1, coords: [-7.052145, 110.435370], name: 'Router 1', icon: '/images/computer.png' },
        { id: 2, coords: [-7.052160, 110.435485], name: 'Router 2', icon: '/images/computer.png' },
        { id: 3, coords: [-7.052290, 110.435600], name: 'Router 3', icon: '/images/computer.png' },
        { id: 4, coords: [-7.052350, 110.435320], name: 'Router 4', icon: '/images/computer.png' }
    ];
    
    // Define connections between routers
    const routerConnections = [
        { from: 1, to: 2 },
        { from: 4, to: 3 },
        { from: 1, to: 4 },
        // { from: 1, to: 3 } // You can define more connections as needed
    ];
    
    const routerLayer = routers.map(router => {
        // Create a marker for each router
        const marker = L.marker(router.coords, {
            icon: L.divIcon({
                className: 'text-label',
                html: `
                    <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                        ${router.icon ? `<img src="${router.icon}" style="width: 30px; height: 30px;" />` : ''}
                        <div style="margin-top: 4px; font-size: 12px; color: black;">${router.name}</div>
                    </div>`,
                iconSize: [80, 60],
                iconAnchor: [40, 30]
            })
        });
        return marker;
    });
    
    // Create connections (lines) between routers
    const connectionLayer = routerConnections.map(connection => {
        const fromRouter = routers.find(router => router.id === connection.from);
        const toRouter = routers.find(router => router.id === connection.to);
    
        const polyline = L.polyline([fromRouter.coords, toRouter.coords], {
            color: 'rgb(0, 0, 255)', // Connection line color
            weight: 3, // Line thickness
            opacity: 0.9 // Line opacity
        });
    
        return polyline;
    });
    
    // Add router markers and connections to the map
    
    
    // // Optional: Add popups to show router details when clicked
    routerLayer.forEach((marker, index) => {
        marker.bindPopup(`<strong>${routers[index].name}</strong><br>Coordinates: ${routers[index].coords}`).openPopup();
    });
    

    // Function to update floor visibility
    function updateFloorVisibility(lantai) {
        // Remove all layers that are not needed
        const layersToRemove = [
            gedungDirektur,
            teksGedungDirektur,
            lantai1Direktur,
            lantai2Direktur,
            teksLantai1,
            teksLantai2,
            ...ruanganLayersLt1.map(layer => layer.polygon),
            ...ruanganLayersLt1.map(layer => layer.textMarker),
            ...ruanganLayersLt2.map(layer => layer.polygon),
            ...ruanganLayersLt2.map(layer => layer.textMarker),
            ...routerLayer,
            ...connectionLayer
        ];
    
        layersToRemove.forEach(layer => {
            if (layer) {
                map.removeLayer(layer);
            }
        });
    
        // Add the current layer based on the selected floor
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
                ruanganLayersLt1.forEach(layer => {
                    map.addLayer(layer.polygon);
                    map.addLayer(layer.textMarker);
                });
                map.setView([-7.052305, 110.435501], 21);
                break;
            case 2:
                map.addLayer(lantai2Direktur);
                map.addLayer(teksLantai2);
                ruanganLayersLt2.forEach(layer => {
                    map.addLayer(layer.polygon);
                    map.addLayer(layer.textMarker);
                });
                routerLayer.forEach(marker => {
                    marker.addTo(map);
                });
                connectionLayer.forEach(polyline => {
                    polyline.addTo(map);
                });
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
const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAP_API_KEY + '&callback=initMap';
window.initMap = function() {
    const google_map_controller = new GoogleMapController(
        { lat: 35.689, lng: 139.692 },
        12,
        "map",
        "map-data"
    )

    google_map_controller.build()
}

document.head.appendChild(script);
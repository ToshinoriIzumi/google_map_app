import { GOOGLE_MAP_API_KEY } from 'config/const.js'

console.log(GOOGLE_MAP_API_KEY());
const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAP_API_KEY() + '&callback=initMap';
window.initMap = function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

document.head.appendChild(script);
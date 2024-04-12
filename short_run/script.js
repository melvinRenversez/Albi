var carMarker;
    
var mymap = L.map('mapid').setView([51.505, -0.09], 15);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Contributeurs OpenStreetMap</a>'
}).addTo(mymap);
    
function updateCarPosition(latitude, longitude) {
    if (carMarker) {
        mymap.removeLayer(carMarker);
    }

    carMarker = L.marker([latitude, longitude]).addTo(mymap);

    mymap.setView([latitude, longitude], mymap.getZoom());
}

var carLatitude = 43.913231;
var carLongitude = 2.113370;

updateCarPosition(carLatitude, carLongitude);

function refreshData() {
    $.ajax({
        url: 'data/get_data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var latitude = data[i].latitude;
                var longitude = data[i].longitude;
                console.log(latitude, longitude)
                updateCarPosition(latitude, longitude)
            }
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de la récupération des données: ' + status + ' ' + error);
        }
    });
}

document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 8){
        window.location.href ="../index.html"
    }
})
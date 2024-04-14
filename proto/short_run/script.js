var carMarker;
    
var mymap = L.map('mapid').setView([51.505, -0.09], 15);

document.addEventListener('DOMContentLoaded', function() {
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
    
    function refreshData() {
        $.ajax({
            url: '../../data/proto/proto_get_data.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                for (var i = 0; i < data.length; i++) {
                    var latitude = data[i].latitude;
                    var longitude = data[i].longitude;
                    $('#intensiteValue').text(data[i].Intensité)
                    $('#VInstantaneValue').text(data[i].VInstantanée)
                    $('#VMoyenneValue').text(data[i].VMoyenne)
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
            window.location.href ="../proto.html"
        }
    })
    setInterval(() => {
        refreshData();
    }, 500);
});


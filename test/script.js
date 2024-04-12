// Déclarer la variable carMarker en dehors de la fonction
var carMarker;

var mymap = L.map('mapid').setView([51.505, -0.09], 10);
    
// Ajouter une couche de tuiles (tiles) de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
    
// Fonction pour mettre à jour la position de la voiture et la vue de la carte
function updateCarPosition(latitude, longitude) {
    // Supprimer le marqueur existant (si nécessaire)
    if (carMarker) {
        mymap.removeLayer(carMarker);
    }
    
    // Ajouter un marqueur à la nouvelle position de la voiture
    carMarker = L.marker([latitude, longitude]).addTo(mymap);

    // Mettre à jour la vue de la carte pour centrer sur la nouvelle position de la voiture
    mymap.setView([latitude, longitude], mymap.getZoom());
}

// Exemple de position de voiture (latitude, longitude)
var carLatitude = 0.925692;
var carLongitude = 0.135385;

// Appeler la fonction pour afficher la position initiale de la voiture
updateCarPosition(carLatitude, carLongitude);

// Fonction pour récupérer les données de latitude et de longitude depuis la base de données
function refreshData() {
    $.ajax({
        url: 'data/get_data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Traiter les données reçues et mettre à jour la position de la voiture sur la carte
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

// Appeler la fonction pour récupérer les données de latitude et de longitude et les afficher sur la carte
refreshData();

if ("geolocation" in navigator) {
    // Récupérer la position GPS
    navigator.geolocation.getCurrentPosition(function(position) {
        // Extraire les coordonnées de latitude et de longitude de la position
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Afficher les coordonnées dans la console (tu peux les utiliser comme tu veux)
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);

    }, function(error) {
        // Gérer les erreurs de géolocalisation
        console.error("Erreur de géolocalisation: ", error);
    });
} else {
    // Si la géolocalisation n'est pas prise en charge par le navigateur
    console.log("La géolocalisation n'est pas prise en charge par ce navigateur.");
}
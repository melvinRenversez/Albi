const tensionInput = document.getElementById('tensionInput')
const tensionValue = document.getElementById('tensionValue')
const intensiteInput = document.getElementById('intensiteInput')
const intensiteValue = document.getElementById('intensiteValue')
const chaleurInput = document.getElementById('chaleurInput')
const chaleurValue = document.getElementById('chaleurValue')
const consomationInput = document.getElementById('consomationInput')
const consomationValue = document.getElementById('consomationValue')

function refreshData() {
    // Requête AJAX pour récupérer les nouvelles données
    $.ajax({
        url: '../data/get_data.php', // Le fichier PHP qui récupère les données
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Mettre à jour les éléments HTML avec les nouvelles données
            $('#tensionValue').text(data.tension);
            $('#tensionInput').val(data.tension);
            $('#intensiteValue').text(data.intensite);
            $('#intensiteInput').val(data.tension);
            $('#chaleurValue').text(data.chaleur);
            $('#chaleurInput').val(data.tension);
            $('#consomationValue').text(data.consommation);
            $('#consomationInput').val(data.tension);
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de la récupération des données: ' + status + ' ' + error);
        }
    });
}

function sendDataToServer() {
    // Récupérer les valeurs des champs depuis les éléments HTML
    var nouvelleTension = $('#tensionInput').val();
    var nouvelleIntensite = $('#intensiteInput').val();
    var nouvelleChaleur = $('#chaleurInput').val();
    var nouvelleConsommation = $('#consomationInput').val();
    
    // Création de l'objet contenant les données à envoyer
    var dataToSend = {
        nouvelle_tension: nouvelleTension,
        nouvelle_intensite: nouvelleIntensite,
        nouvelle_chaleur: nouvelleChaleur,
        nouvelle_consommation: nouvelleConsommation
    };
    
    // Requête AJAX pour envoyer les données au serveur
    $.ajax({
        url: '../data/send_data.php', // Le fichier PHP qui traitera les données
        type: 'POST',
        data: dataToSend, // Les données à envoyer
        dataType: 'json',
        success: function(response) {
            console.log('Données envoyées avec succès au serveur:', response);
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de l\'envoi des données au serveur :', status, error);
        }
    });
}

$('#tensionInput, #intensiteInput, #chaleurInput, #consomationInput').on('input', function() {
    sendDataToServer();
    consomationValue.innerHTML = consomationInput.value;
    tensionValue.innerHTML = tensionInput.value;
    intensiteValue.innerHTML = intensiteInput.value;
    chaleurValue.innerHTML = chaleurInput.value;
});

refreshData()
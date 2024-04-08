fps = 10

$(document).ready(function(){
    setInterval(refreshData, 1000/fps);
});

function refreshData() {
    $.ajax({
        url: 'data/get_data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#tensionValue').text(data.tension);
            $('#intensiteValue').text(data.intensite);
            $('#chaleurValue').text(data.chaleur);
            $('#consomationValue').text(data.consommation);
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de la récupération des données: ' + status + ' ' + error);
        }
    });
}
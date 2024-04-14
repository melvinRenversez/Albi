const chronoValue = document.getElementById('chronoValue');
const buttonChrono = document.getElementById('buttonChrono');

var carMarker;
    
var mymap = L.map('mapid').setView([51.505, -0.09], 15);

var chronoStart = false;

var seconde = 0
var minute = 0
var heure = 0

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
                    $('#tensionValue').text(data[i].Tension)
                    $('#joulemetreValue').text(data[i].Joulemètre)
                    $('#puisanceConsoValue').text(data[i].PConsommée)
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
        console.log(e.keyCode)
        if(e.keyCode == 8){
            window.location.href ="../proto.html"
        }
        if(e.keyCode == 80){
            resetChrono()
        }
    })

    buttonChrono.addEventListener('click', ()=>{
        console.log('click')
        startChrono()
    })

    
    setInterval(() => {
        refreshData();
    }, 500);


    function updateChrono(){
        chronoValue.innerHTML = heure + ":" + minute + ":" + seconde
    }

    function chronometre(){
        seconde++
        if(seconde == 60){
            minute++
            seconde = 0
        }
        if(minute == 60){
            heure++
            minute = 0
        }
        updateChrono()
    }

    function startChrono(){
        if(!chronoStart){
            loopChrono = setInterval(() => {
                chronometre()
            }, 1000);
            buttonChrono.innerHTML = "⟲"
            chronoStart = true;
        }else{
            seconde = 0;
            minute = 0;
            heure = 0;
            updateChrono()
        }
    }

    function resetChrono(){
        clearInterval(loopChrono)
        buttonChrono.innerHTML = "▶"
        chronoStart = false;
        heure = 0
        minute = 0
        seconde = 0 
        chronoValue.innerHTML = "STOP"
    }
    
    refreshData();
});
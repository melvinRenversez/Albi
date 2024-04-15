const PIValue = document.getElementById('PIValue')
const PVMValue = document.getElementById('PVMValue')
const PVIValue = document.getElementById('PVIValue')
const PPValue = document.getElementById('PPValue')
const PJValue = document.getElementById('PJValue')
const PTValue = document.getElementById('PTValue')
const PLTValue = document.getElementById('PLTValue')
const PLGValue = document.getElementById('PLGValue')

const UIValue = document.getElementById('UIValue')
const UVMValue = document.getElementById('UVMValue')
const UVIValue = document.getElementById('UVIValue')
const UPValue = document.getElementById('UPValue')
const UJValue = document.getElementById('UJValue')
const UTValue = document.getElementById('UTValue')
const ULTValue = document.getElementById('ULTValue')
const ULGValue = document.getElementById('ULGValue')

const PIText = document.getElementById('PIText')
const PVMText = document.getElementById('PVMText')
const PVIText = document.getElementById('PVIText')
const PPText = document.getElementById('PPText')
const PJText = document.getElementById('PJText')
const PTText = document.getElementById('PTText')
const PLTText = document.getElementById('PLTText')
const PLGText = document.getElementById('PLGText')

const UIText = document.getElementById('UIText')
const UVMText = document.getElementById('UVMText')
const UVIText = document.getElementById('UVIText')
const UPText = document.getElementById('UPText')
const UJText = document.getElementById('UJText')
const UTText = document.getElementById('UTText')
const ULTText = document.getElementById('ULTText')
const ULGText = document.getElementById('ULGText')

document.addEventListener('keydown', (e)=>{
    if(e.keyCode == 8){
        window.location.href ="../index.html"
    }
})

PIValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PIText.innerHTML = PIValue.value
    sendNewData()
})
PVMValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PVMText.innerHTML = PVMValue.value
    sendNewData()
})
PVIValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PVIText.innerHTML = PVIValue.value
    sendNewData()
})
PPValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PPText.innerHTML = PPValue.value
    sendNewData()
})
PJValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PJText.innerHTML = PJValue.value
    sendNewData()
})
PTValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PTText.innerHTML = PTValue.value
    sendNewData()
})
PLTValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PLTText.innerHTML = PLTValue.value
    sendNewData()
})
PLGValue.addEventListener('input', ()=>{
    console.log(PIValue.value)
    PLGText.innerHTML = PLGValue.value
    sendNewData()
})
UIValue.addEventListener('input', ()=>{
    console.log(UIValue.value)
    UIText.innerHTML = UIValue.value
    sendNewData()
})
UVMValue.addEventListener('input', ()=>{
    console.log(UVMValue.value)
    UVMText.innerHTML = UVMValue.value
    sendNewData()
})
UVIValue.addEventListener('input', ()=>{
    console.log(UVIValue.value)
    UVIText.innerHTML = UVIValue.value
    sendNewData()
})
UPValue.addEventListener('input', ()=>{
    console.log(UPValue.value)
    UPText.innerHTML = UPValue.value
    sendNewData()
})
UJValue.addEventListener('input', ()=>{
    console.log(UJValue.value)
    UJText.innerHTML = UJValue.value
    sendNewData()
}) 
UTValue.addEventListener('input', ()=>{
    console.log(UTValue.value)
    UTText.innerHTML = UTValue.value
    sendNewData()
})
ULTValue.addEventListener('input', ()=>{
    console.log(ULTValue.value)
    ULTText.innerHTML = ULTValue.value
    sendNewData()
})
ULGValue.addEventListener('input', ()=>{
    console.log(ULGValue.value)
    ULGText.innerHTML = ULGValue.value
    sendNewData()
})


function getUrbanData() {
    $.ajax({
        url: '../../data/urban/urban_get_data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                $('#UIText').text(data[i].Intensité)
                $('#UIValue').val(data[i].Intensité)
                $('#UVMText').text(data[i].VMoyenne)
                $('#UVMValue').val(data[i].VMoyenne)
                $('#UVIText').text(data[i].VInstantanée)
                $('#UVIValue').val(data[i].VInstantanée)
                $('#UPText').text(data[i].PConsommée)
                $('#UPValue').val(data[i].PConsommée)
                $('#UJText').text(data[i].Joulemètre)
                $('#UJValue').val(data[i].Joulemètre)
                $('#UTText').text(data[i].Tension)
                $('#UTValue').val(data[i].Tension)
                $('#ULTText').text(data[i].latitude)
                $('#ULTValue').val(data[i].latitude)
                $('#ULGText').text(data[i].longitude)
                $('#ULGValue').val(data[i].longitude)
            }
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de la récupération des données: ' + status + ' ' + error);
        }
    });
}

function getPortoData() {
    $.ajax({
        url: '../../data/proto/proto_get_data.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                $('#PIText').text(data[i].Intensité)
                $('#PIValue').val(data[i].Intensité)
                $('#PVMText').text(data[i].VMoyenne)
                $('#PVMValue').val(data[i].VMoyenne)
                $('#PVIText').text(data[i].VInstantanée)
                $('#PVIValue').val(data[i].VInstantanée)
                $('#PPText').text(data[i].PConsommée)
                $('#PPValue').val(data[i].PConsommée)
                $('#PJText').text(data[i].Joulemètre)
                $('#PJValue').val(data[i].Joulemètre)
                $('#PTText').text(data[i].Tension)
                $('#PTValue').val(data[i].Tension)
                $('#PLTText').text(data[i].latitude)
                $('#PLTValue').val(data[i].latitude)
                $('#PLGText').text(data[i].longitude)
                $('#PLGValue').val(data[i].longitude)
            }
        },
        error: function(xhr, status, error) {
            console.error('Erreur lors de la récupération des données: ' + status + ' ' + error);
        }
    });
}

function sendNewData(){

    var protoNewData = {
        'nouvelle_intensite' : PIValue.value,
        'nouvelle_VMoyenne' : PVMValue.value,
        'nouvelle_VInstantane' : PVIValue.value,
        'nouvelle_PConso' : PPValue.value,
        'nouvelle_Joulemetre' : PJValue.value,
        'nouvelle_Tension' : PTValue.value,
        'nouvelle_latitude' : PLTValue.value,
        'nouvelle_longitude' : PLGValue.value
    }

    var urbanNewData = {
        'nouvelle_intensite' : UIValue.value,
        'nouvelle_VMoyenne' : UVMValue.value,
        'nouvelle_VInstantane' : UVIValue.value,
        'nouvelle_PConso' : UPValue.value,
        'nouvelle_Joulemetre' : UJValue.value,
        'nouvelle_Tension' : UTValue.value,
        'nouvelle_latitude' : ULTValue.value,
        'nouvelle_longitude' : ULGValue.value
    }

    $.ajax({
        url :'../data/proto/proto_send_data.php',
        type : 'POST',
        data : protoNewData,
        dataType : 'json',
        success : function(reponse){
            console.log("donnes envoyer avec succees : ", reponse)
        },
        error : function(reponse){
            console.log("donnes envoyer avec erreur : ", reponse)
        }
    })
    
    $.ajax({
        url :'../data/urban/urban_send_data.php',
        type : 'POST',
        data : urbanNewData,
        dataType : 'json',
        success : function(reponse){
            console.log("donnes envoyer avec succees : ", reponse)
        },
        error : function(reponse){
            console.log("donnes envoyer avec erreur : ", reponse)
        }
    })
} 

getUrbanData()
getPortoData()
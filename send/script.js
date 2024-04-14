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

PIValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PIText.innerHTML = PIValue.value
})
PVMValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PVMText.innerHTML = PVMValue.value
})
PVIValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PVIText.innerHTML = PVIValue.value
})
PPValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PPText.innerHTML = PPValue.value
})
PJValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PJText.innerHTML = PJValue.value
})
PTValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PTText.innerHTML = PTValue.value
})
PLTValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PLTText.innerHTML = PLTValue.value
})
PLGValue.addEventListener('click', ()=>{
    console.log(PIValue.value)
    PLGText.innerHTML = PLGValue.value
})
UIValue.addEventListener('click', ()=>{
    console.log(UIValue.value)
    UIText.innerHTML = UIValue.value
})
UVMValue.addEventListener('click', ()=>{
    console.log(UVMValue.value)
    UVMText.innerHTML = UVMValue.value
})
UVIValue.addEventListener('click', ()=>{
    console.log(UVIValue.value)
    UVIText.innerHTML = UVIValue.value
})
UPValue.addEventListener('click', ()=>{
    console.log(UPValue.value)
    UPText.innerHTML = UPValue.value
})
UJValue.addEventListener('click', ()=>{
    console.log(UJValue.value)
    UJText.innerHTML = UJValue.value
}) 
UTValue.addEventListener('click', ()=>{
    console.log(UTValue.value)
    UTText.innerHTML = UTValue.value
})
ULTValue.addEventListener('click', ()=>{
    console.log(ULTValue.value)
    ULTText.innerHTML = ULTValue.value
})
ULGValue.addEventListener('click', ()=>{
    console.log(ULGValue.value)
    ULGText.innerHTML = ULGValue.value
})

document.addEventListener('DOMContentLoaded', ()=>{
    PIText.innerHTML = PIValue.value
    PPText.innerHTML = PPValue.value
    PVIText.innerHTML = PVIValue.value
    PVMText.innerHTML = PVMValue.value
    PJText.innerHTML = PJValue.value
    PTText.innerHTML = PTValue.value
    PLTText.innerHTML = PLTValue.value
    PLGText.innerHTML = PLGValue.value
    
    UIText.innerHTML = UIValue.value
    UPText.innerHTML = UPValue.value
    UVIText.innerHTML = UVIValue.value
    UVMText.innerHTML = UVMValue.value
    UJText.innerHTML = UJValue.value
    UTText.innerHTML = UTValue.value
    ULTText.innerHTML = ULTValue.value
    ULGText.innerHTML = ULGValue.value
})


var protoDataToSend = {
    nouvelle
}

$.ajax({
    url :'../data/proto/proto_send_data.php',
    type : 'POST',
    data : protoDataToSend,
    dataType : 'json',
    success : function(reponse){
        console.log("donnes envoyer avec succees : ", reponse)
    },
    error : function(reponse){
        console.log("donnes envoyer avec erreur : ", reponse)
    }
})
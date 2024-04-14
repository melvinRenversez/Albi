document.addEventListener("keydown", (e)=>{
    console.log(e.keyCode)
    if(e.keyCode == 48){
        window.location.href ="send/send.html"
    }
})
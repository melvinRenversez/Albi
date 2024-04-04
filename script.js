const tension = document.getElementById('tensionValue');
const intensite = document.getElementById('intensiteValue');
const chaleur = document.getElementById('chaleurValue');
const consomation = document.getElementById('consomationValue');

setInterval(function() {
    afficherDonnees();
}, 1000);


function afficherDonnees() {
    const cheminFichier = 'text.txt';

    fetch(cheminFichier)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération du fichier');
            }
            return response.text();
        })
        .then(data => {
            ligne = data.split('\n')
            ligne.forEach(x => {
                console.log(x)
                mots = x.split(':')
                console.log(mots[0])
                if(mots[0] === "tension "){
                    tension.innerHTML = mots[1]
                }else if(mots[0] === "intensite "){
                    intensite.innerHTML = mots[1]
                }else if(mots[0] === "chaleur "){
                    chaleur.innerHTML = mots[1]
                }else{
                    consomation.innerHTML = mots[1]
                }
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}
afficherDonnees()

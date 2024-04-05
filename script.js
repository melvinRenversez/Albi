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
                const htmlLigne = document.createElement('p')
                htmlLigne.innerHTML = x
                dataContainer.appendChild(htmlLigne)
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    console.log('update')
}
afficherDonnees()

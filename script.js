setInterval(function() {
    afficherDonnees();
}, 3000);


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
            const dataContainer = document.getElementById('dataContainer');
            while(dataContainer.firstChild){
                dataContainer.removeChild(dataContainer.firstChild)
            }
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
}
afficherDonnees()

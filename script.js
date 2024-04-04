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
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.textContent = data;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}

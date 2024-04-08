<?php
// Vérification si des données sont envoyées
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $bdd = new PDO('sqlite:mesures.db');
    
    // Récupération des nouvelles valeurs envoyées par le formulaire
    $nouvelleTension = $_POST['nouvelle_tension'];
    $nouvelleIntensite = $_POST['nouvelle_intensite'];
    $nouvelleChaleur = $_POST['nouvelle_chaleur'];
    $nouvelleConsommation = $_POST['nouvelle_consommation'];

    // Préparation de la requête SQL pour mettre à jour les données
    $requete = $bdd->prepare('UPDATE mes_mesures SET tension = ?, intensite = ?, chaleur = ?, consommation = ?');
    $requete->execute([$nouvelleTension, $nouvelleIntensite, $nouvelleChaleur, $nouvelleConsommation]);
    
    // Répondre avec une confirmation au format JSON
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Données mises à jour avec succès.']);
} else {
    // Si aucune donnée n'a été reçue via POST, renvoyer une erreur
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Erreur : Aucune donnée reçue.']);
}
?>

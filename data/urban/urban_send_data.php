<?php
// Vérification si des données sont envoyées
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connexion à la base de données
    $bdd = new PDO('sqlite:../database.db');
    
    // Récupération des nouvelles valeurs envoyées par le formulaire
    $nouvelleIntensite = $_POST['nouvelle_intensite'];
    $nouvelleVMoyenne = $_POST['nouvelle_VMoyenne'];
    $nouvelleVInstantane = $_POST['nouvelle_VInstantane'];
    $nouvellePConso = $_POST['nouvelle_PConso'];
    $nouvelleJoulemetre = $_POST['nouvelle_Joulemetre'];
    $nouvelleTension = $_POST['nouvelle_Tension'];
    $nouvelleLatitude = $_POST['nouvelle_latitude'];
    $nouvelleLongitude = $_POST['nouvelle_longitude'];

    // Préparation de la requête SQL pour mettre à jour les données
    $requete = $bdd->prepare('UPDATE urban SET Intensité = ?, VMoyenne = ?, VInstantanée = ?, PConsommée = ?, Joulemètre = ?, Tension = ?, latitude = ?, longitude = ?');
    $requete->execute([$nouvelleIntensite, $nouvelleVMoyenne, $nouvelleVInstantane, $nouvellePConso, $nouvelleJoulemetre, $nouvelleTension, $nouvelleLatitude, $nouvelleLongitude]);
    
    // Répondre avec une confirmation au format JSON
    header('Content-Type: application/json');
    echo json_encode(['success' => true, 'message' => 'Données mises à jour avec succès.']);
} else {
    // Si aucune donnée n'a été reçue via POST, renvoyer une erreur
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Erreur : Aucune donnée reçue.']);
}
?>

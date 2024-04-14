<?php
// Connexion à la base de données et récupération des données
$bdd = new PDO('sqlite:../database.db');
$requete = $bdd->query('SELECT * FROM Urban');
$donnees = $requete->fetchAll(PDO::FETCH_ASSOC);

// Retourner les données au format JSON
header('Content-Type: application/json');
echo json_encode($donnees);
?>

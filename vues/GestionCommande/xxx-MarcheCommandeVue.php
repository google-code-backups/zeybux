<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 12/09/2010
// Fichier : MarcheCommandeVue.php
//
// Description : À REMPLIR
//
//****************************************************************

// Vérification de la bonne connexion de l'adherent dans le cas contraire redirection vers le formulaire de connexion
if( isset($_SESSION[DROIT_ID]) && ( isset($_SESSION[MOD_GESTION_COMMANDE]) || isset($_SESSION[DROIT_SUPER_ZEYBU]) ) ) {
	if(isset($_POST['pParam'])) {
		$lParam = json_decode($_POST["pParam"],true);
		
		if(isset($lParam["fonction"])) {
			include_once(CHEMIN_CLASSES_CONTROLEURS . MOD_GESTION_COMMANDE . "/MarcheCommandeControleur.php");						
			$lControleur = new MarcheCommandeControleur();
			
			switch($lParam["fonction"]) {					
				case "listeReservation":
						echo $lControleur->getMarcheListeReservation($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue MarcheCommande par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					break;
					
				case "infoAchat":
						echo $lControleur->getInfoAchatMarche($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue AchatCommande par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					break;
					
				case "infoMarche":
						echo $lControleur->getInfoMarche($lParam)->exportToJson();
						$lLogger->log("Affichage de la vue AchatCommande (infoMarche) par l'Adhérent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					break;	
				
				case "acheter":
						$lResponse = $lControleur->enregistrerAchat($lParam);
						echo $lResponse->exportToJson();
		
						if($lResponse->getValid()) {
							$lLogger->log("Enregistrement d'un achat par l'adherent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
						} else {
							$lLogger->log("Echec de l'enregistrement d'un achat par l'adherent : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
						}						
					break;

				default:
					$lLogger->log("Demande d'accés à MarcheCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
					header('location:./index.php');
					break;
			}
		} else {
			$lLogger->log("Demande d'accés à MarcheCommande sans identifiant commande par : " . $_SESSION[ID_CONNEXION],PEAR_LOG_INFO);	// Maj des logs
			header('location:./index.php');
		}
	}
} else {
	$lLogger->log("Demande d'accés sans autorisation à MarcheCommande",PEAR_LOG_INFO);	// Maj des logs
	header('location:./index.php?cx=1');
}
?>

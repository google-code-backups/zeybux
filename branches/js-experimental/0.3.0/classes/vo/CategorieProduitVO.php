<?php
//****************************************************************
//
// Createur : Julien PIERRE
// Date de creation : 06/05/2010
// Fichier : CategorieProduitVO.php
//
// Description : Classe CategorieProduitVO
//
//****************************************************************
include_once(CHEMIN_CLASSES . "DataTemplate.php");

/**
 * @name CategorieProduitVO
 * @author Julien PIERRE
 * @since 06/05/2010
 * @desc Classe représentant une CategorieProduitVO
 */
class CategorieProduitVO extends DataTemplate
{
	/**
	* @var int(11)
	* @desc Id de la CategorieProduitVO
	*/
	protected $mId;

	/**
	* @var varchar(50)
	* @desc Nom de la CategorieProduitVO
	*/
	protected $mNom;

	/**
	* @var text
	* @desc Description de la CategorieProduitVO
	*/
	protected $mDescription;

	/**
	* @name getId()
	* @return int(11)
	* @desc Renvoie le membre Id de la CategorieProduitVO
	*/
	public function getId(){
		return $this->mId;
	}

	/**
	* @name setId($pId)
	* @param int(11)
	* @desc Remplace le membre Id de la CategorieProduitVO par $pId
	*/
	public function setId($pId) {
		$this->mId = $pId;
	}

	/**
	* @name getNom()
	* @return varchar(50)
	* @desc Renvoie le membre Nom de la CategorieProduitVO
	*/
	public function getNom(){
		return $this->mNom;
	}

	/**
	* @name setNom($pNom)
	* @param varchar(50)
	* @desc Remplace le membre Nom de la CategorieProduitVO par $pNom
	*/
	public function setNom($pNom) {
		$this->mNom = $pNom;
	}

	/**
	* @name getDescription()
	* @return text
	* @desc Renvoie le membre Description de la CategorieProduitVO
	*/
	public function getDescription(){
		return $this->mDescription;
	}

	/**
	* @name setDescription($pDescription)
	* @param text
	* @desc Remplace le membre Description de la CategorieProduitVO par $pDescription
	*/
	public function setDescription($pDescription) {
		$this->mDescription = $pDescription;
	}

}
?>
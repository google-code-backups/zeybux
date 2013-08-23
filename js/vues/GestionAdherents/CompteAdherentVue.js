;function CompteAdherentVue(pParam) {
	this.mIdAdherent = null;
	this.mAdhNumero = null;
	
	this.construct = function(pParam) {
		$.history( {'vue':function() {CompteAdherentVue(pParam);}} );
		var that = this;
		pParam.fonction = 'afficher';
		$.post(	"./index.php?m=GestionAdherents&v=CompteAdherent", "pParam=" + $.toJSON(pParam),
				function(lResponse) {
					Infobulle.init(); // Supprime les erreurs
					if(lResponse) {
						if(lResponse.valid) {
							if(pParam && pParam.vr) {
								Infobulle.generer(pParam.vr,'');
							}
							that.afficher(lResponse);
						} else {
							Infobulle.generer(lResponse,'');
						}
					}
				},"json"
		);
	};
	
	this.afficher = function(lResponse) {
		var that = this;
		
		this.mIdAdherent = lResponse.adherent.adhId;
		this.mAdhNumero = lResponse.adherent.adhNumero;
		
		lResponse.opeMontant = lResponse.adherent.cptSolde.nombreFormate(2,',',' ');
		lResponse.sigleMonetaire = gSigleMonetaire;
		
		lResponse.adherent.adhDateNaissance = lResponse.adherent.adhDateNaissance.extractDbDate().dateDbToFr();
		lResponse.adherent.adhDateAdhesion = lResponse.adherent.adhDateAdhesion.extractDbDate().dateDbToFr();
		
		$(lResponse.operationPassee).each(function() {
			if(this.date != null) {
				this.date = this.date.extractDbDate().dateDbToFr();
				if(this.tppType == null) {this.tppType ='';} // Si ce n'est pas un paiement il n'y a pas de type
				if(this.tppId == 2) { // Affiche le N° de chèque
					this.opeTypePaiementChampComplementaire =' N° ' + this.champComplementaire[3].valeur;
				} else {
					this.opeTypePaiementChampComplementaire = '';
				}
				if(this.montant < 0) {
					this.debit = (this.montant * -1).nombreFormate(2,',',' ') + ' ' + gSigleMonetaire;
					this.credit = '';
				} else {
					this.debit = '';
					this.credit = this.montant.nombreFormate(2,',',' ') + ' ' + gSigleMonetaire;
				}
			}
		});
		
		var lNvSolde = parseFloat(lResponse.adherent.cptSolde);
		var lRechargementPrecedent = 0;
		$(lResponse.operationAvenir).each(function() {
			if(this.opeDate != null) {
				lNvSolde += parseFloat(this.opeMontant);
				this.nouveauSolde = lNvSolde.nombreFormate(2,',',' ');
				this.rechargement = 0;				
				var lSoldeCible = 5;
				if(lNvSolde < lSoldeCible) {
					this.rechargement = (Math.ceil((lSoldeCible-lNvSolde)/lSoldeCible) * lSoldeCible) - lRechargementPrecedent;
				}
				lRechargementPrecedent += this.rechargement;
				this.rechargement = this.rechargement.nombreFormate(2,',',' ');
				
				this.opeDate = this.opeDate.extractDbDate().dateDbToFr();
				this.comDateMarche = this.comDateMarche.extractDbDate().dateDbToFr();
				this.opeMontant = (this.opeMontant * -1).nombreFormate(2,',',' ');
			}
		});	
		
		$(lResponse.modules).each(function() {
			//alert(this.nom);
			var that = this;
			this.classAutorisation = "ui-icon-closethick";
			$(lResponse.autorisations).each(function() {
				if(this.idModule == that.id) {
					that.classAutorisation = "ui-icon-check";
				}
			});
		});		
				
		var lGestionAdherentsTemplate = new GestionAdherentsTemplate();
		var lCommunTemplate = new CommunTemplate();
		//var lTemplate = lMonCompteTemplate.monCompte;
		
		var lHtml = lCommunTemplate.debutContenu;		
		lHtml += lGestionAdherentsTemplate.infoCompteAdherentDebut.template(lResponse.adherent);
		lHtml += lGestionAdherentsTemplate.infoCompteAdherentAutorisation.template(lResponse);
		lHtml += lGestionAdherentsTemplate.infoCompteAdherentFin.template(lResponse);
		lHtml += lGestionAdherentsTemplate.listeOperationAdherentDebut.template(lResponse);
		lHtml += lGestionAdherentsTemplate.listeOperationPassee.template(lResponse);
		// Affiche des opérations avenir uniquement si elles existent
		if(isArray(lResponse.operationAvenir) && lResponse.operationAvenir[0].opeLibelle != null) {
			lHtml += lGestionAdherentsTemplate.listeOperationAvenir.template(lResponse);
		}
		lHtml += lGestionAdherentsTemplate.listeOperationAdherentFin.template(lResponse);
		lHtml += lCommunTemplate.finContenu;
		
		lHtml = $(lHtml);
		if(lResponse.adherent.cptSolde < 0) {
			lHtml = this.soldeNegatif(lHtml);
		}
		
		// Ne pas afficher la pagination si il y a moins de 10 éléments
		if(lResponse.operationPassee.length < 11) {
			lHtml = this.masquerPagination(lHtml);
		} else {
			lHtml = this.paginnation(lHtml);
		}		

		$('#contenu').replaceWith(that.affect(lHtml));	
	};
	
	this.affect = function(pData) {
		pData = this.nouveauSoldeNegatif(pData);
		pData = this.affectHover(pData);
		pData = this.affectLienModifier(pData);
		pData = this.affectDialogSuppAdherent(pData);
		pData = this.affectRetour(pData);
		pData = gCommunVue.comHoverBtn(pData);
		return pData;
	};
		
	this.paginnation = function(pData) {
		pData.find("#table-operation")
			.tablesorter({headers: { 
				0: {sorter: false},
	            1: {sorter: false},
	            2: {sorter: false},
	            3: {sorter: false},
	            4: {sorter: false} 
	        } })
			.tablesorterPager({container: pData.find("#content-nav-liste-operation"),positionFixed:false}); 
		return pData;
	};
	
	this.nouveauSoldeNegatif = function(pData) {
		pData.find('.nouveau-solde-val').each(function() {
			if(parseFloat($(this).text().numberFrToDb()) < 0 ) {
				$(this).closest('.nouveau-solde').addClass("com-nombre-negatif");
			}
		});
		return pData;
	};
	
	this.soldeNegatif = function(pData) {
		pData.find('#solde').addClass("com-nombre-negatif");
		return pData;
	};
	
	this.affectHover = function(pData) {
		pData.find('#icone-nav-liste-operation-w,#icone-nav-liste-operation-e').hover(function() {$(this).addClass("ui-state-hover");},function() {$(this).removeClass("ui-state-hover");});
		return pData;
	};
	
	this.masquerPagination = function(pData) {
		pData.find('#content-nav-liste-operation').hide();
		return pData;
	};
	
	this.affectLienModifier = function(pData) {
		var that = this;
		pData.find('#btn-edt').click(function() {			
			ModificationAdherentVue({id:that.mIdAdherent});
		});
		return pData;
	};
	
	this.affectDialogSuppAdherent = function(pData) {
		var that = this;
		pData.find("#btn-supp").click(function() {
			var lGestionAdherentsTemplate = new GestionAdherentsTemplate();
			var lTemplate = lGestionAdherentsTemplate.dialogSuppressionAdherent;
			
			$(lTemplate.template({adhNumero:that.mAdhNumero})).dialog({
				autoOpen: true,
				modal: true,
				draggable: false,
				resizable: false,
				width:600,
				buttons: {
					'Supprimer': function() {
					/*	var lParam = {id:that.mIdAdherent};*/
						var lVo = new AdherentVO();
						lVo.id = that.mIdAdherent;
						lVo.fonction = 'supprimer';
						
						var lValid = new AdherentValid();
						var lVr = lValid.validDelete(lVo);
						
						var lDialog = this;
						if(lVr.valid) {
							Infobulle.init(); // Supprime les erreurs

							$.post(	"./index.php?m=GestionAdherents&v=SuppressionAdherent", "pParam=" + $.toJSON(lVo),
									function(lResponse) {
										Infobulle.init(); // Supprime les erreurs
										if(lResponse) {
											if(lResponse.valid) {
												/*var lGestionAdherentsTemplate = new GestionAdherentsTemplate();
												var lTemplate = lGestionAdherentsTemplate.supprimerAdherentSucces;
												$('#contenu').replaceWith(lTemplate.template(lResponse));
												$(lDialog).dialog('close');*/
												
												var lVR = new Object();
												var erreur = new VRerreur();
												erreur.code = ERR_357_CODE;
												erreur.message = ERR_357_MSG;
												lVR.valid = false;
												lVR.log = new VRelement();
												lVR.log.valid = false;
												lVR.log.erreurs.push(erreur);
												
												ListeAdherentVue({vr:lVR});
												
												$(lDialog).dialog('close');
											} else {
												Infobulle.generer(lResponse,'');
											}
										}
									},"json"
							);
						
						} else {
							Infobulle.generer(lVr,'');
						}
					},
					'Annuler': function() {
						$(this).dialog('close');
					}
				},
				close: function(ev, ui) { $(this).remove(); }
				
			});
		});
		return pData;
	};
	
	this.affectRetour = function(pData) {
		pData.find("#lien-retour").click(function() { ListeAdherentVue();});
		return pData;
	};
		
	this.construct(pParam);
}
function CompteZeybuTemplate(){this.InfoCompte='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Le Compte du Zeybu</div><table id="table-info-solde-zeybu"><thead><tr class="ui-widget ui-widget-header"><th id="td-solde-zeybu-total" class="com-table-th">Solde Total : {soldeTotal} {sigleMonetaire}</th><th id="td-solde-zeybu-caisse" class="com-table-th">Montant en Caisse : {soldeCaisse} {sigleMonetaire}</th><th id="td-solde-zeybu-banque" class="com-table-th">Montant en Banque : {soldeBanque} {sigleMonetaire}</th></tr></thead></table><div><div id="content-nav-liste-operation" class="ui-helper-clearfix ui-state-default ui-corner-all"><form>	<span id="icone-nav-liste-operation-w" class="prev ui-helper-hidden ui-state-default ui-corner-all com-button" ><span class="ui-icon ui-icon-circle-arrow-w"></span></span>	<span id="page-compteur">Page : <span type="text" class="pagedisplay"></span></span>	<span id="icone-nav-liste-operation-e" class="next ui-state-default ui-corner-all com-button" ><span class="ui-icon ui-icon-circle-arrow-e"></span></span>	<input type="hidden" class="pagesize" value="30"></form></div><table id="table-operation" class="com-table"><thead><tr class="ui-widget ui-widget-header" ><th class="com-table-th">Date</th><th class="com-table-th">Compte</th><th class="com-table-th">Libellé</th><th class="com-table-th">Type de paiement</th><th class="com-table-th">Débit</th><th class="com-table-th">Crédit</th></tr></thead><tbody><!-- BEGIN operation --><tr><td class="com-table-td td-date ">{operation.opeDate}</td><td class="com-table-td td-date ">{operation.cptLabel}</td><td class="com-table-td td-libelle">{operation.opeLibelle}</td><td class="com-table-td td-type-paiement">{operation.tppType}</td><td class="com-table-td td-montant">{operation.debit}</td><td class="com-table-td td-montant">{operation.credit}</td></tr><!-- END operation --></tbody></table></div></div></div>';this.listeOperationVide='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Le Compte du Zeybu</div><table id="table-info-solde-zeybu"><thead><tr class="ui-widget ui-widget-header"><th id="td-solde-zeybu-total" class="com-table-th">Solde Total : {soldeTotal} {sigleMonetaire}</th><th id="td-solde-zeybu-caisse" class="com-table-th">Montant en Caisse : {soldeCaisse} {sigleMonetaire}</th><th id="td-solde-zeybu-banque" class="com-table-th">Montant en Banque : {soldeBanque} {sigleMonetaire}</th></tr></thead></table><p id="texte-liste-vide">Aucune Opération effectuée.</p></div></div>';this.listeAdherent='<div id="contenu" class="ui-helper-reset"><div id="virements"><ul><li><a href="#virement-solidaire">Virement Solidaire</a></li><li><a href="#virement-adherent">Virement Adherent</a></li><li><a href="#virement-producteur">Virement Producteur</a></li></ul><div id="virement-solidaire"><div class="com-center"><button id="btn-virement-solidaire" class="ui-state-default ui-corner-all com-button com-center"> Compte Zeybu vers Compte Solidaire</button></div><div class="com-center"><button id="btn-virement-solidaire-inverse" class="ui-state-default ui-corner-all com-button com-center"> Compte Solidaire vers Compte Zeybu</button></div></div><div id="virement-adherent"><div id="liste-adh-recherche" class="recherche com-widget-header ui-widget ui-widget-header ui-corner-all"><form id="filter-form-adherent"><div><span class="conteneur-icon com-float-left ui-widget-content ui-corner-left" title="Chercher"><span class="ui-icon ui-icon-search"></span></span><input class="com-input-text ui-widget-content ui-corner-right filter" name="filter-adherent" id="filter-adherent" value="" maxlength="30" size="15" type="text" /></div></form></div><table class="com-table table-adherent"><thead><tr class="ui-widget ui-widget-header"><th class="com-table-th com-underline-hover liste-adh-th-num com-cursor-pointer"><span class="ui-icon span-icon"></span>N°</th><th class="com-table-th com-underline-hover com-cursor-pointer"><span class="ui-icon span-icon"></span>Compte</th><th class="com-table-th com-underline-hover liste-adh-th-nom  com-cursor-pointer"><span class="ui-icon span-icon"></span>Nom</th><th class="com-table-th com-underline-hover liste-adh-th-nom  com-cursor-pointer"><span class="ui-icon span-icon"></span>Prénom</th><th class="com-table-th com-underline-hover com-cursor-pointer"></th><th class="com-table-th com-underline-hover com-cursor-pointer"></th></tr></thead><tbody><!-- BEGIN listeAdherent --><tr class="com-cursor-pointer compte-ligne-adherent" ><td class="com-table-td"><span class="ui-helper-hidden id-adherent">{listeAdherent.adhId}</span>{listeAdherent.adhNumero}</td><td class="com-table-td">{listeAdherent.cptLabel}</td><td class="com-table-td">{listeAdherent.adhNom}</td><td class="com-table-td">{listeAdherent.adhPrenom}</td><td class="com-table-td com-center"><button class="btn-virement ui-state-default ui-corner-all com-button com-center">Zeybu vers {listeAdherent.cptLabel}</button></td><td class="com-table-td com-center"><button class="btn-virement-inverse ui-state-default ui-corner-all com-button com-center">{listeAdherent.cptLabel} vers Zeybu</button></td></tr><!-- END listeAdherent --></tbody></table></div><div id="virement-producteur"><div id="liste-prdt-recherche" class="recherche com-widget-header ui-widget ui-widget-header ui-corner-all"><form id="filter-form-producteur"><div><span class="conteneur-icon com-float-left ui-widget-content ui-corner-left" title="Chercher"><span class="ui-icon ui-icon-search"></span></span><input class="com-input-text ui-widget-content ui-corner-right filter" name="filter-producteur" id="filter-producteur" value="" maxlength="30" size="15" type="text" /></div></form></div><table class="com-table table-producteur"><thead><tr class="ui-widget ui-widget-header"><th class="com-table-th com-underline-hover liste-adh-th-num com-cursor-pointer"><span class="ui-icon span-icon"></span>N°</th><th class="com-table-th com-underline-hover com-cursor-pointer"><span class="ui-icon span-icon"></span>Compte</th><th class="com-table-th com-underline-hover liste-adh-th-nom com-cursor-pointer"><span class="ui-icon span-icon"></span>Nom</th><th class="com-table-th com-underline-hover liste-adh-th-nom com-cursor-pointer"><span class="ui-icon span-icon"></span>Prénom</th><th class="com-table-th com-underline-hover com-cursor-pointer"></th><th class="com-table-th com-underline-hover com-cursor-pointer"></th></tr></thead><tbody><!-- BEGIN listeProducteur --><tr class="com-cursor-pointer compte-ligne-producteur" ><td class="com-table-td"><span class="ui-helper-hidden id-producteur">{listeProducteur.prdtId}</span>{listeProducteur.prdtNumero}</td><td class="com-table-td">{listeProducteur.cptLabel}</td><td class="com-table-td">{listeProducteur.prdtNom}</td><td class="com-table-td">{listeProducteur.prdtPrenom}</td><td class="com-table-td com-center"><button class="btn-virement ui-state-default ui-corner-all com-button com-center">Zeybu vers {listeProducteur.cptLabel}</button></td><td class="com-table-td com-center"><button class="btn-virement-inverse ui-state-default ui-corner-all com-button com-center">{listeProducteur.cptLabel} vers Zeybu</button></td></tr><!-- END listeProducteur --></tbody></table></div></div></div>';this.listeAdherentVide='<div id="virement-adherent"><p id="texte-liste-vide">Aucun adhérent dans la base.</p></div>';this.listeProducteurVide='<div id="virement-producteur"><p id="texte-liste-vide">Aucun producteur dans la base.</p></div>';this.dialogVirementSolidaire='<div id="dialog-ajout-virement" title="Virement Solidaire"><form><table class="com-table-100"><tr>Du compte : {cptDebit} vers le compte : {cptCredit}</tr><tr class="com-center" ><td class="com-table-form-td montant-virement">Montant <input class="com-numeric com-input-text ui-widget-content ui-corner-all" type="text" name="montant" maxlength="12" id="montant"/> {sigleMonetaire}</td></tr></table></form></div>';this.dialogAjoutVirement='<div id="dialog-ajout-virement" title="Virement"><form><table class="com-table-100"><tr>Du compte : {cptDebit} vers le compte : {cptCredit}</tr><tr class="com-center" ><td class="com-table-form-td montant-virement">Montant <input class="com-numeric com-input-text ui-widget-content ui-corner-all" type="text" name="montant" maxlength="12" id="montant"/> {sigleMonetaire}</td></tr></table></form></div>';this.listeVirement='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Liste des virements</div><div><div id="content-nav-liste-operation" class="ui-helper-clearfix ui-state-default ui-corner-all"><form>	<span id="icone-nav-liste-operation-w" class="prev ui-helper-hidden ui-state-default ui-corner-all com-button" ><span class="ui-icon ui-icon-circle-arrow-w"></span></span>	<span id="page-compteur">Page : <span type="text" class="pagedisplay"></span></span>	<span id="icone-nav-liste-operation-e" class="next ui-state-default ui-corner-all com-button" ><span class="ui-icon ui-icon-circle-arrow-e"></span></span>	<input type="hidden" class="pagesize" value="20"></form></div><table id="table-operation" class="com-table"><thead><tr class="ui-widget ui-widget-header" ><th class="com-table-th">Date</th><th class="com-table-th">Compte</th><th class="com-table-th">Débit</th><th class="com-table-th">Crédit</th><th class="com-table-th"></th><th class="com-table-th"></th></tr></thead><tbody><!-- BEGIN operation --><tr><td class="com-table-td td-date "><span class="ui-helper-hidden id-operation">{operation.opeId}</span>{operation.opeDate}</td><td class="com-table-td cpt-label">{operation.cptLabel}</td><td class="com-table-td td-montant">{operation.debit}</td><td class="com-table-td td-montant">{operation.credit}</td><td class="com-table-td td-edt" id="td-edt-{operation.opeId}"></td><td class="com-table-td td-edt" id="td-sup-{operation.opeId}"></td></tr><!-- END operation --></tbody></table></div></div></div>';this.listeVirementVide='<div id="contenu"><div class="com-widget-window ui-widget ui-widget-content ui-corner-all"><div class="com-widget-header ui-widget ui-widget-header ui-corner-all">Liste des virements</div><p id="texte-liste-vide">Aucun Virement effectué.</p></div></div>';this.montantDebit='<span class="montant">{debit}</span> {sigleMonetaire}';this.montantCredit='<span class="montant">{credit}</span> {sigleMonetaire}';this.btnEdt='<span class="com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-edt-modifier" title="Modifier"><span class="ui-icon ui-icon-pencil"></span>';this.btnSup='<span class="com-cursor-pointer com-btn-header ui-widget-content ui-corner-all btn-edt-supprimer" title="Supprimer"><span class="ui-icon ui-icon-closethick"></span>';this.dialogModifVirement='<div id="dialog-ajout-virement" title="Virement Solidaire"><form><table class="com-table-100"><tr><td>N° de compte : {label}</td></tr><tr class="com-center" ><td class="com-table-form-td montant-virement">Montant <input class="com-numeric com-input-text ui-widget-content ui-corner-all" type="text" name="montant" maxlength="12" id="montant" value="{montant}" /> {sigleMonetaire}</td></tr></table></form></div>';this.dialogSupVirement='<div id="dialog-ajout-virement" title="Supprimer un Virement"><form><table class="com-table-100"><tr><td>N° de compte : {label}</td></tr><tr class="com-center" ><td class="com-table-form-td montant-virement">Montant {montant} {sigleMonetaire}</td></tr></table></form></div>'}function CompteZeybuVue(a){this.mCommunVue=new CommunVue();this.construct=function(b){var c=this;$.post("./index.php?m=CompteZeybu&v=CompteZeybu",function(d){Infobulle.init();if(d.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.afficher(d)}else{Infobulle.generer(d,"")}},"json")};this.afficher=function(e){var d=this;if(e.soldeTotal!=null){e.soldeTotal=e.soldeTotal.nombreFormate(2,","," ")}else{e.soldeTotal="0".nombreFormate(2,","," ")}if(e.soldeCaisse!=null){e.soldeCaisse=e.soldeCaisse.nombreFormate(2,","," ")}else{e.soldeCaisse="0".nombreFormate(2,","," ")}if(e.soldeBanque!=null){e.soldeBanque=e.soldeBanque.nombreFormate(2,","," ")}else{e.soldeBanque="0".nombreFormate(2,","," ")}e.sigleMonetaire=gSigleMonetaire;$(e.operation).each(function(){if(this.opeDate!=null){this.opeDate=this.opeDate.extractDbDate().dateDbToFr();if(this.tppType==null){this.tppType=""}if(this.opeMontant<0){this.debit=(this.opeMontant*-1).nombreFormate(2,","," ")+" "+gSigleMonetaire;this.credit=""}else{this.debit="";this.credit=this.opeMontant.nombreFormate(2,","," ")+" "+gSigleMonetaire}}});var c=new CompteZeybuTemplate();if(e.operation.length>0&&e.operation[0].opeId!=null){var f=c.InfoCompte;var b=$(f.template(e));if(e.operation.length<31){b=this.masquerPagination(b)}else{b=this.paginnation(b)}$("#contenu").replaceWith(d.affect(b))}else{var f=c.listeOperationVide;$("#contenu").replaceWith(f.template(e))}};this.affect=function(b){b=this.mCommunVue.comHoverBtn(b);return b};this.paginnation=function(b){b.find("#table-operation").tablesorter({headers:{0:{sorter:false},1:{sorter:false},2:{sorter:false},3:{sorter:false},4:{sorter:false}}}).tablesorterPager({container:b.find("#content-nav-liste-operation"),positionFixed:false,size:30});return b};this.masquerPagination=function(b){b.find("#content-nav-liste-operation").hide();return b};this.construct(a)}function ListeVirementZeybuVue(a){this.mCommunVue=new CommunVue();this.modifVirement=[];this.construct=function(b){var c=this;var d={fonction:"listeVirement"};$.post("./index.php?m=CompteZeybu&v=Virements","pParam="+$.toJSON(d),function(e){Infobulle.init();if(e.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}c.afficher(e)}else{Infobulle.generer(e,"")}},"json")};this.afficher=function(e){var d=this;var c=new CompteZeybuTemplate();e.sigleMonetaire=gSigleMonetaire;$(e.operation).each(function(){if(this.opeDate!=null){d.modifVirement.push(this.opeId);this.opeDate=this.opeDate.extractDbDate().dateDbToFr();var g={};g.sigleMonetaire=gSigleMonetaire;if(this.opeMontant<0){g.debit=(this.opeMontant*-1).nombreFormate(2,","," ");this.debit=c.montantDebit.template(g);this.credit=""}else{this.debit="";g.credit=this.opeMontant.nombreFormate(2,","," ");this.credit=c.montantCredit.template(g)}}});if(e.operation.length>0&&e.operation[0].opeId!=null){var f=c.listeVirement;var b=$(f.template(e));if(e.operation.length<21){b=this.masquerPagination(b)}else{b=this.paginnation(b)}$("#contenu").replaceWith(d.affect(b))}else{$("#contenu").replaceWith(c.listeVirementVide)}};this.affect=function(b){b=this.ajoutModification(b);b=this.affectModification(b);b=this.affectSuppression(b);b=this.mCommunVue.comHoverBtn(b);return b};this.paginnation=function(b){b.find("#table-operation").tablesorter({headers:{0:{sorter:false},1:{sorter:false},2:{sorter:false},3:{sorter:false},4:{sorter:false},5:{sorter:false}}}).tablesorterPager({container:b.find("#content-nav-liste-operation"),positionFixed:false,size:20});return b};this.masquerPagination=function(b){b.find("#content-nav-liste-operation").hide();return b};this.ajoutModification=function(b){var c=new CompteZeybuTemplate();$(this.modifVirement).each(function(){b.find("#td-edt-"+this).html(c.btnEdt);b.find("#td-sup-"+this).html(c.btnSup)});return b};this.affectModification=function(b){var c=this;b.find(".btn-edt-modifier").click(function(){var g=$(this).parents("tr").find(".id-operation").text();var e=new CompteZeybuTemplate();var f=e.dialogModifVirement;var d={};d.label=$(this).parents("tr").find(".cpt-label").text();d.montant=$(this).parents("tr").find(".montant").text();d.sigleMonetaire=gSigleMonetaire;var h=$(c.affectDialog($(f.template(d)))).dialog({autoOpen:true,modal:true,draggable:false,resizable:false,width:450,buttons:{Valider:function(){c.modifierVirement(this,g)},Annuler:function(){$(this).dialog("close")}},close:function(i,j){$(this).remove()}});h.find("form").submit(function(){c.modifierVirement(h,g);return false})});return b};this.modifierVirement=function(b,d){var f=this;var c=new CompteZeybuModifierVirementVO();c.id=d;c.montant=$(b).find(":input[name=montant]").val().numberFrToDb();var e=new CompteZeybuVirementValid();var h=e.validUpdate(c);Infobulle.init();if(h.valid){c.fonction="modifier";var g=this;$.post("./index.php?m=CompteZeybu&v=Virements","pParam="+$.toJSON(c),function(j){Infobulle.init();if(j.valid){var l=new TemplateVR();l.valid=false;l.log.valid=false;var i=new VRerreur();i.code=ERR_308_CODE;i.message=ERR_308_MSG;l.log.erreurs.push(i);var k={vr:l};f.construct(k);$(b).dialog("close")}else{Infobulle.generer(j,"")}},"json")}else{Infobulle.generer(h,"")}};this.affectDialog=function(b){b=this.mCommunVue.comNumeric(b);return b};this.affectSuppression=function(b){var c=this;b.find(".btn-edt-supprimer").click(function(){var g=$(this).parents("tr").find(".id-operation").text();var e=new CompteZeybuTemplate();var f=e.dialogSupVirement;var d={};d.label=$(this).parents("tr").find(".cpt-label").text();d.montant=$(this).parents("tr").find(".montant").text();d.sigleMonetaire=gSigleMonetaire;var h=$(f.template(d)).dialog({autoOpen:true,modal:true,draggable:false,resizable:false,width:450,buttons:{Valider:function(){c.supprimerVirement(this,g)},Annuler:function(){$(this).dialog("close")}},close:function(i,j){$(this).remove()}});h.find("form").submit(function(){c.supprimerVirement(h,g);return false})});return b};this.supprimerVirement=function(b,d){var f=this;var c=new CompteZeybuSupprimerVirementVO();c.id=d;var e=new CompteZeybuVirementValid();var h=e.validDelete(c);Infobulle.init();if(h.valid){c.fonction="supprimer";var g=this;$.post("./index.php?m=CompteZeybu&v=Virements","pParam="+$.toJSON(c),function(j){Infobulle.init();if(j.valid){var l=new TemplateVR();l.valid=false;l.log.valid=false;var i=new VRerreur();i.code=ERR_309_CODE;i.message=ERR_309_MSG;l.log.erreurs.push(i);var k={vr:l};f.construct(k);$(b).dialog("close")}else{Infobulle.generer(j,"")}},"json")}else{Infobulle.generer(h,"")}};this.construct(a)}function VirementZeybuVue(a){this.mCommunVue=new CommunVue();this.listeAdherent=[];this.listeProducteur=[];this.construct=function(b){var c=this;var d={fonction:"afficher"};$.post("./index.php?m=CompteZeybu&v=Virements","pParam="+$.toJSON(d),function(e){Infobulle.init();if(e.valid){if(b&&b.vr){Infobulle.generer(b.vr,"")}$(e.listeAdherent).each(function(){c.listeAdherent[this.adhId]=this});$(e.listeProducteur).each(function(){c.listeProducteur[this.prdtId]=this});c.solde=e.solde;c.afficher(e)}else{Infobulle.generer(e,"")}},"json")};this.afficher=function(e){var d=this;var c=new CompteZeybuTemplate();var f=c.listeAdherent;var b=$(f.template(e));if(e.listeAdherent.length<=0||e.listeAdherent[0].adhId==null){b.find("#virement-adherent").replaceWith(c.listeAdherentVide)}if(e.listeProducteur.length<=0||e.listeProducteur[0].prdtId==null){b.find("#virement-producteur").replaceWith(c.listeProducteurVide)}$("#contenu").replaceWith(d.affect(b))};this.affect=function(b){b=this.affectTri(b);b=this.affectRecherche(b);b=this.affectTabs(b);b=this.mCommunVue.comHoverBtn(b);b=this.affectVirementSolidaire(b);b=this.affectVirement(b);return b};this.affectTabs=function(b){b.find("#virements").tabs();return b};this.affectTri=function(b){b.find(".com-table").tablesorter({sortList:[[0,0]],headers:{4:{sorter:false}}});return b};this.affectRecherche=function(b){b.find("#filter-producteur").keyup(function(){$.uiTableFilter($(".table-producteur"),this.value)});b.find("#filter-adherent").keyup(function(){$.uiTableFilter($(".table-adherent"),this.value)});b.find("#filter-form-producteur, #filter-form-adherent").submit(function(){return false});return b};this.affectVirementSolidaire=function(b){var c=this;b.find("#btn-virement-solidaire").click(function(){c.virementSolidaire(1)});b.find("#btn-virement-solidaire-inverse").click(function(){c.virementSolidaire(2)});return b};this.virementSolidaire=function(c){var e=this;var d=new CompteZeybuTemplate();var f=d.dialogVirementSolidaire;var b={};b.sigleMonetaire=gSigleMonetaire;b.type=2;if(c==1){b.cptDebit="Zeybu";b.cptCredit="Solidaire";b.idCptDebit=-1;b.idCptCredit=-2}else{b.cptDebit="Solidaire";b.cptCredit="Zeybu";b.idCptDebit=-2;b.idCptCredit=-1}var g=$(this.affectDialog($(f.template(b)))).dialog({autoOpen:true,modal:true,draggable:false,resizable:false,width:450,buttons:{Valider:function(){e.envoyerVirement(this,b)},Annuler:function(){$(this).dialog("close")}},close:function(h,i){$(this).remove()}});g.find("form").submit(function(){e.envoyerVirement(g,b);return false})};this.affectVirement=function(b){var c=this;b.find(".compte-ligne-adherent").each(function(){var d=$(this).find(".id-adherent").text();$(this).find(".btn-virement").click(function(){var e={};e.type=1;e.cptDebit="Zeybu";e.cptCredit=c.listeAdherent[d].cptLabel;e.idCptDebit=-1;e.idCptCredit=c.listeAdherent[d].adhIdCompte;c.virement(e)});$(this).find(".btn-virement-inverse").click(function(){var e={};e.type=1;e.cptDebit=c.listeAdherent[d].cptLabel;e.cptCredit="Zeybu";e.idCptDebit=c.listeAdherent[d].adhIdCompte;e.idCptCredit=-1;c.virement(e)})});b.find(".compte-ligne-producteur").each(function(){var d=$(this).find(".id-producteur").text();$(this).find(".btn-virement").click(function(){var e={};e.type=1;e.cptDebit="Zeybu";e.cptCredit=c.listeProducteur[d].cptLabel;e.idCptDebit=-1;e.idCptCredit=c.listeProducteur[d].prdtIdCompte;c.virement(e)});$(this).find(".btn-virement-inverse").click(function(){var e={};e.type=1;e.cptDebit=c.listeProducteur[d].cptLabel;e.cptCredit="Zeybu";e.idCptDebit=c.listeProducteur[d].prdtIdCompte;e.idCptCredit=-1;c.virement(e)})});return b};this.virement=function(b){var d=this;var c=new CompteZeybuTemplate();var e=c.dialogAjoutVirement;b.sigleMonetaire=gSigleMonetaire;var f=$(this.affectDialog($(e.template(b)))).dialog({autoOpen:true,modal:true,draggable:false,resizable:false,width:450,buttons:{Valider:function(){d.envoyerVirement(this,b)},Annuler:function(){$(this).dialog("close")}},close:function(g,h){$(this).remove()}});f.find("form").submit(function(){d.envoyerVirement(f,b);return false})};this.affectDialog=function(b){b=this.mCommunVue.comNumeric(b);return b};this.envoyerVirement=function(b,e){var c=new CompteZeybuAjoutVirementVO();c.idCptDebit=e.idCptDebit;c.idCptCredit=e.idCptCredit;c.type=e.type;c.montant=$(b).find(":input[name=montant]").val().numberFrToDb();var d=new CompteZeybuVirementValid();var g=d.validAjout(c);Infobulle.init();if(g.valid){c.fonction="ajout";var f=this;$.post("./index.php?m=CompteZeybu&v=Virements","pParam="+$.toJSON(c),function(i){Infobulle.init();if(i.valid){var j=new TemplateVR();j.valid=false;j.log.valid=false;var h=new VRerreur();h.code=ERR_307_CODE;h.message=ERR_307_MSG;j.log.erreurs.push(h);Infobulle.generer(j,"");$(b).dialog("close")}else{Infobulle.generer(i,"")}},"json")}else{Infobulle.generer(g,"")}};this.construct(a)};
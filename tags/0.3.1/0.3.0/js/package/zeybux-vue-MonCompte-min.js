function AfficherReservationVue(a){this.infoCommande=new Object();this.pdtCommande=new Array();this.reservation=new Array();this.reservationModif=new Array();this.construct=function(c){var b=this;$.post("./index.php?m=MonCompte&v=AfficherReservation","id_commande="+c,function(d){Infobulle.init();if(d.valid){b.infoCommande.comId=d.commande[0].comId;b.infoCommande.comNumero=d.commande[0].comNumero;b.infoCommande.comNom=d.commande[0].comNom;b.infoCommande.comDescription=d.commande[0].comDescription;b.infoCommande.dateTimeFinReservation=d.commande[0].comDateFinReservation;b.infoCommande.dateFinReservation=d.commande[0].comDateFinReservation.extractDbDate().dateDbToFr();b.infoCommande.heureFinReservation=d.commande[0].comDateFinReservation.extractDbHeure();b.infoCommande.minuteFinReservation=d.commande[0].comDateFinReservation.extractDbMinute();b.infoCommande.dateMarcheDebut=d.commande[0].comDateMarcheDebut.extractDbDate().dateDbToFr();b.infoCommande.heureMarcheDebut=d.commande[0].comDateMarcheDebut.extractDbHeure();b.infoCommande.minuteMarcheDebut=d.commande[0].comDateMarcheDebut.extractDbMinute();b.infoCommande.heureMarcheFin=d.commande[0].comDateMarcheFin.extractDbHeure();b.infoCommande.minuteMarcheFin=d.commande[0].comDateMarcheFin.extractDbMinute();b.infoCommande.comArchive=d.commande[0].comArchive;$(d.commande).each(function(){var f=new Object();f.dcomId=this.dcomId;f.dcomIdProduit=this.dcomIdProduit;f.dcomTaille=this.dcomTaille;f.dcomPrix=this.dcomPrix;if(b.pdtCommande[this.proId]){b.pdtCommande[this.proId].lot[f.dcomId]=f}else{var e=new Object();e.proId=this.proId;e.proUniteMesure=this.proUniteMesure;e.proMaxProduitCommande=this.proMaxProduitCommande;$(d.stock).each(function(){if(this.proId==e.proId){if(this.stoQuantite<e.proMaxProduitCommande){e.proMaxProduitCommande=this.stoQuantite}}});e.nproNom=this.nproNom;e.nproDescription=this.nproDescription;e.nproIdCategorie=this.nproIdCategorie;e.lot=new Array();e.lot[f.dcomId]=f;b.pdtCommande[e.proId]=e}});$(d.reservation).each(function(){this.stoQuantite=this.stoQuantite*-1;b.reservation[this.proId]=this});b.afficher()}else{Infobulle.generer(d,"")}},"json")};this.afficher=function(){this.afficherDetailReservation()};this.afficherDetailReservation=function(){var e=this;var b=new MonCompteTemplate();var f=b.detailReservation;var c=new Object();c.sigleMonetaire=gSigleMonetaire;c.comNumero=this.infoCommande.comNumero;c.dateFinReservation=this.infoCommande.dateFinReservation;c.heureFinReservation=this.infoCommande.heureFinReservation;c.minuteFinReservation=this.infoCommande.minuteFinReservation;c.dateMarcheDebut=this.infoCommande.dateMarcheDebut;c.heureMarcheDebut=this.infoCommande.heureMarcheDebut;c.minuteMarcheDebut=this.infoCommande.minuteMarcheDebut;c.heureMarcheFin=this.infoCommande.heureMarcheFin;c.minuteMarcheFin=this.infoCommande.minuteMarcheFin;c.reservation=new Array();var d=0;$(this.pdtCommande).each(function(){if(e.reservation[this.proId]){var g=new Object;g.nproNom=this.nproNom;g.stoQuantite=parseFloat(e.reservation[this.proId].stoQuantite);g.proUniteMesure=this.proUniteMesure;g.prix=0;$(this.lot).each(function(){if(g.stoQuantite%this.dcomTaille==0){g.prix=(g.stoQuantite/this.dcomTaille)*this.dcomPrix}});d+=g.prix;g.stoQuantite=g.stoQuantite.nombreFormate(2,","," ");g.prix=g.prix.nombreFormate(2,","," ");c.reservation.push(g)}});c.total=parseFloat(d).nombreFormate(2,","," ");$("#contenu").replaceWith(e.affect($(f.template(c))))};this.afficherModifier=function(){var e=this;var b=new MonCompteTemplate();var f=b.modifierReservation;var c={};c.sigleMonetaire=gSigleMonetaire;c.comNumero=this.infoCommande.comNumero;c.dateFinReservation=this.infoCommande.dateFinReservation;c.heureFinReservation=this.infoCommande.heureFinReservation;c.minuteFinReservation=this.infoCommande.minuteFinReservation;c.dateMarcheDebut=this.infoCommande.dateMarcheDebut;c.heureMarcheDebut=this.infoCommande.heureMarcheDebut;c.minuteMarcheDebut=this.infoCommande.minuteMarcheDebut;c.heureMarcheFin=this.infoCommande.heureMarcheFin;c.minuteMarcheFin=this.infoCommande.minuteMarcheFin;c.produit=new Array();var d=0;$(this.pdtCommande).each(function(){if(this.proId){var g={};g.proId=this.proId;g.nproNom=this.nproNom;g.proMaxProduitCommande=parseFloat(this.proMaxProduitCommande).nombreFormate(2,","," ");g.proUniteMesure=this.proUniteMesure;g.lot=new Array();var j=0;var h=-1;var k=-1;$(this.lot).each(function(){if(this.dcomId){var i={};i.dcomId=this.dcomId;i.dcomTaille=parseFloat(this.dcomTaille).nombreFormate(2,","," ");i.dcomPrix=parseFloat(this.dcomPrix).nombreFormate(2,","," ");i.prixReservation=parseFloat(this.dcomPrix);i.stoQuantiteReservation=parseFloat(this.dcomTaille);if(e.reservation[g.proId]&&(e.reservation[g.proId].stoQuantite%this.dcomTaille==0)){i.stoQuantiteReservation=parseFloat(e.reservation[g.proId].stoQuantite);i.prixReservation=(i.stoQuantiteReservation/this.dcomTaille)*this.dcomPrix;d+=i.prixReservation;h=this.dcomId;i.checked='checked="checked"'}i.stoQuantiteReservation=i.stoQuantiteReservation.nombreFormate(2,","," ");i.prixReservation=i.prixReservation.nombreFormate(2,","," ");g.lot.push(i)}});c.total=parseFloat(d).nombreFormate(2,","," ");if(h!=-1){g.checked='checked="checked"'}else{if(g.lot[0]){g.lot[0].checked='checked="checked"'}}c.produit.push(g)}});this.reservationModif=new Array();$(this.reservation).each(function(){if(this.proId){e.reservationModif[this.proId]={comId:this.comId,proId:this.proId,stoId:this.stoId,stoQuantite:this.stoQuantite,stoType:this.stoType,stoIdCompte:this.stoIdCompte}}});$("#contenu").replaceWith(e.affectModifier($(f.template(c))))};this.affect=function(b){b=this.affectDroitEdition(b);b=this.affectModifierReservation(b);return b};this.affectDroitEdition=function(b){if(!dateTimeEstPLusGrandeEgale(this.infoCommande.dateTimeFinReservation,getDateTimeAujourdhuiDb(),"db")){b.find(".boutons-edition").hide()}return b};this.affectModifier=function(b){b=this.affectBtnQte(b);b=this.affectChangementLot(b);b=this.affectChangementProduit(b);b=this.preparerAffichageModifier(b);b=this.affectValiderReservation(b);b=this.affectAnnulerReservation(b);return b};this.affectBtnQte=function(b){var c=this;b.find(".btn-plus").click(function(){c.nouvelleQuantite($(this).parent().parent().find(".pdt-id").text(),$(this).parent().parent().find(".lot-id").text(),1)});b.find(".btn-moins").click(function(){c.nouvelleQuantite($(this).parent().parent().find(".pdt-id").text(),$(this).parent().parent().find(".lot-id").text(),-1)});return b};this.affectChangementLot=function(b){var c=this;b.find(".lot").click(function(){$(this).find(":radio").attr("checked","checked");c.changerLot($(this).find(".pdt-id").text(),$(this).find(".lot-id").text())});return b};this.affectChangementProduit=function(b){var c=this;b.find(".pdt :checkbox").click(function(){c.changerProduit($(this).parent().parent().find(".pdt-id").text())});return b};this.affectValiderReservation=function(b){var c=this;b.find("#btn-valider").click(function(){c.validerReservation()});return b};this.affectAnnulerReservation=function(b){var c=this;b.find("#btn-annuler").click(function(){c.afficherDetailReservation()});return b};this.affectModifierReservation=function(b){var c=this;b.find("#btn-modifier").click(function(){c.afficherModifier()});return b};this.nouvelleQuantite=function(f,i,b){var g=this.pdtCommande[f].proMaxProduitCommande;var j=this.pdtCommande[f].lot[i].dcomTaille;var h=this.pdtCommande[f].lot[i].dcomPrix;var d=0;if(this.reservationModif[f]&&(this.reservationModif[f].stoQuantite%j==0)){d=this.reservationModif[f].stoQuantite/j}d+=b;var c=0;c=d*j;if(c>0&&c<=g){var e=0;e=d*h;this.reservationModif[f].stoQuantite=c;$("#qte-pdt-"+f+"-lot-"+i).text(parseFloat(c).nombreFormate(2,","," "));$("#prix-pdt-"+f+"-lot-"+i).text(parseFloat(e).nombreFormate(2,","," "));this.majTotal()}};this.changerLot=function(b,c){$(".btn-pdt-"+b).attr("disabled","disabled").addClass("ui-helper-hidden");$(".colonne-pdt-"+b).addClass("ui-helper-hidden");$("#btn-moins-lot-"+c+",#btn-plus-lot-"+c).removeAttr("disabled").removeClass("ui-helper-hidden");$("#colonne-qte-pdt-"+b+"-lot-"+c+",#colonne-prix-pdt-"+b+"-lot-"+c+",#colonne-sigle-pdt-"+b+"-lot-"+c).removeClass("ui-helper-hidden");this.reservationModif[b].stoQuantite=$("#qte-pdt-"+b+"-lot-"+c).text().numberFrToDb();this.majTotal()};this.changerProduit=function(b){var c=this;if($("#pdt-"+b).find(":checkbox").attr("checked")){$(".lot-pdt-"+b).show();$("[name=lot-produit-"+b+"]").each(function(){if($(this).attr("checked")){var e=$("#qte-pdt-"+b+"-lot-"+$(this).parent().parent().find(".lot-id").text()).text().numberFrToDb();if(c.reservationModif[b]){c.reservationModif[b].stoQuantite=e}else{var d={};d.comId=c.infoCommande.comId;d.proId=b;d.stoQuantite=e;c.reservationModif[b]=d}}})}else{$(".lot-pdt-"+b).hide();if(this.reservationModif[b]){this.reservationModif[b]=null}}this.majTotal()};this.majTotal=function(){$("#total").text(this.calculTotal().nombreFormate(2,","," "))};this.calculTotal=function(){var c=this;var b=0;$(this.reservationModif).each(function(){var d=this;if(d.stoQuantite){if(c.pdtCommande[d.proId]){$(c.pdtCommande[d.proId].lot).each(function(){if(d.stoQuantite%this.dcomTaille==0){b+=(d.stoQuantite/this.dcomTaille)*this.dcomPrix}})}}});return b};this.preparerAffichageModifier=function(b){var c=this;b.find(":checkbox:not(:checked)").each(function(){b.find(".lot-pdt-"+$(this).parent().parent().find(".pdt-id").text()).hide()});b.find(":radio:not(:checked)").each(function(){var e=$(this).parent().parent().find(".lot-id").text();var d=$(this).parent().parent().find(".pdt-id").text();b.find("#btn-moins-lot-"+e+",#btn-plus-lot-"+e).attr("disabled","disabled").addClass("ui-helper-hidden");b.find("#colonne-qte-pdt-"+d+"-lot-"+e+",#colonne-prix-pdt-"+d+"-lot-"+e+",#colonne-sigle-pdt-"+d+"-lot-"+e).addClass("ui-helper-hidden")});return b};this.validerReservation=function(){var e=this;Infobulle.init();var c=new ListeReservationCommandeVO();var f=0;$(this.reservationModif).each(function(){if(this.stoQuantite){var h=new ReservationCommandeVO();h.id="";h.stoQuantite=this.stoQuantite*-1;h.stoIdProduit=this.proId;c.commandes.push(h);f++}});if(f>0){var d=new ListeReservationCommandeValid();var g=d.validAjout(c);if(!g.valid){Infobulle.generer(g,"")}else{$.post("./index.php?m=MonCompte&v=AfficherReservation","reservation="+$.toJSON(c),function(h){Infobulle.init();if(h.valid){e.reservation=new Array();$(e.reservationModif).each(function(){if(this.proId){e.reservation[this.proId]={comId:this.comId,proId:this.proId,stoId:this.stoId,stoQuantite:this.stoQuantite,stoType:this.stoType,stoIdCompte:this.stoIdCompte}}});e.afficher()}else{Infobulle.generer(h,"")}},"json")}}else{var g=new TemplateVR();g.valid=false;g.log.valid=false;var b=new VRerreur();b.code=ERR_207_CODE;b.message=ERR_207_MSG;g.log.erreurs.push(b);Infobulle.generer(g,"")}};this.construct(a)}function ListeReservationVue(){this.construct=function(){var a=this;$.post("./index.php?m=MonCompte&v=ListeReservation",function(b){Infobulle.init();if(b.valid){a.afficher(b)}else{Infobulle.generer(b,"")}},"json")};this.afficher=function(c){var b=this;var e=new Object;e.reservation=new Array();$(c.reservations).each(function(){if(this.comNumero!=null){var f=new Object();f.numero=this.comNumero;f.dateFinReservation=this.comDateFinReservation.extractDbDate().dateDbToFr();f.heureFinReservation=this.comDateFinReservation.extractDbHeure();f.minuteFinReservation=this.comDateFinReservation.extractDbMinute();f.dateMarcheDebut=this.comDateMarcheDebut.extractDbDate().dateDbToFr();f.heureMarcheDebut=this.comDateMarcheDebut.extractDbHeure();f.minuteMarcheDebut=this.comDateMarcheDebut.extractDbMinute();f.heureMarcheFin=this.comDateMarcheFin.extractDbHeure();f.minuteMarcheFin=this.comDateMarcheFin.extractDbMinute();f.idCommande='"'+this.comId+'"';e.reservation.push(f)}});var a=new MonCompteTemplate();if(e.reservation.length>0){var d=a.listeReservation}else{var d=a.listeReservationVide}$("#contenu").replaceWith(b.affect($(d.template(e))))};this.affect=function(a){a=this.affectVisualiser(a);return a};this.affectVisualiser=function(a){a.find(".visualiser-reservation").click(function(){AfficherReservationVue($(this).attr("id"))});return a}};
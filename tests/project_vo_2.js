// BiblioJS
const prompt = require('prompt-sync')();
// menu fonction 
function menu(){
    console.log("--------------------------------------------------\n-------------------- BiblioJS --------------------\n--------------------------------------------------\nMenu :\n--------------------------------------------------\n1. Introduire un livre\n--------------------------------------------------\n2. Ajouter plusieurs livres\n--------------------------------------------------\n3. Opérations sur les livres\n--------------------------------------------------\n   3.1 Afficher tous les livres\n--------------------------------------------------\n   3.2 Trier les livres par titre (A-Z / Z-A)\n--------------------------------------------------\n   3.3 Trier les livres par année de publication\n--------------------------------------------------\n   3.4 Afficher uniquement les livres disponibles\n--------------------------------------------------\n   3.5 Rechercher un livre par ID\n--------------------------------------------------\n4. Gestion des abonnés\n--------------------------------------------------\n   4.1 Ajouter un abonné\n--------------------------------------------------\n   4.2 Afficher tous les abonnés\n--------------------------------------------------\n5. Gestion des emprunts\n--------------------------------------------------\n   5.1 Enregistrer un emprunt\n--------------------------------------------------\n   5.2 Enregistrer un retour\n--------------------------------------------------\n   5.3 Afficher les livres empruntés par un abonné\n--------------------------------------------------\n 6. Quitter l'application\n--------------------------------------------------")
    let choix = Number(prompt("Veuillez choisir une option :"));
    return choix;
}
// Introduire un livre
function introduire(livres) {
    let id_livre = prompt("Entrez l'id du livre :").trim();
    let livre = livres.find((element) => element.id_livre == id_livre);
    if(livre) {
        console.log("L'ID que vous avez entré existe déjà !!!!!");
    }else{
        let titre = prompt("Entrez le titre du livre :");
        let auteur = prompt("Entrez le nom de l'auteur :");
        let annee = prompt("Entrez l'année de publication :");
        let disponible = prompt("Disponible (oui/non) :");
        livres.push({
            id_livre: id_livre,
            titre: titre,
            auteur: auteur,
            annee: annee,
            disponible: disponible == 'oui' ? true : false
        });
        console.log("Le livre a été ajouté avec succès !");
    }
}
// Ajouter plusieurs livres
function ajouter_plusieurs(livres){
    console.log("--------------------------------------------------");
    let nbl = parseInt(prompt("Combien de livres voulez-vous ajouter ? :"));
    for (let i = 0; i < nbl ; i++) {
        console.log(`\n-------------------- Livre ${i + 1} --------------------\n`);
        introduire(livres);       
    }
    console.log(`\n✅ ${nbl} livre(s) ajouté(s) avec succès !`);
}
// fonction pour l'affichage les livres
function affichager_livres(livres){
    livres.map((element)=>console.log("----------------------------------------------------------------------------------------------------\nid_livre :",element.id_livre,"titre :",element.titre,"auteur :",element.auteur,"l'Année de publication  :",element.annee));
    console.log("----------------------------------------------------------------------------------------------------");
}
// Opérations sur les livres 
function operations_livres(livres){
    let operations
    do{
        console.log("----------- Opérations sur les livres ----------- \n--------------------------------------------------\n1. Afficher tous les livres\n--------------------------------------------------\n2. Trier par titre (A-Z)\n--------------------------------------------------\n3. Trier par année de publication\n--------------------------------------------------\n4. Afficher uniquement les livres disponibles\n--------------------------------------------------\n5. Rechercher un livre par ID\n--------------------------------------------------\n6. Retour au menu principal\n--------------------------------------------------\n")
        operations = Number(prompt("Entrez une operation : "));
        console.log("\n--------------------------------------------------");
        switch(operations){
            case 1 :
                // afficher tous les livres
                affichager_livres(livres)
                break
            case 2 :
                // Trier par titre (A-Z)
                console.log("--------------------------------------------------\n1.Pour un order ascendant \n--------------------------------------------------\n2.Pour un order descendant\n--------------------------------------------------");
                let ordre = Number(prompt("Entrer votre choix : "));
                console.log("--------------------------------------------------\n");
                let sortedLivres;
                if (ordre == 1){
                    sortedLivres = livres.sort((a, b) => a.titre.toLowerCase().localeCompare(b.titre.toLowerCase()));
                } else if (ordre == 2) {
                    sortedLivres = livres.sort((a, b) => b.titre.toLowerCase().localeCompare(a.titre.toLowerCase()));
                } else {
                    console.log("Choix invalide ! Tri ascendant par défaut.");
                    sortedLivres = livres.sort((a, b) => a.titre.toLowerCase().localeCompare(b.titre.toLowerCase()));
                }
                affichager_livres(sortedLivres);
                break;
            case 3:
                // Trier par anne 
                let sortedLivres_par_anne = livres.sort((a, b) => a.annee - b.annee);
                affichager_livres(sortedLivres_par_anne);
                break;
            case 4:
                // Afficher uniquement les livres disponibles
                let livres_disponibles = livres.filter((element)=> element.disponible)
                affichager_livres(livres_disponibles);
                break
            case 5:
                // Rechercher un livre par ID_livre
                let id_livre = prompt("Entrer l'id de livre chercher :");
                let livre_cherecher = livres.find((element)=>element.id_livre == id_livre);
                if(livre_cherecher){
                    console.log("--------------------------------------------------\n le livre tu charche : \n--------------------------------------------------");
                    affichager_livres([livre_cherecher]);
                }else{
                    console.log("--------------------------------------------------\n le livre tu charche n'existe pas \n--------------------------------------------------");
                }
                break
            case 6 :
                console.log("--------------------------------------------------");
                break
            default :
                console.log('Invalid choix');
        }
    }while(operations != 6)
}
//  Gestion des abonnés
// afficher abonnes 
function affichager_abonnes(abonnes){
    abonnes.map((element)=>console.log("----------------------------------------------------------------------------------------------------\nid abonne :",element.id," ,Nom :",element.nom,",Prenom :",element.prenom," ,email  :",element.email));
    console.log("----------------------------------------------------------------------------------------------------");
}
// ajouter un abonne:
function ajouterAbonne(abonnes) {
    let id = abonnes.length + 1; 
    let nom = prompt("Entrez le nom de l'abonné : ");
    let prenom = prompt("Entrez le prénom de l'abonné : ");
    let email = prompt("Entrez l'email de l'abonné : ");
    let abonne = {
        id: id,
        nom: nom,
        prenom: prenom,
        email: email
    };
    return abonne
}

function gestion_abonnes(abonnes){
    let choix ;
    do{
        console.log("-------------- Gestion des abonnés ---------------\n--------------------------------------------------\n1. Ajouter un abonné\n--------------------------------------------------\n2 Afficher tous les abonnés\n--------------------------------------------------\n3.Retour au menu principal\n--------------------------------------------------")
        choix = Number(prompt("Quelle est votre choix :"))
        console.log("--------------------------------------------------\n");
        switch(choix){
            case 1 :
                let abonne = ajouterAbonne(abonnes)
                abonnes.push(abonne);
                console.log("Abonné ajouté avec succès !");
                break
            case 2 :
                affichager_abonnes(abonnes)
                break
            case 3 :
                console.log("--------------------------------------------------");
                break
            default : 
                console.log('Invalid choix');
    }
    }while(choix != 3)
}
//  Gestion des emprunts
// Enregistrer un emprunt 
function enregistrer_emprunt(abonnes,livres,emprunts){
    let abonneId ;
    let abonne ;
    do {
        abonneId = Number(prompt("Entrer l'abonné id :"));
        abonne = abonnes.find((element) => element.id === abonneId);
        if (!abonne) {
            console.log("--------------------------------------------------\nL'abonné avec l'id :", abonneId, "n'existe pas. Réessayez !\n--------------------------------------------------");
        }
    } while (!abonne);
    
    let id_livre ;
    let livre ;
    do {
        id_livre = Number(prompt("Entrer l'id du livre :"));
        livre = livres.find(element => Number(element.id_livre) == id_livre);
        if (!livre) {
            console.log("--------------------------------------------------\nLe livre avec l'id :", id_livre, "n'existe pas. Réessayez !\n--------------------------------------------------");
        } else if (!livre.disponible) {
            console.log("--------------------------------------------------\nLe livre", livre.titre, "est déjà emprunté. Choisissez un autre livre !\n--------------------------------------------------");
            livre = null; 
        }
    } while (!livre);
    livre.disponible = false
    let dateEmprunt =  new Date().toISOString().split("T")[0];
    let emprunt = {
        abonneId : abonneId,
        id_livre : id_livre,
        dateEmprunt :dateEmprunt
    }
    console.log(`--------------------------------------------------\nEmprunt enregistré : ${abonne.nom} a emprunté "${livre.titre}" le ${dateEmprunt}\n--------------------------------------------------`);
    emprunts.push(emprunt);
}
// Enregistrer un retour
function enregistrer_retour(livres,emprunts){
    let emprunt;
    let abonneId;
    let id_livre;
    do{
        abonneId = Number(prompt("Entrer l'abonné id :"));
        id_livre = Number(prompt("Entrer l'id du livre :"));
        emprunt = emprunts.find((element)=> element.abonneId == abonneId && element.id_livre == id_livre);
        if(!emprunt){
            console.log("--------------------------------------------------\nL'emprunt n'existe pas\n--------------------------------------------------");
        }
    }while(!emprunt)
    
    const index = emprunts.findIndex(element => element.abonneId == abonneId && element.id_livre == id_livre);
    emprunts.splice(index, 1);
    
    livres.find((element)=> Number(element.id_livre) == id_livre).disponible = true;
    console.log("--------------------------------------------------\nRetour ajouté avec succès !\n--------------------------------------------------");
}
// Afficher les livres empruntés par un abonné
function afficher_livres_empruntes(abonnes, livres, emprunts) {
    let abonneId = prompt("Entrer l'ID de l'abonné : ");
    let abonne = abonnes.find(a => String(a.id) === abonneId);
    if (!abonne) {
        console.log(`--------------------------------------------------\nAucun abonné trouvé avec l'ID ${abonneId}\n--------------------------------------------------`);
        return;
    }
    // Trouver tous les emprunts de cet abonné
    let empruntsAbonne = emprunts.filter(e => String(e.abonneId) === abonneId);
    if (empruntsAbonne.length === 0) {
        console.log(`--------------------------------------------------\nℹ ${abonne.prenom} ${abonne.nom} n'a emprunté aucun livre.\n--------------------------------------------------`);
        return;
    }
    console.log(`--------------------------------------------------\nLivres empruntés par ${abonne.prenom} ${abonne.nom} (ID: ${abonne.id}):\n--------------------------------------------------`);
    empruntsAbonne.forEach(e => {
        let livre = livres.find(l => String(l.id_livre) === String(e.id_livre));
        if (livre) {
            console.log(`- ${livre.titre} (${livre.auteur}, ${livre.annee}) | Emprunté le: ${e.dateEmprunt}`);
        }
    });
    console.log("--------------------------------------------------");
}

// BiblioJS fonction 
function biblioJS_fonction(){
    let livres = [
        { id_livre: "123", titre: "Le Petit Prince", auteur:"Saint-Exupéry", annee: 1943, disponible: true },
        { id_livre: "456", titre: "L'Étranger", auteur: "Camus", annee:1942, disponible: true },
        { id_livre: "339", titre: "Song of fire and ice", auteur: "j.R.R.Martin", annee:2000, disponible: true },
        { id_livre: "334", titre: "the hobbite", auteur: "J. R. R.Tolkien", annee: 1937, disponible: true }
    ]
    let abonnes = [
        { id: 1, nom: "Dupont", prenom: "Alice", email: "alice@mail.com" },
        { id: 2, nom: "Martin", prenom: "Bob", email: "bob@mail.com" },
        { id: 3, nom: "Bernard", prenom: "Charlie", email: "charlie@mail.com" }
    ];
    let emprunts = [];
    let choix;
    do{
        choix = menu();
        switch(choix){
            case 1 :
                introduire(livres);
                break;
            case 2 :
                ajouter_plusieurs(livres);
                break;
            case 3 :
                operations_livres(livres);
                break;
            case 4 : 
                gestion_abonnes(abonnes);
                break;
            case 5:
                let choixEmprunt
                do{
                    console.log("-------------- Gestion des emprunts --------------\n--------------------------------------------------\n1. Enregistrer un emprunt\n--------------------------------------------------\n2. Enregistrer un retour\n--------------------------------------------------\n3. Afficher les livres empruntés par un abonné\n--------------------------------------------------\n4. Retour au menu principal\n--------------------------------------------------");
                    choixEmprunt = Number(prompt("Quelle est votre choix :"));
                    console.log("--------------------------------------------------\n");
                    switch(choixEmprunt){
                        case 1:
                            enregistrer_emprunt(abonnes, livres, emprunts);
                            break;
                        case 2:
                            enregistrer_retour(livres, emprunts);
                            break;
                        case 3:
                            afficher_livres_empruntes(abonnes, livres, emprunts);
                            break;
                        case 4:
                            console.log("--------------------------------------------------");
                            break;
                        default:
                            console.log("Invalid choix !");
                        }
                    }while(choixEmprunt != 4)
                break;
            case 6:
                console.log("--------------------------------------------------\nMerci d'avoir utilisé BiblioJS !\n--------------------------------------------------");
                break;
            default:
                console.log("--------------------------------------------------\nInvalid choix !\n--------------------------------------------------");
        }
    }while(choix != 6)
}
biblioJS_fonction()
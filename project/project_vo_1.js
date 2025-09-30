// BiblioJS
const prompt = require('prompt-sync')();
let livres = [
    { id_livre: "123", titre: "Le Petit Prince", auteur:"Saint-Exupéry", annee: 1943, disponible: true },
    { id_livre: "456", titre: "L'Étranger", auteur: "Camus", annee:1942, disponible: true }
]
// menu fonction 
function menu(){
    console.log("--------------------------------------------------\n-------------------- BiblioJS --------------------\n--------------------------------------------------\nMenu :\n--------------------------------------------------\n1. Introduire un livre\n--------------------------------------------------\n2. Ajouter plusieurs livres\n--------------------------------------------------\n3. Opérations sur les livres\n--------------------------------------------------\n   3.1 Afficher tous les livres\n--------------------------------------------------\n   3.2 Trier les livres par titre (A-Z / Z-A)\n--------------------------------------------------\n   3.3 Trier les livres par année de publication\n--------------------------------------------------\n   3.4 Afficher uniquement les livres disponibles\n--------------------------------------------------\n   3.5 Rechercher un livre par ID\n--------------------------------------------------\n4. Gestion des abonnés\n--------------------------------------------------\n   4.1 Ajouter un abonné\n--------------------------------------------------\n   4.2 Afficher tous les abonnés\n--------------------------------------------------\n5. Gestion des emprunts\n--------------------------------------------------\n   5.1 Enregistrer un emprunt\n--------------------------------------------------\n   5.2 Enregistrer un retour\n--------------------------------------------------\n   5.3 Afficher les livres empruntés par un abonné\n--------------------------------------------------\n 6. Quitter l'application\n--------------------------------------------------")
    let choix = Number(prompt("Veuillez choisir une option :"));
    return choix;
}
// Introduire un livre
function introduire(){
    let id_livre = prompt("Entrez l'id du livre :");
    let titre = prompt("Entrez vous le titre du livre :")
    let auteur = prompt("Entrez vous le nom de l'auteur :")
    let annee = prompt("Entrez vous l'Année de publication : ")
    let disponible = prompt("Disponible (oui/non) :")
    return {id_livre : id_livre , titre : titre, auteur : auteur, annee : annee , disponible : disponible == 'oui' ? true : false}
}
// Ajouter plusieurs livres
function ajouter_plusieurs(livres){
    console.log("--------------------------------------------------");
    let nbl = parseInt(prompt("Combien de livres voulez-vous ajouter ? :"));
    for (let i = 0; i < nbl; i++) {
        console.log(`\n-------------------- Livre ${i + 1} --------------------\n`);
        let livre = introduire(); 
        livres.push(livre);      
    }
    console.log(`\n✅ ${nbl} livre(s) ajouté(s) avec succès !`);
}
// Opérations sur les livres 
function operations_livres(livres){
    let operations
    do{
        console.log("----------- Opérations sur les livres ----------- \n--------------------------------------------------\n1. Afficher tous les livres\n--------------------------------------------------\n2. Trier par titre (A-Z)\n--------------------------------------------------\n3. Trier par année de publication\n--------------------------------------------------\n4. Afficher uniquement les livres disponibles\n--------------------------------------------------\n5. Rechercher un livre par ID\n--------------------------------------------------\n6. Retour au menu principal\n--------------------------------------------------\n")
        operations = Number(prompt("Entrez une operation : "));
        switch(operations){
            case 1 :
                // afficher tous les livres
                livres.map((element)=>console.log("id_livre :",element.id_livre,"titre :",element.titre,"auteur :",element.auteur,"l'Année de publication  :",element.annee));
                break
            case 2 :
                // Trier par titre (A-Z)
                let ordre = Number(prompt("Entrer votre choix : "));
                // Tri selon le choix
                let sortedLivres;
                if (ordre == 1) {
                    sortedLivres = livres.sort((a, b) => a.titre.toLowerCase().localeCompare(b.titre.toLowerCase()));
                } else if (ordre == 2) {
                    sortedLivres = livres.sort((a, b) => b.titre.toLowerCase().localeCompare(a.titre.toLowerCase()));
                } else {
                    console.log("Choix invalide ! Tri ascendant par défaut.");
                    sortedLivres = livres.sort((a, b) => a.titre.toLowerCase().localeCompare(b.titre.toLowerCase()));
                }
                sortedLivres.map((element)=>console.log("id_livre :",element.id_livre,"titre :",element.titre,"auteur :",element.auteur,"l'Année de publication  :",element.annee));
                break;
            case 3:
                // Trier par année de publication
            default :
                console.log('Invalid choix');
                
        }
    }while(operations != 6)
}

//menu()
//ajouter_plusieurs(livres)
operations_livres(livres);
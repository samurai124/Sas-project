const prompt = require('prompt-sync')();

// let livres = [
//     { id_livre: "123", titre: "Le Petit Prince", auteur:"Saint-Exupéry", annee: 1943, disponible: true },
//     { id_livre: "456", titre: "L'Étranger", auteur: "Camus", annee:1942, disponible: false },
//     { id_livre: "339", titre: "Song of fire and ice", auteur: "j.R.R.Martin", annee:2000, disponible: true },
//     { id_livre: "334", titre: "the hobbite", auteur: "J. R. R.Tolkien", annee: 1937, disponible: true }
// ]
// let abonnes = [
//     { id: 1, nom: "Dupont", prenom: "Alice", email: "alice@mail.com" },
//     { id: 2, nom: "Dupont", prenom: "Alice", email: "alice@mail.com" },
//     { id: 3, nom: "Dupont", prenom: "Alice", email: "alice@mail.com" }
// ];
// let emprunts = [];
// function enregistrer_emprunt(abonnes,livres,emprunts){
//     let abonneId ;
//     let abonne ;
//     do {
//         abonneId = Number(prompt("Entrer l'abonné id :"));
//         abonne = abonnes.find((element) => element.id === abonneId);
//         if (!abonne) {
//             console.log(" L'abonné avec l'id :", abonneId, "n'existe pas. Réessayez !");
//         }
//     } while (!abonne);
    
//     let id_livre ;
//     let livre ;
//     do {
//         id_livre = Number(prompt("Entrer l'id du livre :"));
//         livre = livres.find(element => Number(element.id_livre) == id_livre);
//         if (!livre) {
//             console.log("Le livre avec l'id :", id_livre, "n'existe pas. Réessayez !");
//         } else if (!livre.disponible) {
//             console.log("Le livre", livre.titre, "est déjà emprunté. Choisissez un autre livre !");
//             livre = null; 
//         }
//     } while (!livre);
//     livre.disponible = false
//     let dateEmprunt =  new Date().toISOString().split("T")[0];
//     let emprunt = {
//         abonneId : abonneId,
//         id_livre : id_livre,
//         dateEmprunt :dateEmprunt
//     }
//     console.log(`Emprunt enregistré : ${abonne.nom} a emprunté "${livre.titre}" le ${dateEmprunt}`);
//     emprunts.push(emprunt);
// }

// enregistrer_emprunt(abonnes,livres,emprunts)
// console.log(emprunts);
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


let livres = [
        { id_livre: "123", titre: "Le Petit Prince", auteur:"Saint-Exupéry", annee: 1943, disponible: true },
        { id_livre: "456", titre: "L'Étranger", auteur: "Camus", annee:1942, disponible: true },
        { id_livre: "339", titre: "Song of fire and ice", auteur: "j.R.R.Martin", annee:2000, disponible: true },
        { id_livre: "334", titre: "the hobbite", auteur: "J. R. R.Tolkien", annee: 1937, disponible: true }
    ]

introduire(livres);
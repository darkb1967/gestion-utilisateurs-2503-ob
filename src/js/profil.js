//importer class de sauvegarde et restauration du fichier utilisateurs
import { JsonData } from "./fetch.js";

let utilisateurs = await JsonData.getUtilisateurs();

// obtenir les buttons
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const searchButton = document.getElementById('searchvalid');
const search = document.getElementById('search');

// variable de la page profil
const fieldNumber = document.getElementById('fieldnumber');
const inputNom = document.getElementById('pfname');
const inputPrenom = document.getElementById('plname');
const inputEmail = document.getElementById('pemail');
const inputRole = document.getElementById('prole');

// icrementation element profil
let element=0;

// variable envois résultat dans une variable
const result = document.getElementById('result');

// rechercher un utilisateur
searchButton.addEventListener('click', function(event){

    event.preventDefault();

    const rsearch = search.value;
    //let nameFilter = utilisateurs.filter((util) => util.Nom === rsearch);
    let nameObject =Object.entries(utilisateurs).filter(item => item.Nom === rsearch);

    console.log("recherche du mot = "+rsearch+" et trouve Object.entries(utilisateurs) = "+nameObject);
    console.log("--------------------------------------");

    //filter from utilisateurs 
    let nameFilter =utilisateurs.filter(item => item.Nom.matchAll(rsearch));

    console.log("recherche du mot = "+rsearch+" et trouve utilisateurs.filter(item => item.Nom) = "+nameFilter);
    console.log("--------------------------------------");

    console.log("Object.key = "+Object.keys(utilisateurs));
    console.log("--------------------------------------");

    let util = Object.values(utilisateurs);
    console.log("Object.values = "+util);
    console.log("--------------------------------------");

    console.log("Object.entries = "+Object.entries(utilisateurs));
    console.log("--------------------------------------");

    // filterText function
    const filterText =(arr, requete) => {
        return arr.filter(
            (el) => el.indexOf(requete) !==-1,
        );
    };
    console.log("filterText(utilisateurs, rsearch) = "+filterText(utilisateurs, rsearch));
    console.log("--------------------------------------");

    //..  #todo: startWith()
    for (let i in utilisateurs){ 
            
        if (utilisateurs[i].Nom.toLowerCase() === rsearch.toLowerCase()){
           console.log("nom du for in = "+rsearch+" utilisateur = "+utilisateurs[i].Nom);
            element = i;
            console.log('objectkeys de element = '+element);

            rempliChamp();
        }
        
    };

    console.log("--------------------------------------");

    // a ajouter .starwith .tolowercase
    utilisateurs.forEach(function (item) {
        if (item.Nom.toLowerCase() === rsearch.toLowerCase()) {
           console.log("trouvé for each = ", item);}
    });
    console.log("--------------------------------------");

    });


// click sur increment
increment.addEventListener('click', function(event){
        
    event.preventDefault();

    rempliChamp();

    let last = Object.keys(utilisateurs)[Object.keys(utilisateurs).length -1];

    // incrementation du tableau !!
    element++;

    if(element > last){
        fieldNumber.innerHTML = "dernier élément";
        element=last;}
});

// click sur decrement
decrement.addEventListener('click', function(event){

    event.preventDefault();
    
    rempliChamp();

    // decrementation du tableau !!
    element--;

    if(element < 0){
        fieldNumber.innerHTML = "début de liste";
        element=0;
    }
});

function rempliChamp(){

    fieldNumber.innerHTML = element;
    inputNom.value = utilisateurs[element].Nom;
    inputPrenom.value = utilisateurs[element].Prenom;
    inputEmail.value = utilisateurs[element].Email;
    inputRole.value = utilisateurs[element].Role;

}

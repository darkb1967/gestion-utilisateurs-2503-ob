//import "./header";
//import {createFooter} from "./footer";

/* variable tableau classique avec json */
const tableBody = document.querySelector("#tablejson tbody");

// variable d'ajout role et sa description
const nrole = document.getElementById('nrole');
const descrip = document.getElementById('descrip');

// variable envois résultat dans une variable
const result = document.getElementById('result');

// icrementation element profil
let element=0;

// variable de la page profil
const inputNom = document.getElementById('pfname');
const inputPrenom = document.getElementById('plname');
const inputEmail = document.getElementById('pemail');
const inputRole = document.getElementById('prole');

// table json dans fichier js
const jsonData =[
    {   "Role":"Invité",
        "Description":["sidentifier", "créer un compte si code", "réinitialiser mot de passe"]
    },
    {   "Role":"Usager",
        "Description":["consulter son profil", "modifier son profil", "parcourir la liste des utilisateurs","se déconnecter"]
    },
    {   "Role":"Encadrant",
        "Description":["usager avec privilèges accrus", "consulter profils usagers et encadrants", "modifie infos usagers sauf rôle et mot de passe"]
    },
    {   "Role":"Administrateur",
        "Description":["encadrant avec privilèges accrus", "consulte profil tous utilisateurs", "modifie infos tous utilisateurs enregistré","ajoute utilisateur sans code inscription","supprimer un utilisateur"]
    }

];

/* lancement des fonction de JS */
//createFooter(); // a voir avec export
//tableUser(); 

tableJson(); // utilisation tableau Json

/* toutes les fonctions du JS */

/* créate tableauJson */
function tableJson(){

    jsonData.forEach(utrole => {
    const row=document.createElement('tr');

    const roleCell=document.createElement('td');
    roleCell.textContent= utrole.Role;
    row.appendChild(roleCell);

    const descripCell=document.createElement('td');
    descripCell.textContent= utrole.Description.join(", ");
    row.appendChild(descripCell);

    tableBody.appendChild(row);
});

}


// fonction d'ajout d'un role
function afficherListePageRole() {
    
    //reset la liste
    result.innerHTML = '';

    // fetch le fichier role dans data : déf->la promise, renvoyée par fetch, se résout avec un objet de la classe intégrée Response, dès que le serveur répond avec des en-têtes.
    fetch('./data/role.json')
    .then(res => res.json())
    .then(role => {

        //affiche la liste
        role.forEach(post => {
        //result.insertAdjacentHTML('beforeend', `<li>Role : ${post.Role} Description : ${post.Description}</li>`)
        result.insertAdjacentHTML( 'beforeend',"<li>" + post.Role + " : " + post.Description + " </li>");
        });

    });

}

function boutonAjouterRoleDescrip(){

    // récupérer la valeur du champ input
    let newRoleValue = nrole.value.trim();
    let newDescripValue = descrip.value.trim();

    //let verifLetter = new RegExp("^[a-zA-Z]*$","g");
    //let verifLetter = new RegExp("^[a-zA-Z]*$");
    /*if (!verifLetter.nrole.value){
        alert("que des lettres s'il vous plaît !")
    }else{
        alert("C'est bon !")
    }*/
    

    fetch('./data/role.json')
    .then(res => res.json())
    .then(role => {

    if (newRoleValue && newDescripValue) {
            // Crée un nouvel objet avec le rôle et la description
            const roletemp = { Role: newRoleValue, Description: newDescripValue };

            // Ajoute l'objet au tableau 'role'
            role.push(roletemp);

            // Affiche temporairement le nouvel utilisateur avec rôle et description
            result.insertAdjacentHTML('beforeend', `<li>Role: ${newRoleValue}, Description: ${newDescripValue}</li>`);

            // Réinitialise les champs de saisie
            nrole.value = '';
            inputDescription.value = '';
        } else {
            alert("Veuillez remplir le rôle et la description.");
        }  

    });
   
}

function addUtil(){

    //reset la liste
    result.innerHTML = '';

    // fetch le fichier utilisateur dans data
    fetch('./data/utilisateurs.json')
    .then(res => res.json())
    .then(utilisateurs => {

        // variable d'ajout role et sa description
        const inputNom = document.getElementById('ufname');
        const inputPrenom = document.getElementById('ulname');
        const inputEmail = document.getElementById('uemail');
        const inputRole = document.getElementById('urole');

        let champNom = inputNom.value.trim();
        let champPrenom = inputPrenom.value.trim();
        let champEmail = inputEmail.value.trim();
        let champRole = inputRole.value.trim();

        let addUtiltemp = { Nom: champNom, Prenom: champPrenom, Email: champEmail, Role: champRole };
        
        // Ajoute l'objet au tableau 'data'
        utilisateurs.push(addUtiltemp);

        let last = Object.keys(utilisateurs)[Object.keys(utilisateurs).length - 1];
        console.log("last=",last);

        result.insertAdjacentHTML( 'beforeend',"<li> Nom : " + utilisateurs[last].Nom + " </li>");
        result.insertAdjacentHTML( 'beforeend',"<li> Prénom : " + utilisateurs[last].Prenom + " </li>");
        result.insertAdjacentHTML( 'beforeend',"<li> Email : " + utilisateurs[last].Email + " </li>");
        result.insertAdjacentHTML( 'beforeend',"<li> Role : " + utilisateurs[last].Role + " </li>");

    });

}

function suivant(){

    // fetch le fichier utilisateur dans data
    fetch('./data/utilisateurs.json')
    .then(res => res.json())
    .then(utilisateurs => {

        inputNom.value = utilisateurs[element].Nom;
        inputPrenom.value = utilisateurs[element].Prenom;
        inputEmail.value = utilisateurs[element].Email;
        inputRole.value = utilisateurs[element].Role;

        element++;

        let last = Object.keys(utilisateurs)[Object.keys(utilisateurs).length - 1];
        console.log(last)
        if(element > last){
            const temp=element;
            alert(" dernier entrée !")
        }

    });
}

function retour(){

    // fetch le fichier utilisateur dans data
    fetch('./data/utilisateurs.json')
    .then(res => res.json())
    .then(utilisateurs => {

        inputNom.value = utilisateurs[element].Nom;
        inputPrenom.value = utilisateurs[element].Prenom;
        inputEmail.value = utilisateurs[element].Email;
        inputRole.value = utilisateurs[element].Role;

        element--;

        let last = Object.keys(utilisateurs)[Object.keys(utilisateurs).length - 1];
        if(element < 0){
            element = 0;
        }

    });

    /*
    element--;
    if(element < 0){
        element = 0;
    }
    */
}

/*
const profilButton=document.querySelector(".profilbutton");

profilButton.addEventListener('click', profilList);

function profilList(event){
    let buttonvalue = document.getElementById("suivant").value;

    console.log("bouton cliquééééééééé");
    console.log(buttonvalue);

    if(buttonvalue === "increment"){
        console.log("-------- increment -----------");
    } else {
        console.log("--------- decrement ----------");
    }
 

}
    
*/

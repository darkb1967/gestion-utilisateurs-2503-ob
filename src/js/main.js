//import "./header";
//import {createFooter} from "./footer";

/* variable tableau classique avec json */
const tableBody = document.querySelector("#tablejson tbody");

// variable d'ajout role et sa description
const nrole = document.getElementById('nrole');
const descrip = document.getElementById('descrip');

// variable envois résultat dans une variable
const result = document.getElementById('result');

const jsonData =[
    {   "Utilisateur":"Invité",
        "Role":["sidentifier", "créer un compte si code", "réinitialiser mot de passe"]
    },
    {   "Utilisateur":"Usager",
        "Role":["consulter son profil", "modifier son profil", "parcourir la liste des utilisateurs","se déconnecter"]
    },
    {   "Utilisateur":"Encadrant",
        "Role":["usager avec privilèges accrus", "consulter profils usagers et encadrants", "modifie infos usagers sauf rôle et mot de passe"]
    },
    {   "Utilisateur":"Administrateur",
        "Role":["encadrant avec privilèges accrus", "consulte profil tous utilisateurs", "modifie infos tous utilisateurs enregistré","ajoute utilisateur sans code inscription","supprimer un utilisateur"]
    }

];

/* lancement des fonction de JS */
//createFooter();
tableJson(); // utilisation tableau Json
tableUser(); // utilisation tableau utilisateur

/* toutes les fonctions du JS */

/* créate tableauJson */
function tableJson(){

    jsonData.forEach(utrole => {
    const row=document.createElement('tr');

    const utilCell=document.createElement('td');
    utilCell.textContent= utrole.Utilisateur;
    row.appendChild(utilCell);

    const roleCell=document.createElement('td');
    roleCell.textContent= utrole.Role.join(", ");
    row.appendChild(roleCell);

    tableBody.appendChild(row);
});

}


// fonction d'ajout d'un role, pas inplémenter encore
function addRole() {

  // récupérer la valeur du champ input
  let newRoleValue = nrole.value;
  console.log(newRoleValue);

  let newDescripValue = descrip.value;
  
  jsonData["Utilisateur"]=newRoleValue;
  jsonData.Utilisateur=newRoleValue;

  JSON.stringify["utilisateur", newRoleValue]
  //jsonData.Role=newDescripValue;

   result.append(JSON.stringify(jsonData));

  /*let verifLetter = new RegExp("^[a-zA-Z]*$","g");
  let verifLetter = new RegExp("^[a-zA-Z]*$");
  if (!verifLetter.nrole || newRoleValue === " "){
    alert("que des lettres s'il vous plaît !")
  }
  */



  //refreshUi();
}
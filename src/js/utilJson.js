const tableUtBody = document.querySelector("#tableUtBody tbody");

const jsonData =[
    {   "Nom":"Jackson",
        "Prenom":"makkenzie",
        "Email":"makkenzie@gmail.com",
        "Role":"invite"
    },
    {    "Nom":"Goya",
        "Prenom":"Chantal",
        "Email":"Chantalgoay@free.com",
        "Role":"usager"
    },
    {    "Nom":"Pivot",
        "Prenom":"Bernard",
        "Email":"pbernard@hotmail.com",
        "Role":"consultant"
    },
    {    "Nom":"Gate",
        "Prenom":"Bill",
        "Email":"billgate@laposte.fr",
        "Role":"Administrateur"
    }

];

/* lancement des fonction de JS */
tableUtJson(); // utilisation tableau utilisateur

/* toutes les fonctions du JS */

/* créate tableauJson */
function tableUtJson(){

    jsonData.forEach(utilisateurs => {
    const row=document.createElement('tr');

    const nomCell=document.createElement('td');
    nomCell.textContent= utilisateurs.Nom;
    row.appendChild(nomCell);

    const prenomCell=document.createElement('td');
    prenomCell.textContent= utilisateurs.Prenom;
    row.appendChild(prenomCell);

    const emailCell=document.createElement('td');
    emailCell.textContent= utilisateurs.Email;
    row.appendChild(emailCell);

    const roleCell=document.createElement('td');
    roleCell.textContent= utilisateurs.Role;
    row.appendChild(roleCell);

    tableUtBody.appendChild(row);
    });

}
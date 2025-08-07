const tableUtBody = document.querySelector("#tableUtBody tbody");

/* lancement des fonction de JS */
tableauUtilisateurs();

/* toutes les fonctions du JS */
function tableauUtilisateurs(){
    fetch('./data/utilisateurs.json')
    .then(res => res.json())
    .then(utilisateurs => {

        utilisateurs.forEach(util => {
        const row=document.createElement('tr');

        const nomCell=document.createElement('td');
        nomCell.textContent= util.Nom;
        console.log(nomCell);
        row.appendChild(nomCell);

        const prenomCell=document.createElement('td');
        prenomCell.textContent= util.Prenom;
        row.appendChild(prenomCell);

        const emailCell=document.createElement('td');
        emailCell.textContent= util.Email;
        row.appendChild(emailCell);

        const roleCell=document.createElement('td');
        roleCell.textContent= util.Role;
        row.appendChild(roleCell);

        tableUtBody.appendChild(row);
        });
    });
}
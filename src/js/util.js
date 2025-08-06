const userTable = document.getElementById('divusertable');

const utilisateurs =['Mike Dev', 'John Makenzie', 'Léa Grande', 'michelle torr'];

tableUser(); // utilisation tableau utilisateur

/* création tableau utilisateur */
function tableUser() {

    userTable.innerHTML = "";

    let headers = ["Nom", "Prenom", "Email", "role", "Supprimer"];
    let table = document.createElement("table"); 
        
    for(let i = 0; i < utilisateurs.length; i++) {
        let row = table.insertRow(i);
        let btn = document.createElement("button");

        btn.textContent = "X";
        btn.type = "button";
        btn.dataset.position = i;
        btn.addEventListener("click", deleteTab);

        row.insertCell(0).innerHTML = utilisateurs[i].split(" ")[0];
        row.insertCell(1).innerHTML = utilisateurs[i].split(" ")[1];
        row.insertCell(2).innerHTML = utilisateurs[i].split(" ")[0]+"."+utilisateurs[i].split(" ")[1]+"@exemple.com";
        row.insertCell(3).innerHTML = utilisateurs[i].split(" ")[1];
        row.insertCell(4).append(btn);

      };

      let header = table.createTHead();
      let headerRow = header.insertRow(0);
      for(let i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
      };

      userTable.appendChild(table);
}

// fonction pour effacer un élément dans un tableau
function deleteTab(event){
  let btn = event.target; // récupérer le bouton qui a déclenché l'évènement
  let position = btn.dataset.position;
  utilisateurs.splice(position, 1); // supprimer un élément à partir de sa position. (voir aussi filter())
  tableUser();
}

//export {userTable};
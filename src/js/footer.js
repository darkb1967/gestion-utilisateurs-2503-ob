//const footer = document.getElementById('footer');

createFooter(); 

function createFooter(){

  /*Balise P */
  let p = document.createElement('p');
  p.textContent = "Copyright 2025 by Olivier";
  
  /* balise DIV, A*/
  let newDiv = document.createElement('div');
  let a = document.createElement('a');
  newDiv.setAttribute("class", "btn-primary");
  a.setAttribute("href", "#");
  a.textContent ="Haut de Page";
  newDiv.appendChild(a);

  /* injection dans le dom */
  footer.appendChild(p);
  footer.appendChild(newDiv);

}

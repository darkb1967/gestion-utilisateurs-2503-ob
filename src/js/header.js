// Créer l'élément header
const header = document.createElement('header');
header.id = 'header';

// Créer l'élément image pour le logo
const logo = document.createElement('img');
logo.src = './img/logo/CRM_logo-horizontal-blanc.png';
logo.alt = 'logo crm';

// Créer le titre principal h1
const h1 = document.createElement('h1');
h1.textContent = 'Gestion d\'utilisateurs';

// Créer le conteneur principal
const container = document.createElement('div');
container.classList.add('container');

// Créer la barre de navigation
const topnav = document.createElement('div');
topnav.classList.add('topnav');

// Ajouter les liens dans la barre de navigation
const links = [
  { href: './index.html', text: 'Accueil' },
  { href: './roles.html', text: 'Roles' },
  { href: './roles-ajouter.html', text: 'Ajouter un role' },
  { href: './utilisateurs.html', text: 'Utilisateurs' },
  { href: './utilisateurs-ajouter.html', text: 'Ajouter un utilisateur' },
  { href: './profil.html', text: 'Profil' }
];

// Créer chaque lien et les ajouter à la barre de navigation
links.forEach(link => {
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.text;
  topnav.appendChild(a);
});

// Ajouter la barre de navigation au conteneur
container.appendChild(topnav);

// Ajouter le logo, le titre et le conteneur au header
header.appendChild(logo);
header.appendChild(h1);
header.appendChild(container);

// Ajouter le header au body de la page
document.body.prepend(header);

//exporter ver fichier principale
//export {header};
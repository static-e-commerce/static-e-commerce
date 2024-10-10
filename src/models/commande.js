// Liste de produits typiques
const articles = {
  products: [
    {
      nom: "Chaise de bureau ergonomique",
      description:
        "Chaise de bureau avec support lombaire, ajustable en hauteur et accoudoirs pliables.",
      prix: 129.99,
      categorie: "Mobilier",
      stock: true,
      image: "resources/images/chaise-bureau.png",
    },
    {
      nom: "Lampe de chevet LED",
      description:
        "Lampe moderne avec éclairage LED réglable et fonction tactile pour allumage.",
      prix: 39.99,
      categorie: "Éclairage",
      stock: false,
      image: "resources/images/lampe-led.png",
    },
    {
      nom: "Casque audio sans fil",
      description:
        "Casque Bluetooth avec réduction de bruit active et autonomie de 20 heures.",
      prix: 89.99,
      categorie: "Électronique",
      stock: true,
      image: "resources/images/casque-sans-fil.png",
    },
    {
      nom: "Tapis de yoga antidérapant",
      description:
        "Tapis de yoga écologique en caoutchouc, parfait pour des séances de méditation et d'étirements.",
      prix: 24.99,
      categorie: "Sport",
      stock: true,
      image: "resources/images/tapis-yoga.png",
    },
    {
      nom: "Table basse scandinave",
      description:
        "Table basse au design minimaliste avec des pieds en bois de hêtre et plateau blanc.",
      prix: 149.99,
      categorie: "Mobilier",
      stock: true,
      image: "resources/images/table-basse.png",
    },
    {
      nom: "Montre connectée sport",
      description:
        "Montre connectée avec suivi d'activité, fréquence cardiaque, et notifications en temps réel.",
      prix: 119.99,
      categorie: "Électronique",
      stock: false,
      image: "resources/images/montre-connectee.png",
    },
    {
      nom: "Cafetière italienne",
      description:
        "Cafetière en aluminium pour espresso, compatible avec les plaques à induction.",
      prix: 29.99,
      categorie: "Cuisine",
      stock: true,
      image: "resources/images/cafetiere-italienne.png",
    },
    {
      nom: "Couverts en acier inoxydable",
      description:
        "Set de 24 couverts en acier inoxydable avec un design moderne et élégant.",
      prix: 59.99,
      categorie: "Cuisine",
      stock: true,
      image: "resources/images/couverts-inox.png",
    },
    {
      nom: "Sac à dos de randonnée",
      description:
        "Sac à dos étanche avec compartiment pour sac de couchage et poches multiples.",
      prix: 79.99,
      categorie: "Sport",
      stock: false,
      image: "resources/images/sac-a-dos.png",
    },
    {
      nom: "Machine à laver compacte",
      description:
        "Machine à laver compacte 7kg avec options d'économie d'eau et d'énergie.",
      prix: 299.99,
      categorie: "Électroménager",
      stock: true,
      image: "resources/images/machine-a-laver.png",
    },
    {
      nom: "Écouteurs sans fil",
      description:
        "Écouteurs Bluetooth avec boîtier de charge rapide et réduction de bruit.",
      prix: 59.99,
      categorie: "Électronique",
      stock: true,
      image: "resources/images/ecouteurs-sans-fil.png",
    },
    {
      nom: "Batteur électrique",
      description:
        "Batteur électrique avec 5 vitesses et fouets en acier inoxydable.",
      prix: 19.99,
      categorie: "Cuisine",
      stock: false,
      image: "resources/images/batteur-electrique.png",
    },
    {
      nom: "Smartphone 5G",
      description:
        "Smartphone 6,5 pouces avec 128 Go de stockage, appareil photo 48MP et connectivité 5G.",
      prix: 499.99,
      categorie: "Électronique",
      stock: true,
      image: "resources/images/smartphone-5g.png",
    },
    {
      nom: "Four à micro-ondes avec grill",
      description:
        "Micro-ondes avec fonction grill, 800W et capacité de 23 litres.",
      prix: 99.99,
      categorie: "Électroménager",
      stock: false,
      image: "resources/images/four-micro-ondes.png",
    },
    {
      nom: "Vélo électrique pliable",
      description:
        "Vélo électrique avec moteur 250W, batterie amovible et cadre pliable pour un rangement facile.",
      prix: 799.99,
      categorie: "Transport",
      stock: true,
      image: "resources/images/velo-electrique.png",
    },
    {
      nom: "Grille-pain en acier inoxydable",
      description:
        "Grille-pain avec 7 niveaux de brunissage, fonction décongélation et réchauffage.",
      prix: 34.99,
      categorie: "Cuisine",
      stock: true,
      image: "resources/images/grille-pain.png",
    },
    {
      nom: "Lunettes de soleil polarisées",
      description:
        "Lunettes de soleil avec verres polarisés anti-reflets et protection UV400.",
      prix: 24.99,
      categorie: "Accessoires",
      stock: false,
      image: "resources/images/lunettes-soleil.png",
    },
    {
      nom: "Imprimante multifonction",
      description:
        "Imprimante 3-en-1 avec scanner, photocopieur et connectivité Wi-Fi.",
      prix: 159.99,
      categorie: "Électronique",
      stock: true,
      image: "resources/images/imprimante.png",
    },
    {
      nom: "Gants de cyclisme",
      description:
        "Gants de cyclisme antidérapants avec rembourrage et fermeture velcro.",
      prix: 19.99,
      categorie: "Sport",
      stock: true,
      image: "resources/images/gants-cyclisme.png",
    },
  ],
}

// Liste des commandes passées
let orders = []

// Génération de commandes à partir de la liste de produits
function generateOrders() {
  const allStatus = ["Livré", "En Livraison", "Annulé"];
  const allDates = ["17-02-2024", "21-01-2023", "03-07-2022"];
  // Mapping
  orders = articles.products.map((product, index) => {
    // Valeurs aléatoires parmis celles disponibles pour la date et le statut
    const randomStatus = allStatus[Math.floor(Math.random() * allStatus.length)];
    const randomDate = allDates[Math.floor(Math.random() * allDates.length)];
    // Retour de la commande
    return {
      id: index + 1,
      article: product,
      date: randomDate,
      status: randomStatus,
    }
  });
}

// Fonction pour afficher la liste des commandes (h3 à remplacer par lien vers la page produit)
function displayOrders() {
  const content = document.getElementById("content")
  content.innerHTML = `
    <h2 tabindex="0">MES COMMANDES</h2>
    <hr />
    <section>
      ${orders
        .map(
          (order) =>
            `
          <div class="order">
            <h3 tabindex="0">${order.article.nom}</h3>
            <p tabindex="0">Prix : ${order.article.prix}€</p>
            <p tabindex="0">Commandé le : ${order.date}</p>
            <p class="status" tabindex="0">${order.status}</p>
            <button class="supportLink">Contacter Support</button>
          </div>
        `
        )
        .join("")}
    </section>
  `
  // Affiche la page de contact support lorsque le bouton correspondant est cliqué
  document.querySelectorAll(".supportLink").forEach((button) => {
    button.addEventListener("click", () => {
      displayContacts() // Appelle la fonction pour afficher les contacts
    });
  });
}

// Rediriger vers la page "Commandes" en cliquant sur l'icône correspondante de la navbar
document.getElementById("ordersLink").addEventListener("click", (event) => {
  event.preventDefault();
  generateOrders();
  displayOrders();
  applyStatusColors();
});

// Changement de couleur indicateur statut commande (WIP)
function applyStatusColors() {
  const status = document.querySelectorAll(".status");
  status.forEach((statut) => {
    const statusText = statut.innerText;
    // En fonction de son statut...
    if (statusText === "Livré") {
      statut.classList.add("statut-fini");
    } else if (statusText === "En Livraison") {
      statut.classList.add("statut-livraison");
    } else if (statusText === "Annulé") {
      statut.classList.add("statut-annule");
    }
  });
}

// Affichage du numéro de contact support (WIP)
function displayContacts() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>CONTACTS</h2>
    <hr />
    <section>
      <p tabindex="0">Contactez le support au numéro suivant :</p>
      <h4 tabindex="0">07 12 13 14 15 16</h4>
      <br>
      <p tabindex="0">Si vous n'arrivez pas à nous joindre, contactez nous via notre adresse mail :</p>
      <h4 tabindex="0">e-support@gmail.com</h4>
      <img
        title="photo d'un membre d'une équipe support souriant"
        alt="photo d'un membre d'une équipe support souriant"
        src="../../resources/images/support.jpg"
        width="85%"
        height="auto"
        tabindex="0"
      />
    </section>
  `
}
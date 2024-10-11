interface Order {
    id: number,
    article: Article,
    date: string,
    status: string,
}

const fetchProductList =  async (): Promise<Article[]> => {
    try {
        const response = await fetch('../../resources/data/Articles.json')
        const data = await response.json()
        return Object.values(data)[0] as Article[]
    } catch(e) {
        throw new Error(`Error: ${e}`)
    }   
}

// Génération de commandes à partir de la liste de produits
function generateOrders(products: Article[]) {
  const allStatus = ["Livré", "En Livraison", "Annulé"];
  const allDates = ["17-02-2024", "21-01-2023", "03-07-2022"];
  // Mapping
  const orders = products.map((product, index) => {
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
  return orders;
}

// Fonction pour afficher la liste des commandes (h3 à remplacer par lien vers la page produit)
function displayOrders(orders: Order[]) {
  const content = document.getElementById("content");
  content!.innerHTML = 
  `
    <section>
    ${orders.map((order) =>
      `
      <div class="order" role="region" aria-label="article">
        <p class="article-title" tabindex="0">${order.article.nom}</p>
        <p>Prix : ${order.article.prix}€</p>
        <p>Commandé le : ${order.date}</p>
        <p class="status">${order.status}</p>
        <button class="supportLink">Contacter Support</button>
      </div>
      `).join("")}
    </section>
  `
  // Affiche la page de contact support lorsque le bouton correspondant est cliqué
  document.querySelectorAll(".supportLink").forEach((button) => {
    button.addEventListener("click", () => {
      displayContacts();
    });
  });
}

// Changement de couleur indicateur statut commande (WIP)
function applyStatusColors() {
  const status = document.querySelectorAll(".status")
  status.forEach((statut) => {
    const statusText = (statut as HTMLElement).innerText
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
  content!.innerHTML = 
  `
    <h2>CONTACTS</h2>
    <hr />
    <section>
      <p>Contactez le support au numéro suivant :</p>
      <h4>07 12 13 14 15 16</h4>
      <br>
      <p>Si vous n'arrivez pas à nous joindre, contactez nous via notre adresse mail :</p>
      <h4>e-support@gmail.com</h4>
      <img
        title="photo d'un membre d'une équipe support souriant"
        alt="photo d'un membre d'une équipe support souriant"
        src="../../resources/images/support.jpg"
        width="85%"
        height="auto"
      />
    </section>
  `
}

(async () => {
    const products = await fetchProductList();
    const productsToUse = products.filter((product) => product.prix > 100);
    const orders = generateOrders(productsToUse);
    displayOrders(orders);
    applyStatusColors();
})();
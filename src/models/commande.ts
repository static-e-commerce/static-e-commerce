import articles from "../../resources/data/Articles.json"

interface Commande {
  id: number
  article: Article
  date: string
  status: string
}

// Tableau listant les différentes commandes passées
let orders: Commande[] = []

// Génération de commandes à partir de la liste de produit
function generateOrders() {
  orders = articles.products.map((product: Article, index: number) => ({
    id: index + 1,
    article: product,
    date: "17-02-2024",
    status: "Livré",
  }))
}

// Fonction pour afficher la liste des commandes
function displayOrders() {
  const content = document.getElementById("content") as HTMLElement
  content.innerHTML = `
        <h2>MES COMMANDES</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 20px;">
            ${orders.map((order) => `
                <div style="border: 1px solid #ccc; padding: 10px; border-radius: 5px; width: 200px;">
                    <h3>${order.article.nom}</h3>
                    <p>Prix: ${order.article.prix}</p>
                    <p>Date de Commande: ${order.date}</p>
                    <p>Status: ${order.status}</p>
                </div>
                <button>Contacter Support</button>
            `
              )
              .join("")}
        </div>
    `
}

// Rediriger vers la page "Commandes" en cliquant sur l'icône correspondante de la navbar
// !!! WIP !!!
document.getElementById("ordersLink")!.addEventListener("click", (event) => {
  event.preventDefault()
  displayOrders()
})

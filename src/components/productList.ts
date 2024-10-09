export {}

const getProductList =  async (): Promise<Article[]> => {
    try {
        const response = await fetch('../../resources/data/Articles.json')
        const data = await response.body
        console.log(response);
        
        console.log(data);
        console.log(typeof data);
        return []
    } catch(e) {
        throw new Error(`Error: ${e}`)
    }   
}

getProductList()
// const displayProducts = async () => {
//     const products: Article[] = await getProductList()
//     console.log(products.length);
//     let content = document.getElementById('content')
//     let htmlContent = ''
//     for (const product of products) {
//         console.log(product);
//         if(product.stock) {
//             htmlContent += 
//             `
//             <div>
//                 <img src='${product.image}' class="" alt="${product.nom}">
//                 <h3>${product.nom}</h3>
//                 <p>${product.description}</p>
//                 <div class="stock">
//                     <p>En stock</p>
//                 </div>
//                 <div>
//                     <p>${product.prix}</p>
//                     <button class="addToCart">Ajouter au panier</button>
//                 </div>
//             </div>
//             `
//         } else {
//             htmlContent += 
//             `
//             <div>
//                 <img src='${product.image}' class="" alt="${product.nom}">
//                 <h3>${product.nom}</h3>
//                 <p>${product.description}</p>
//                 <div class="stock">
//                     <p>En rupture de stock</p>
//                 </div>
//                 <div>
//                     <p>${product.prix}</p>
//                     <button class="addToCart">Ajouter au panier</button>
//                 </div>
//             </div>
//             `
//         }
//     }
    
// }

// (async () => {
//     await displayProducts();
// })();

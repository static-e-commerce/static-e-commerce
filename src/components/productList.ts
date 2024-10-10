const getProductList =  async (): Promise<Article[]> => {
    try {
        const response = await fetch('../../resources/data/Articles.json')
        const data = await response.json()
        return Object.values(data)[0] as Article[]
    } catch(e) {
        throw new Error(`Error: ${e}`)
    }   
}

const displayProducts = async () => {
    const products: Article[] = await getProductList()
    let content = document.getElementById('content')
    let htmlContent = ''
    for (const product of products) {
        if(product.stock) {
            htmlContent += 
            `
            <div>
                <img src='${product.image}' class="" alt="${product.nom}">
                <h3>${product.nom}</h3>
                <p>${product.description}</p>
                <div class="stock">
                    <p>En stock</p>
                </div>
                <div>
                    <p>${product.prix}</p>
                    <button class="addToCart">Ajouter au panier</button>
                </div>
            </div>
            `
        } else {
            htmlContent += 
            `
            <div>
                <img src='${product.image}' class="" alt="${product.nom}">
                <h3>${product.nom}</h3>
                <p>${product.description}</p>
                <div class="stock">
                    <p>En rupture de stock</p>
                </div>
                <div>
                    <p>${product.prix}</p>
                    <button class="addToCart">Ajouter au panier</button>
                </div>
            </div>
            `
        }
    }
    content!.innerHTML = htmlContent
}

(async () => {
    await displayProducts();
})();

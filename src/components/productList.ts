const getProductList =  async (): Promise<Article[]> => {
    try {
        const response = await fetch('../../resources/data/Articles.json')
        const data = await response.json()
        return Object.values(data)[0] as Article[]
    } catch(e) {
        throw new Error(`Error: ${e}`)
    }   
}

const displayRecommendedProducts = async () => {
    const products: Article[] = await getProductList()
    const productsRecommended: Article[] = products.filter(product => product.stock && product.prix > 150)
    let content = document.querySelector('.container')
    let htmlContent:  string = ''
    for (const product of productsRecommended) {
        if(product.stock) {
            htmlContent += 
            `
            <div class="card">
                <a href="detailArticle.html"><img src='${product.image}' class="img" alt="${product.nom}"></a>
                <h3>${product.nom}</h3>
                <p>${product.categorie}</p>
                <p class="description">${product.description}</p>
                <div class="stock">
                    <p>En stock</p>
                     <i class="fa-regular fa-check-circle"></i>
                </div>
                <div class="bottom-card">
                    <p>${product.prix}€</p>
                    <button class="main-content"><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
                </div>
            </div>
            `
        } else {
            htmlContent += 
            `
            <div class="card">
                <a href="detailArticle.html"><img src='${product.image}' class="img" alt="${product.nom}"></a>
                <h3>${product.nom}</h3>
                <p>${product.categorie}</p>
                <p class="description">${product.description}</p>
                <div class="stock">
                    <p>En rupture de stock</p>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
                <div class="bottom-card">
                    <p>${product.prix}€</p>
                    <button class="main-content" disabled><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
                </div>
            </div>
            `
        }
    }
    content!.innerHTML = htmlContent
}

const displayProductsByCategory = async (category: string) => {
    const products: Article[] = await getProductList()
    const productsByCategory: Article[] = products.filter(product => product.categorie === category)
    let content = document.querySelector(`.container-${category.toLowerCase()}`)
    let htmlContent: string = ''
    for (const product of productsByCategory) {
        if(product.stock) {
            htmlContent += 
            `
            <div class="card-${category}">
                <a href="detailArticle.html"><img src='${product.image}' class="img" alt="${product.nom}"></a>
                <h3>${product.nom}</h3>
                <p class="description">${product.description}</p>
                <div class="stock">
                    <p>En stock</p>
                    <i class="fa-regular fa-check-circle"></i>
                </div>
                <div class="bottom-card">
                    <p>${product.prix}€</p>
                    <button class="main-content"><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
                </div>
            </div>
            `
        } else {
            htmlContent += 
            `
            <div class="card-${category}">
                <a href="detailArticle.html"><img src='${product.image}' class="img" alt="${product.nom}"></a>
                <h3>${product.nom}</h3>
                <p class="description">${product.description}</p>
                <div class="stock">
                    <p>En rupture de stock</p>
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
                <div class="bottom-card">
                    <p>${product.prix}€</p>
                    <button class="main-content" disabled><i class="fas fa-shopping-cart"></i> Ajouter au panier</button>
                </div>
            </div>
            `
        }
    }
    content!.innerHTML = htmlContent
}

(async () => {
    await displayRecommendedProducts();
    await displayProductsByCategory("Sport");
    await displayProductsByCategory("Mobilier");
    await displayProductsByCategory("Éclairage");
    await displayProductsByCategory("Électronique");
    await displayProductsByCategory("Cuisine");
    await displayProductsByCategory("Électroménager");
})();

class CategoryAdaptor {
    constructor(url) {
        this.baseURL = url;
    }

    getAndMakeCategories() { 
        fetch(`${baseurl}categories`).then(resp => resp.json()).then(obj => obj.forEach(cat => {
            let category = new Category(cat)
            category.renderCategory();
        })).catch(error => console.log(error))
    }
}
class CategoryAdaptor {
    constructor(url) {
        this.baseURL = url;
    }

    getCategories() { 
        fetch(`${baseurl}categories`).then(resp => resp.json()).then(obj => obj.forEach(cat => new Category(cat))).catch(error => console.log(error))
    }
}
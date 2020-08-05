class CategoryAdaptor {
    constructor(url) {
        this.baseURL = url;
    }

    getCategories() { 
        fetch(`${baseurl}categories`).then(resp => resp.json()).then(obj => console.log(obj)).catch(error => console.log(error))
    }
}
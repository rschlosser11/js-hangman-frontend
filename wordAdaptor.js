class WordAdaptor {
    constructor(url) {
        this.baseurl = url;
    }

    getWords () {
        fetch(this.baseurl).then(resp => resp.json()).then(obj => console.log(obj))
    }
}
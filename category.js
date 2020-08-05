class Category {

    constructor({id, name, words}) {
        this.id = id;
        this.name = name;
        this.words = words;

        this.button = document.createElement('button')
    }

    renderCategory() {
        document.querySelector('div.cat-container').appendChild(this.button);
        this.button.innerText = `${this.name}`
    }
}
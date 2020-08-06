class Category {


    constructor({id, name, words}) {
        this.id = id;
        this.name = name;
        this.words = words;

        this.button = document.createElement('button')
        this.button.addEventListener('click', e => this.selectCategory(e))
    }

    renderCategory() {
        document.querySelector('div.cat-container').appendChild(this.button);
        this.button.innerText = `${this.name}`
        this.button.classList.add('cat-button');
        this.button.setAttribute('data-category-id', this.id)
    }

    selectCategory () {
        let game = new GamePlay
        game.startGame();
        let words = Word.all.filter(word => word.category_id === this.id)
        Word.selectWord(words);
        document.getElementById('category-chosen').innerText = `The chosen category is ${this.name}:`
    }
}
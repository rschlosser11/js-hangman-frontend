class Category {

    constructor({id, name, words}) {
        this.id = id;
        this.name = name;
        this.words = words;

        this.button = document.createElement('button')
        this.button.addEventListener('click', this.selectCategory.bind(this))
    }

    renderCategory() {
        document.querySelector('div.cat-container').appendChild(this.button);
        this.button.innerText = `${this.name}`
        this.button.classList.add('cat-button');
    }

    selectCategory () {
        let wordAdaptor = new WordAdaptor(`http://localhost:3000/categories/${this.id}/words`);
        let wordArr = wordAdaptor.getWords();
        let game = new GamePlay
        game.startGame();
    }
}
class GamePlay {
    constructor() {
        this.alphCont = document.createElement('div')
        this.alphCont.classList.add('alphabet-container');
        this.hangBox = document.createElement('canvas');
        this.hangBox.id = 'hangman-box'
        this.category = document.createElement('p');
        this.category.id = 'category-chosen'
        document.getElementById('game-board').append(this.alphCont, this.category, this.hangBox)
        document.addEventListener('click', e => {
            let button = e.target
            if (button.classList.contains('alphabet-letter')) {
                this.guessCorrect(button);
            }
        });       
    }

    startGame() {
        this.renderAlphabet();
    }

    renderAlphabet () {
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        alphabet.forEach(letter => {
            let button = document.createElement('button');
            button.classList.add('alphabet-letter');
            button.innerText = letter;
            this.alphCont.appendChild(button)
        })
    }

    guessCorrect(e) {
        let letter = e.innerText;
        let word = Word.chosenWord.word;
        if (word.includes(letter)) {
            Word.chosenWord.displayLetter(letter)
        }
    }
}
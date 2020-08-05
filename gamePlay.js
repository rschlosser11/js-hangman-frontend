class GamePlay {
    constructor() {
        this.alphCont = document.createElement('div')
        this.alphCont.classList.add('alphabet-container');
        this.guessWord = document.createElement('div');
        this.guessWord.id = 'word-to-guess';
        this.hangBox = document.createElement('canvas');
        this.hangBox.id = 'hangman-box'
        document.getElementById('game-board').append(this.alphCont, this.guessWord, this.hangBox)
    }

    startGame() {
        this.renderAlphabet();
    }

    renderAlphabet () {
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        alphabet.forEach(letter => {
            let button = document.createElement('button');
            button.classList.add('letter');
            button.innerText = letter;
            this.alphCont.appendChild(button)
        })
    }
}
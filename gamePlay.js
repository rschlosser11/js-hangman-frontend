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
}
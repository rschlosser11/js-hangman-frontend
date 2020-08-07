class GamePlay {
    constructor() {
        this.alphCont = document.createElement('div')
        this.alphCont.classList.add('alphabet-container');
        this.livesLeft = 10;
        this.lives = document.createElement('p');
        this.lives.id = 'lives'
        this.lives.innerText = `You have ${this.livesLeft} lives`
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'hangman-box'
        this.ctx = this.canvas.getContext('2d')
        this.category = document.createElement('p');
        this.category.id = 'category-chosen'
        document.getElementById('game-board').append(this.alphCont, this.category, this.lives, this.canvas)
        document.addEventListener('click', e => {
            let button = e.target
            if (button.classList.contains('alphabet-letter')) {
                this.displayGuessResponse(button);
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

    displayGuessResponse(e) {
        let letter = e.innerText;
        let word = Word.chosenWord.word;
        if (word.includes(letter)) {
            Word.chosenWord.displayLetter(letter)
        } else {
            this.incorrectGuess()
        }
    }

    incorrectGuess() {
        if (this.livesLeft > 1) {
            this.livesLeft -= 1
            this.lives.innerHTML = `You have ${this.livesLeft} lives`
            this.drawHangman(this.livesLeft);
        } else {
            this.lives.innerHTML = 'Game Over! To play again select a category below.'
        }
    }

    drawHangman = (lives) => {
        const drawArr = [this.rightLeg, this.leftLeg, this.rightArm, this.leftArm, this.torso, this.head, this.topFrame, this.leftFrame, this.btmFrame]
        if (this.canvas.getContext) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#999';
            this.ctx.lineWidth = 2;
            drawArr[lives - 1]();
        }
    }

    drawPart = (moveX, moveY, endX, endY) => {
        this.ctx.moveTo(moveX, moveY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }

    btmFrame = () => {this.drawPart(0, 150, 100, 150)}
    leftFrame = () => {this.drawPart(0, 150, 0, 0)}
    topFrame = () => {this.drawPart(0, 0, 150, 0)}
    head = () => {
        this.ctx.arc(150, 16, 15, 0, 2*Math.PI)
        this.ctx.stroke()
    }
    torso = () => {this.drawPart(150, 30, 150, 90)}
    leftArm = () => {this.drawPart(150, 50, 120, 30)}
    rightArm = () => {this.drawPart(150, 50, 180, 30)}
    leftLeg = () => {this.drawPart(150, 90, 130, 130)}
    rightLeg = () => {this.drawPart(150, 90, 170, 130)}
}
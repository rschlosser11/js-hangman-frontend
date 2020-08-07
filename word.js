class Word {
    static chosenWord = '';
    static all = [];

    constructor({id, word, category_id}) {
        this.id = id;
        this.word = word.toLowerCase();
        this.category_id = category_id;

        Word.all.push(this);
    }

    static selectWord(words) {
        let num = Math.floor(Math.random() * (words.length - 1) + 1);
        for (let i = 0; i < words.length; i++) {
            if (i === num - 1) {
                Word.chosenWord = words[i];
                Word.chosenWord.displayWord();
            }
        }
    }

    displayWord() {
        let ul = document.createElement('ul')
        ul.id = 'guess-word'
        let container = document.createElement('div')
        container.id = 'word-container'
        container.appendChild(ul);
        document.getElementById('game-board').append(container);
        let arr = this.word.split("")
        arr.forEach(letter => {
            let li = document.createElement('li');
            li.classList.add('letter');
            li.id = `${letter}`;
            if (letter === "'") {
                li.innerText = "'";
            } else if (letter === " ") {
                li.innerText = " ";
            } else if (letter === "-") {
                li.innerText = "-";
            } else {
                li.innerText = "_";
            }
            ul.appendChild(li);
        })
    }

    displayLetter = (letter) => {
        let lis = document.getElementById('guess-word').children;
        let word = this.word
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                lis[i].innerText = letter;
            }
        }
    }

    static wordComplete() {
        let letters = Array.from(document.getElementById('guess-word').children).map(letter => letter.innerText)
        return letters.includes('_') ? false : true
    }

    static findOrCreateWord(wordObj) {
        if (!Word.all.includes(wordObj)) {
            console.log(wordObj)
            let word = new Word(wordObj)
            console.log(word)
            Word.all.push(word)
            return word;
        }
    }
}
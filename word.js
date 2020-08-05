class Word {
    constructor({id, word, category_id}) {
        this.id = id;
        this.word = word;
        this.category_id = category_id;
        this.ul = document.createElement('ul')
        this.ul.id = 'guess-word'
        document.getElementById('word-container').appendChild(this.ul);
    }

    static selectWord(words) {
        let num = Math.floor(Math.random() * (words.length - 1) + 1);
        for (let i = 0; i < words.length; i++) {
            if (i === num - 1) {
                return words[i];
            }
        }
    }

    displayWord() {
        this.ul.classList.add('chosen-word');
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
            this.ul.appendChild(li);
        })
    }
}
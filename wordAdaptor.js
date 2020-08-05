class WordAdaptor {
    constructor(url) {
        this.baseurl = url;
    }

    getAndDisplayWord () {
        fetch(this.baseurl).then(resp => resp.json()).then(obj => {
            let word = new Word(Word.selectWord(obj))
            console.log(word);
            word.displayWord();
            return Word.selectWord(obj)
        });
    }
}
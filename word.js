class Word {
    constructor({id, name, category_id}) {
        this.id = id;
        this.name = name;
        this.category_id = category_id;
    }

    static selectWord(words) {
        let num = Math.floor(Math.random() * (words.length - 1) + 1);
        for (let i = 0; i < words.length; i++) {
            if (i === num - 1) {
                return new Word(words[i]);
            }
        }
    }
}
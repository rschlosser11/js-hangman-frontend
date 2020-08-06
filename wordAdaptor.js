class WordAdaptor {
    static baseUrl = 'http://localhost:3000'

    static getWords () {
        fetch(`${WordAdaptor.baseUrl}/words`).then(resp => resp.json()).then(obj => obj.forEach(word => new Word(word))).catch(error => console.log(error));
    }

    static getWordsFromCategory(catId) {
        fetch(`${WordAdaptor.baseUrl}/categories/${catId}/words`).then(resp => resp.json()).then(obj => obj.forEach(word => {
            Word.findOrCreateWord(word)
        })).catch(error => console.log(error))
    }
}
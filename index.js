const baseurl = 'http://localhost:3000/'

const categoryAdaptor = new CategoryAdaptor(`${baseurl}categories`)
const wordAdaptor = new WordAdaptor(`${baseurl}words`)

document.addEventListener('DOMContentLoaded', () => {
    wordAdaptor.getWords();
    categoryAdaptor.getAndMakeCategories();
    document.getElementById('new-category-btn').addEventListener('click', Category.renderCreateForm)
})

document.addEventListener('submit', Category.submitNewCategory)

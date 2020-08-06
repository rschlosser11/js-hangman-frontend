const baseurl = 'http://localhost:3000/'
document.addEventListener('DOMContentLoaded', () => {
    WordAdaptor.getWords();
    CategoryAdaptor.getAndMakeCategories();
    document.getElementById('new-category-btn').addEventListener('click', Category.renderCreateForm)
})

document.addEventListener('submit', Category.submitNewCategory)

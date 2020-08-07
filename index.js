const baseurl = 'http://localhost:3000/'
document.addEventListener('DOMContentLoaded', () => {
    WordAdaptor.getWords();
    CategoryAdaptor.getAndMakeCategories();
    document.getElementById('new-category-btn').addEventListener('click', Category.renderCreateForm)
})

document.addEventListener('submit', Category.submitNewCategory)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        document.querySelector('div.modal').remove()
        document.getElementById('new-category-btn').classList.remove('hidden')
    }
})
const baseurl = 'http://localhost:3000/'

const categoryAdaptor = new CategoryAdaptor(`${baseurl}categories`)

document.addEventListener('DOMContentLoaded', () => {
    categoryAdaptor.getCategories()
})
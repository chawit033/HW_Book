import bookList from './books.json'
import './main.scss'

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.getElementById('card')
    const books = bookList.data
    insertBook(books,cards)
})

function insertBook(books,cards) {
    books.forEach(book => {
        let cardDOM = builtCardDOM(book)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })
}
        
function builtCardDOM(book) {
    return (
        `<div class="card">
            <img src="https://images.bwbcovers.com/${book.ImageURL}" alt="#" />
            <div class="book-info">   
                <div class="title">${book.Title}<div>
                <div class="author">${book.Authors}<div>
                <div class="format">${book.Format}</div>
            </div>
        </div>`
    )
}
const cards = document.querySelectorAll('.memory--card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
    hasFlippedCard = 
    }
}
cards.forEach(card => card.addEventListener('click', flipCard))
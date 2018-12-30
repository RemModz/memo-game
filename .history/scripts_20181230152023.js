const cards = document.querySelectorAll('.memory--card');

let hasFlippedCard = false;
let firstCard
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard))
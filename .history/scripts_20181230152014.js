const cards = document.querySelectorAll('.memory--card');

let hasFlippedCard = false;
let fit
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard))
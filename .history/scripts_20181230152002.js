const cards = document.querySelectorAll('.memory--card');

let hasFlipped
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard))
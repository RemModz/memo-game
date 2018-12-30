const cards = document.querySelectorAll('.memory--card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
    hasFlippedCard = true;
    firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();    }
}

function checkForMatch() {
  if (firstCard.dataset.framework ===
    secondCard.dataset.framework) {
    disableCards();
    } else {

    }

}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function flipCards() {

}
cards.forEach(card => card.addEventListener('click', flipCard))

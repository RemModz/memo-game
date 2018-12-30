const cards = document.querySelectorAll('.memory--card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
    }
        // second click
        secondCard = this;

        checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework ===
        secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unFlipCards() {
    lockBoard = true;

        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
     
        resetBoard();
        }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard))

resetBoard();

const cards = {

deleteCards = function() {
    this.cardsChecked[0].remove();
    this.cardsChecked[1].remove();

    this.canGet = true;
    this.cardsChecked = [];

    CardPairs : 0, //liczba dopasowanych kafelków

    this.deleteCards = function() {
        this.cardsChecked[0].remove();
        this.cardsChecked[1].remove();

        this.canGet = true;
        this.cardsChecked = [];

        this.cardPairs++;
        if (this.cardPairs >= this.cardCount / 2) {
            alert('gameOver!');
        }
    },
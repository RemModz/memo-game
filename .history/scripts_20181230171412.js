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

this.tileClick = function(element) {
    if (this.canGet) {
        //jeżeli jeszcze nie pobraliśmy 1 elementu
        //lub jeżeli index tego elementu nie istnieje w pobranych...
        if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
            this.tilesChecked.push(e.target);
            e.target.style.backgroundImage = 'url(' + this.tilesImg[e.target.dataset.cardType] + ')';
        }

        if (this.tilesChecked.length === 2) {
            this.canGet = false;

            if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                setTimeout(this.deleteTiles.bind(this), 500);
            } else {
                setTimeout(this.resetTiles.bind(this), 500);
            }

            this.moveCount++;
            this.divScore.innerHTML = this.moveCount;
        }
    }
},

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

StartGame() {
    // shuffle deck
    cards = shuffle(cards);
    // remove all existing classes from each card
   for (var i = 0; i < cards.length; i++){
       deck.innerHTML = "";
       [].forEach.call(cards, function(item) {
           deck.appendChild(item);
       });
       cards[i].classList.remove("show", "open", "match",            "disabled");
    }
    // reset moves
    moves = 0;
    counter.innerHTML = moves;
   // reset star rating
   for (var i= 0; i < stars.length; i++){
       stars[i].style.color = "#FFD700";
       stars[i].style.visibility = "visible";
   }
   //reset timer
   var timer = document.querySelector(".timer");
   timer.innerHTML = "0 mins 0 secs";
   clearInterval(interval);
}

//modal
let modal = document.getElementById("popup1")
//stars list
 let starsList = document.querySelectorAll(".stars li");
//close icon in modal
 let closeicon = document.querySelector(".close");
//congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;
    //show congratulations modal
    modal.classList.add("show");
    //declare star rating variable
    var starRating = document.querySelector(".stars").innerHTML;
    //showing move, rating, time on modal
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating;
    document.getElementById("totalTime").innerHTML = finalTime;
    //closeicon on modal
    closeModal();
    };
}
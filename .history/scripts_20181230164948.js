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

// game timer

var second = 0, minute = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs"; 
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
        minute = 0;
        }
    },1000);
}

.score-panel {
	text-align: left;
	margin-bottom: 10px;
}

.score-panel .stars {
	margin: 0;
	padding: 0;
	display: inline-block;
	margin: 0 5px 0 0;
}

.score-panel .stars li {
	list-style: none;
	display: inline-block;
}

.score-panel .restart {
	float: right;
	cursor: pointer;
}

.fa-star {
	color: #FFD700;
}

.timer {
	display: inline-block;
	margin: 0 1rem;
}


/*
 * Styles for congratulations modal
 */


.overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.7);
	transition: opacity 500ms;
	visibility: hidden;
	opacity: 0;
}

.overlay:target {
	visibility: visible;
	opacity: 1;
}
  
.popup {
	margin: 70px auto;
	padding: 20px;
	background: #ffffff;
	border-radius: 5px;
	width: 85%;
	position: relative;
	transition: all 5s ease-in-out;
	font-family: 'Gloria Hallelujah', cursive;
}
  
.popup h2 {
	margin-top: 0;
	color: #333;
	font-family: Tahoma, Arial, sans-serif;
}

.popup .close {
	position: absolute;
	top: 20px;
	right: 30px;
	transition: all 200ms;
	font-size: 30px;
	font-weight: bold;
	text-decoration: none;
	color: #333;
}

.popup .close:hover {
	color: #E5F720;
}

.popup .content-1,
.content-2 {
	max-height: 30%;
	overflow: auto;
	text-align: center;
}

.show {
	visibility: visible !important;
	opacity: 100 !important;
}

#starRating li {
	display: inline-block;
}

#play-again {
	background-color: #141214;
	padding: 0.7rem 1rem;
	font-size: 1.1rem;
	display: block;
	margin: 0 auto;
	width: 50%;
	font-family: 'Gloria Hallelujah', cursive;
	color: #ffffff;
	border-radius: 5px;
}

/* animations */
@keyframes flipInY {
	from {
		transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
		animation-timing-function: ease-in;
		opacity: 0;
	}

	40% {
		transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
		animation-timing-function: ease-in;
	}

	60% {
		transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
		opacity: 1;
	}

	80% {
		transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
	}

	to {
		transform: perspective(400px);
	}
}
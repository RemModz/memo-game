const card = document.querySelectorAll('.memory--card');

function flipCard() {
    console.log('I clicked!');
    console.log(this);
}
cards.forEach(card => card.addEventListener('click', flipCard))
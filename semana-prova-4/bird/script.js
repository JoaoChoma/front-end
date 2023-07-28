const cardGrid = document.getElementById('cardGrid');
let cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let flippedCards = [];
let matchedCards = [];

// Duplica as cartas para formar os pares
cards = cards.concat(cards);

// Embaralha as cartas
shuffleArray(cards);

// Cria as cartas no grid
createCards();

function createCards() {
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.card = cards[i];
        card.addEventListener('click', flipCard);
        cardGrid.appendChild(card);
    }
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
        this.classList.add('flipped');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const card1 = flippedCards[0].dataset.card;
    const card2 = flippedCards[1].dataset.card;

    if (card1 === card2) {
        flippedCards[0].classList.add('matched');
        flippedCards[1].classList.add('matched');
        matchedCards.push(flippedCards[0], flippedCards[1]);
        checkForWin();
    } else {
        setTimeout(() => {
            flippedCards[0].classList.remove('flipped');
            flippedCards[1].classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];
}

function checkForWin() {
    if (matchedCards.length === cards.length) {
        setTimeout(() => {
            alert('Parabéns! Você venceu o jogo!');
        }, 500);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

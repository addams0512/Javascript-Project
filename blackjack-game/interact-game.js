let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
	let card = Math.floor(Math.random() * 13) + 1;
	if (card === 1) {
		return 11;
	} else if (card > 10) {
		return 10;
	} else {
		return card;
	}
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards.push(firstCard, secondCard);
	sum = firstCard + secondCard;
	renderGame();
}

function renderGame() {
	if (sum <= 20) {
		message = "Rút nữa hem cậu?";
	} else if (sum === 21) {
		message = "Gì dị trời, 21 luôn!";
		hasBlackJack = true;
	} else {
		message = "Quắc rùi, ván sau gấp đôi tiền ei!";
		isAlive = false;
	}

	cardsEl.textContent = "Bài tớ phát cho cậu nè: ";

	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}

	sumEl.textContent = "Tổng điểm của cậu đó: " + sum;
	messageEl.textContent = message;
}

function newCards() {
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	renderGame();
}

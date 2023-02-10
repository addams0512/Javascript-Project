let firstCard = 10;
let secondCard = 6;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
	renderGame();
}

function renderGame() {
	if (sum <= 20) {
		message = "Rút nữa hem cậu?";
	} else if (sum === 21) {
		message = "Gì dị trời, 21 luôn!";
		hasBlackJack = true;
	} else {
		message = "Cậu thua rồi, ván sau gấp đôi tiền ei!";
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
	let card = 1;
	sum += card;
	cards.push(card);
	renderGame();
}

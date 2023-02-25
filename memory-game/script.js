const cardArray = [
	{
		name: "fries",
		img: "img/fries.png",
	},
	{
		name: "cheeseburger",
		img: "img/cheeseburger.png",
	},
	{
		name: "ice-cream",
		img: "img/ice-cream.png",
	},
	{
		name: "hotdog",
		img: "img/hotdog.png",
	},
	{
		name: "milkshake",
		img: "img/milkshake.png",
	},
	{
		name: "pizza",
		img: "img/pizza.png",
	},
	{
		name: "fries",
		img: "img/fries.png",
	},
	{
		name: "cheeseburger",
		img: "img/cheeseburger.png",
	},
	{
		name: "ice-cream",
		img: "img/ice-cream.png",
	},
	{
		name: "hotdog",
		img: "img/hotdog.png",
	},
	{
		name: "milkshake",
		img: "img/milkshake.png",
	},
	{
		name: "pizza",
		img: "img/pizza.png",
	},
]
// Sort the array randomly
cardArray.sort(() => 0.5 - Math.random())

// Add the 10 blank card
const gridDisplay = document.getElementById("grid")

const createBoard = () => {
	// cardArray.forEach((element) => {
	// 	const card = document.createElement('img')
	// 	card.setAttribute('src', 'img/blank.png')
	// 	card.addEventListener('click', (event) => {
	// 		flipCard(event, element)
	// 	})
	// 	gridDisplay.appendChild(card)
	// })
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img")
		card.setAttribute("src", "img/blank.png")
		card.setAttribute("data-id", i)
		card.addEventListener("click", flipCard)
		gridDisplay.appendChild(card)
	}
}

createBoard()

let cardChosen = []
let cardsChosenId = []
const cardsWon = []
const result = document.querySelector("#result")

function checkMatch() {
	const cards = document.querySelectorAll("img")
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]

	if (optionOneId === optionTwoId) {
		cards[optionOneId].setAttribute("src", "img/blank.png")
		cards[optionTwoId].setAttribute("src", "img/blank.png")
		alert("You have clicked the same image!")
	} else if (cardChosen[0] === cardChosen[1]) {
		cards[cardsChosenId[0]].setAttribute("src", "img/white.png")
		cards[cardsChosenId[1]].setAttribute("src", "img/white.png")
		cards[cardsChosenId[0]].removeEventListener("click", flipCard)
		cards[cardsChosenId[1]].removeEventListener("click", flipCard)
		cardsWon.push(cardChosen)
	} else {
		cards[optionOneId].setAttribute("src", "img/blank.png")
		cards[optionTwoId].setAttribute("src", "img/blank.png")
	}
	result.innerHTML = cardsWon.length
	cardChosen = []
	cardsChosenId = []

	if (cardsWon.length === cardArray.length / 2) {
		result.innerHTML = "Congratulations you found them all"
	}
}

function flipCard() {
	// event.target.setAttribute('src', element.img)
	const cardId = this.getAttribute("data-id")
	cardChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute("src", cardArray[cardId].img)
	if (cardChosen.length === 2) {
		setTimeout(checkMatch, 500)
	}
}

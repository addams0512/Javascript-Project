const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const score = document.querySelector("#score")
const timeLeft = document.querySelector("#time-left")

let result = 0
let hitPosition = 0
let currentTime = 10

let randomSquare = () => {
	squares.forEach((square) => {
		square.classList.remove("mole")
	})
	let randomPosition = squares[Math.floor(Math.random() * 9)]
	randomPosition.classList.add("mole")
	hitPosition = randomPosition.id
}

squares.forEach((square) => {
	square.addEventListener("mousedown", () => {
		if (square.id === hitPosition) {
			result++
			score.textContent = result
			hitPosition = null
		}
	})
})

function moveMole() {
	let timerId = null
	timerId = setInterval(randomSquare, 1000)
}

function countDown() {
	if (currentTime === 0) {
		clearInterval(countDownTimerId)
		alert(`Time over, your score is ${result} `)
	}
	currentTime--
	timeLeft.textContent = currentTime
}

let countDownTimerId = setInterval(countDown, 1000)
moveMole()

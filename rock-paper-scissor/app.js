const computerChoiceDisplay = document.getElementById('computer-choice')
const choiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let choice, randomChoice, computerChoice, result

possibleChoice.forEach((possibleChoice) => {
	possibleChoice.addEventListener('click', (event) => {
		choice = event.target.id
		choiceDisplay.innerHTML = choice
		generateComputerChoice()
		getResult()
	})
})

function generateComputerChoice() {
	randomChoice = Math.floor(Math.random() * 3) + 1

	if (randomChoice === 1) {
		computerChoice = 'rock'
	} else if (randomChoice === 2) {
		computerChoice = 'paper'
	} else {
		computerChoice = 'scissor'
	}
	computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
	if (computerChoice === choice) {
		result = " it's a draw"
	} else if (choice === 'rock' && computerChoice === 'scissor') {
		result = ' you win!'
	} else if (choice === 'rock' && computerChoice === 'paper') {
		result = ' you lose!'
	} else if (choice === 'paper' && computerChoice === 'scissor') {
		result = ' you lose!'
	} else if (choice === 'paper' && computerChoice === 'rock') {
		result = ' you win!'
	} else if (choice === 'scissor' && computerChoice === 'rock') {
		result = ' you lose!'
	} else if (choice === 'scissor' && computerChoice === 'paper') {
		result = ' you win!'
	}
	resultDisplay.innerHTML = result
}

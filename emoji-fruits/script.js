let fighters = [
	"🐉",
	"🐥",
	"🐊",
	"💩",
	"🦍",
	"🐢",
	"🐩",
	"🦭",
	"🦀",
	"🐝",
	"🤖",
	"🐘",
	"🐸",
	"🕷",
	"🐆",
	"🦕",
	"🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fighterButton");

fightButton.addEventListener("click", function () {
	let res1 = fighters[Math.floor(Math.random() * fighters.length)];
	let res2 = fighters[Math.floor(Math.random() * fighters.length)];
	stageEl.textContent = res1 + " vs " + res2;
});

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function puts() {
	for (let i = 0; i < fruit.length; i++) {
		if (fruit[i] === "🍎") {
			appleShelf.textContent += " " + fruit[i];
		} else {
			orangeShelf.textContent += " " + fruit[i];
		}
	}
}
puts();

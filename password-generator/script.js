const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
]

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

let pwd1 = []
let pwd2 = []

let pushRandom = (data) => {
	for (let i = 0; i < 15; i++) {
		let randomCharacter =
			characters[Math.floor(Math.random() * characters.length)]
		data.push(randomCharacter)
	}
}

let printScreen1 = (data) => {
	for (let i = 0; i < data.length; i++) {
		password1.textContent += data[i]
	}
}

let printScreen2 = (data) => {
	for (let i = 0; i < data.length; i++) {
		password2.textContent += data[i]
	}
}

let generated = () => {
	pushRandom(pwd1)
	if (password1.textContent === "") {
		printScreen1(pwd1)
	}
	pushRandom(pwd2)
	if (password2.textContent === "") {
		printScreen2(pwd2)
	}
}

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

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")

let pwd1 = []
let pwd2 = []

const pushRandom = (data) => {
	for (let i = 0; i < 15; i++) {
		let randomCharacter =
			characters[Math.floor(Math.random() * characters.length)]
		data.push(randomCharacter)
	}
}

const printScreen1 = (data) => {
	for (let i = 0; i < data.length; i++) {
		password1.value += data[i]
	}
}

const printScreen2 = (data) => {
	for (let i = 0; i < data.length; i++) {
		password2.value += data[i]
	}
}

const generated = () => {
	pwd1 = []
	pwd2 = []
	password1.value = ""
	password2.value = ""
	pushRandom(pwd1)
	printScreen1(pwd1)
	pushRandom(pwd2)
	printScreen2(pwd2)
}

//how to copy the text from input field
const copyText = (data) => {
	data.select()
	data.setSelectionRange(0, 99999)
	document.execCommand("copy")
}

const copy1 = () => {
	copyText(password1)
}

const copy2 = () => {
	copyText(password2)
}

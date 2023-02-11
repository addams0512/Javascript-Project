let pointHome = 0;
let pointElHome = document.getElementById("point-el-home");
function minus1home() {
	pointHome--;
	pointElHome.innerText = pointHome;
}

function plus1home() {
	pointHome++;
	pointElHome.innerText = pointHome;
}

function plus2home() {
	pointHome += 2;
	pointElHome.innerText = pointHome;
}

function plus3home() {
	pointHome += 3;
	pointElHome.innerText = pointHome;
}

let pointGuest = 0;
let pointElGuest = document.getElementById("point-el-guest");

function minus1guest() {
	pointGuest--;
	pointElGuest.innerText = pointGuest;
}

function plus1guest() {
	pointGuest++;
	pointElGuest.innerText = pointGuest;
}

function plus2guest() {
	pointGuest += 2;
	pointElGuest.innerText = pointGuest;
}

function plus3guest() {
	pointGuest += 3;
	pointElGuest.innerText = pointGuest;
}

function reset() {
	pointHome = 0;
	pointGuest = 0;
	pointElGuest.innerText = pointGuest;
	pointElHome.innerText = pointHome;
}

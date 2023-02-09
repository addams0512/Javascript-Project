let pointHome = 0;
let poinElHome = document.getElementById("point-el-home");

function plus1home() {
  pointHome++;
  poinElHome.innerText = pointHome;
}

function plus2home() {
  pointHome += 2;
  poinElHome.innerText = pointHome;
}

function plus3home() {
  pointHome += 3;
  poinElHome.innerText = pointHome;
}

let pointElGuest = 0;
let poinElGuest = document.getElementById("point-el-guest");

function plus1guest() {
  pointElGuest++;
  poinElGuest.innerText = pointElGuest;
}

function plus2guest() {
  pointElGuest += 2;
  poinElGuest.innerText = pointElGuest;
}

function plus3guest() {
  pointElGuest += 3;
  poinElGuest.innerText = pointElGuest;
}

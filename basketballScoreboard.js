let homeScore = 0;
let guestScore = 0;

let home = document.getElementById("homeScoreCount");
let guest = document.getElementById("guestScoreCount");
let homeLeader = document.getElementById("homeScore").style;
let guestLeader = document.getElementById("guestScore").style;

function leader() {
  if (homeScore > guestScore) {
    homeLeader.border = "2px solid white";
    homeLeader.boxSizing = "border-box";
    guestLeader.border = "none";
  } else if (homeScore < guestScore) {
    guestLeader.border = "2px solid white";
    guestLeader.boxSizing = "border-box";
    homeLeader.border = "none";
  } else {
    homeLeader.border = "none";
    guestLeader.border = "none";
  }
}
function reset() {
  homeScore = 0;
  guestScore = 0;
  guest.textContent = guestScore;
  home.textContent = homeScore;
  homeLeader.border = "none";
  guestLeader.border = "none";
}

function incByOneHomeScore() {
  homeScore += 1;
  home.textContent = homeScore;
  leader();
}
function incByTwoHomeScore() {
  homeScore += 2;
  home.textContent = homeScore;
  leader();
}
function incByThreeHomeScore() {
  homeScore += 3;
  home.textContent = homeScore;
  leader();
}

function incByOneGuestScore() {
  guestScore += 1;
  guest.textContent = guestScore;
  leader();
}
function incByTwoGuestScore() {
  guestScore += 2;
  guest.textContent = guestScore;
  leader();
}
function incByThreeGuestScore() {
  guestScore += 3;
  guest.textContent = guestScore;
  leader();
}

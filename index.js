
let homeScore = 0;
let guestScore = 0;

function scoreIncrease(team, score) {
    if (team === "home") {
        homeScore += score
        document.getElementById("home-score").innerHTML = homeScore
    }else if (team === "guest") {
        guestScore += score
        document.getElementById("guest-score").innerHTML = guestScore
    }
}
function reset() {
    document.getElementById("home-score").innerHTML = 0
    document.getElementById("guest-score").innerHTML = 0
    homeScore = 0;
    guestScore = 0;

}
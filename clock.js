let seconds = 0;
let minutes = 0;
let hours = 0;

function secondRotation(seconds) {
    //code
    let degRotation = 6 * seconds;
    return degRotation
  }
//console.log(secondRotation(15));

function minuteRotation(minutes, seconds) {
    let totalSeconds = minutes * 60;
    totalSeconds = totalSeconds + seconds;
    //console.log(totalSeconds);
    let degreeRotation = totalSeconds * .1
    return degreeRotation;
}
//console.log(minuteRotation(15,0));
//console.log(minuteRotation(15,30));

//needs review
function hourRotation(hours,minutes) {
    let totalMinutes = hours * 60;
    totalMinutes = totalMinutes + hours;
    //console.log(totalMinutes);

    let degRotation3 = .5*totalMinutes;
    return degRotation3;
}

function tick() {
    seconds++; //adds one every time to tick function runs
    if (seconds >= 60) {
        minutes++
        seconds = 0;
    };

    if (minutes >= 60) {
        hours++
        minutes = 0;
    };

    if (hours >= 12) {
        hours = 0;
    }

    //console.log("tick");

    console.log(`${hours}:${minutes}:${seconds}`);

    secondHand.style.transform = "rotate(" +secondRotation(seconds) + "deg)";
    minuteHand.style.transform = "rotate(" +minuteRotation(minutes) + "deg)";
    hourHand.style.transform = "rotate(" +hourRotation(hours) + "deg)";

}

//this is where we actually run the code
document.addEventListener("DOMContentLoaded", function(){
    minuteHand = document.querySelector("#minute");
    hourHand = document.querySelector("#hour");
    secondHand = document.querySelector("#second");

    setInterval(tick, 200);


});



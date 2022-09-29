const userName = prompt("Adın Ne")

const timeTag = document.querySelector(".saat")
const userNameTag = document.querySelector("#username")

userNameTag.innerHTML = userName

// var date = Date();
// var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
// timeTag.innerHTML = current_time
// console.log(toString(date))

function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //Add AM and PM system
    var amPm = (hours < 12) ? "AM" : "PM";

    //Convert the hourscomponent to 12 -hour format
    hours = (hours > 12) ? hours - 12 : hours;

    //Pad the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Display the clock
    document.querySelector(".saat").innerHTML = hours + " : " + minutes + " : " + seconds + "  " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

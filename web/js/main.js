//Show the current date
//Since day and month return a number, pull full names from an array for each
var today = new Date();
var currDate = "";
var showDate = document.getElementById("date");
var dd = today.getDate();
var yyyy = today.getFullYear();

var day = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

currDate = (day[today.getDay()] + ' ' + month[today.getMonth()]+ ' ' + dd + ', ' + yyyy);
showDate.innerHTML = currDate;
console.log(currDate);

//Show the current military time
//Since minutes and seconds are a single digit under 10, add a zero
function getMilitaryTime() {
    var today = new Date();
    var currTime = "";
    var showTime = document.getElementById('timeMilitary');
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if (min < 10)
    {
        min = "0" + min
    }
    if (sec < 10)
    {
        sec = "0" + sec
    }
    currTime = (hour + ':' + min + ':' + sec)
    showTime.innerHTML = currTime;

    setTimeout("getMilitaryTime()",500);
}
getMilitaryTime();

//Show the current standard time
//Account for pm hours (13+), 12am, and showing am vs pm
//Since minutes and seconds are a single digit under 10, add a zero
function getStandardTime() {
    var today = new Date();
    var currTime = "";
    var showTime = document.getElementById('timeStandard');
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var amPM = " ";
    if (hour >= 13)
    {
        hour = hour - 12
        amPM = "PM"
    }
    else if (hour == 0)
    {
        hour = hour
        amPM = "AM"
    }
    else
    {
        hour = hour
        amPM = "AM"
    }
    if (min < 10)
    {
        min = "0" + min
    }
    if (sec < 10)
    {
        sec = "0" + sec
    }
    currTime = (hour + ':' + min + ':' + sec + " " + amPM)
    showTime.innerHTML = currTime;

    setTimeout("getStandardTime()",500);
}
getStandardTime();

//Show/hid div around each time depending on button click
function switchTime() {
    var x = document.getElementById("militaryTime");
    var y = document.getElementById("standardTime");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
    if (y.style.display == "none") {
        y.style.display = "block";
    }
    else {
        y.style.display = "none";
    }
}
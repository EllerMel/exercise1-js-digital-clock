var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}
document.getElementById('date').innerHTML = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').style.fontFamily = "railway";
document.getElementById('date').style.fontSize = '100px'

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('time').style.fontFamily = "monospace";
    document.getElementById('time').style.fontSize = "1000%";
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

  
  function startStandardTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    if (h > 12) {
        h -= 12;
    } else if (h === 0) {
        h = 12;
    }
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time2').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('time2').style.fontFamily = "monospace";
    document.getElementById('time2').style.fontSize = "1000%";
    t = setTimeout(function() {
        startStandardTime()
    }, 500);
  }
  startStandardTime();

  function myFunction() {
    var militaryTime = document.getElementById("militaryTime"); 
    var standardTime = document.getElementById("standardTime");
 
    militaryTime.style.display = (
        militaryTime.style.display == "none" ? "block" : "none"); 
    standardTime.style.display = (
        standardTime.style.display == "none" ? "block" : "none"); 
 }
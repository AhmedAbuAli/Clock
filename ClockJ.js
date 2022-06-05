var Minutes_input = document.getElementById('M')
var Seconds_input = document.getElementById('S')
var Minutes_display = document.getElementById("MD")
var Seconds_display = document.getElementById("SD")

Minutes_input.addEventListener("input" ,function() {

if (Minutes_input.value <= 59 && Minutes_input.value >= 0)
{console.log(Minutes_input.value);
 Minutes_display.innerHTML = Minutes_input.value}

else if (Minutes_input.value>59) { Minutes_display.innerHTML = 59 }

else { Minutes_display.innerHTML = 0 }})

Seconds_input.addEventListener("input" ,function() {

if (Seconds_input.value <= 59 && Seconds_input.value >= 0)
{Seconds_display.innerHTML = Seconds_input.value}

else if (Seconds_input.value>59) { Seconds_display.innerHTML = 59 }

else { Seconds_display.innerHTML = 0 }})

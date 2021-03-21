const period = 604800000;
const odd = 217800000;
var today = new Date();
var TimeVal = today.getTime();
var Sat;
if (today.getDay() == 6)
    Sat = TimeVal;
var Sat = TimeVal - (TimeVal % period) + period + odd;


let NextSat = new Date(Sat);
var date = NextSat.getFullYear() + '-' + (NextSat.getMonth() + 1) + '-' + NextSat.getDate();  
document.getElementById("day1").innerHTML = date;
var TimeZone = NextSat.getTimezoneOffset()/60;
if (TimeZone < 0)
    TimeZone = -TimeZone;
document.getElementById("time_st1").innerHTML = date + ' ' + NextSat.toLocaleTimeString() + ' UTC+' + TimeZone + ' (' + Sat + ')';
var TimeEnd = Sat + 10800000;
var End = new Date(TimeEnd);
document.getElementById("time_end1").innerHTML = date + ' ' + End.toLocaleTimeString() + ' UTC+' + TimeZone + ' (' + TimeEnd + ')';


Sat = Sat + period;
NextSat = new Date(Sat);
date = NextSat.getFullYear() + '-' + (NextSat.getMonth() + 1) + '-' + NextSat.getDate();  
document.getElementById("day2").innerHTML = date;
TimeZone = NextSat.getTimezoneOffset()/60;
if (TimeZone < 0)
    TimeZone = -TimeZone;
document.getElementById("time_st2").innerHTML = date + ' ' + NextSat.toLocaleTimeString() + ' UTC+' + TimeZone + ' (' + Sat + ')';
TimeEnd = Sat + 10800000;
End = new Date(TimeEnd);
document.getElementById("time_end2").innerHTML = date + ' ' + End.toLocaleTimeString() + ' UTC+' + TimeZone + ' (' + TimeEnd + ')';
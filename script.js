const days1 =document.getElementById("days");
const hours1 =document.getElementById("hours");
const minutes1 =document.getElementById("minutes");
const seconds1 =document.getElementById("seconds");


const newYears= '1 jan 2022';
function countdown()
{
    const newYearsDate = new Date (newYears);
    const currentDate = new Date ();
    

    const totalSeconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    days1.innerHTML = days;
    hours1.innerHTML = format(hours);
    minutes1.innerHTML = format(minutes);
    seconds1.innerHTML = format(seconds);



}

function format(time)
{
    return time < 10 ? `0${time}`:time;
}
countdown();
setInterval(countdown,1000);

function myNewDate() {
    let d = new Date();
    let targetDate = new Date("feb 28, 2025 10:00:00");
    let diff = Math.abs(d.getTime() - targetDate.getTime());
    let months = (targetDate.getFullYear() - d.getFullYear()) * 12 + (targetDate.getMonth() - d.getMonth());
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)));
    // let NewDayHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)));
    let seconds = Math.ceil((diff / 1000));
    let week = Math.ceil(diff / (1000 * 60 * 60 * 24 * 7));

    document.getElementById("months").innerText = months;
    document.getElementById("weeks").innerHTML = week;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Call the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    myNewDate();
});


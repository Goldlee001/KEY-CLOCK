function updateClock() {
    let hoursElement = document.querySelector('.hours');
    let minutesElement = document.querySelector('.minutes');
    let secondsElement = document.querySelector('.seconds');
    let ampmElement = document.querySelector('.ampm');

   
    // 12 hours clock
    let hh = document.getElementById('hh');
    // 60 minutes
    let mm = document.getElementById('mm');
    // 60 seconds
    let ss = document.getElementById('ss');
    
    
    let currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    // Convert 24-hour time to 12-hour time
    if (h > 12) {
        h = h - 12;
    }

    // Adding zero padding
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot'); 


    // Update inner HTML
    hoursElement.innerHTML = h + "<br><span>Hours</span>";
    minutesElement.innerHTML = m + "<br><span>Minutes</span>" ;
    secondsElement.innerHTML = s + "<br><span>Seconds</span>";
    ampmElement.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    // 360deg / 12 == 30
    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360deg /60 == 6
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    // 360deg / 60 == 6
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
}

// Set up the interval to update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock when the page loads
updateClock();
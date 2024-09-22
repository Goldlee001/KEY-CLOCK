function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondHand = document.getElementById('sc');
    const minuteHand = document.getElementById('mn');
    const hourHand = document.getElementById('hr');

    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `rotate(${hours * 30 + (minutes / 2)}deg)`;


    // Digital clock js
    const currentTime = new Date();
    let digitalHours = currentTime.getHours();
    let digitalMinutes = currentTime.getMinutes();
    let digitalSeconds = currentTime.getSeconds();
    const ampmValue = digitalHours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    digitalHours = digitalHours % 12 || 12;

    // Add leading zeros to single-digit minutes and seconds
    digitalHours = digitalHours < 10 ? '0' + digitalHours : digitalHours;
    digitalMinutes = digitalMinutes < 10 ? '0' + digitalMinutes : digitalMinutes;
    digitalSeconds = digitalSeconds < 10 ? '0' + digitalSeconds : digitalSeconds;

    // Update the digital clock
    document.getElementById('hour').innerHTML = digitalHours;
    document.getElementById('minute').innerHTML = digitalMinutes;
    document.getElementById('second').innerHTML = digitalSeconds;
    document.getElementById('ampm').innerHTML = ampmValue;


// // Call updateClock function every second
// setInterval(updateClock, 1000);

// // Initial call to display the time immediately
// updateClock();
    
}


// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
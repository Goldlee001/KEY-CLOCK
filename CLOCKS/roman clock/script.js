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

    
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
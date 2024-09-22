// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//     const currentDate = new Date()
//     const secondRatio = currentDate.getSeconds() / 60
//     const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minuteRatio + currentDate.getHours) / 12
//     setRotation(secondHand, secondRotation)
//     setRotation(minuteHand, minutesRotation)
//     setRotation(hourHand, hoursRotation)
// }

// function setRotation(element) {
//     element.style.setproperty('--rotation', rotationRatio * 360)
// }

// setClock()


document.addEventListener("DOMContentLoaded", function () {
    const hourHand = document.querySelector(".hand.hour");
    const minuteHand = document.querySelector(".hand.minute");
    const secondHand = document.querySelector(".hand.second");
  
    function updateClock() {
      const now = new Date();
  
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      const hourDeg = (hours % 12) * 30 + minutes / 2; // 30 degrees per hour, 0.5 degrees per minute
      const minuteDeg = minutes * 6 + seconds / 10; // 6 degrees per minute, 0.1 degrees per second
      const secondDeg = seconds * 6; // 6 degrees per second
  
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
      secondHand.style.transform = `rotate(${secondDeg}deg)`;
    }
  
    // Update the clock every second
    setInterval(updateClock, 1000);
  
    // Initial call to set the initial clock state
    updateClock();
  });
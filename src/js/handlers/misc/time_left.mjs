export default function timeLeft(id, time) {

    const listingID = id;
  
    // Set the date we're counting down to

  const countDownDate = new Date(time).getTime()

  // Update the countdown every second

  const x = setInterval(function () {
    // Get the current time
    const now = new Date().getTime()

    // Calculate the distance between now and the countdown date
    const distance = countDownDate - now

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result in the element with id="time_left"
    const timeContainer = document.getElementById('time_left_' + listingID)

    const daysLeft = document.getElementById(`days_left_${listingID}`)
    const hoursLeft = document.getElementById(`hours_left_${listingID}`)
    const minutesLeft = document.getElementById(`minutes_left_${listingID}`)
    const secondsLeft = document.getElementById(`seconds_left_${listingID}`)

    daysLeft.innerText = days + 'd'
    hoursLeft.innerText = hours + 'h'
    minutesLeft.innerText = minutes + 'm'
    secondsLeft.innerText = seconds + 's'

    // If the countdown is over, display text
    if (distance < 0) {
      clearInterval(x)
        timeContainer.innerHTML = 'Ended'
    }
  }, 1000)
}

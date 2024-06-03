// Selecting that Div with id 'clock'
const clock = document.getElementById('clock')

setInterval(function () { // To run the time continuously
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

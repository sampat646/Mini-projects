const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const resetButton = document.getElementById('reset');

redButton.addEventListener('click', function(e) {
    document.body.style.backgroundColor = "red";
});
greenButton.addEventListener('click', function(e) {
    document.body.style.backgroundColor = "green";
});
blueButton.addEventListener('click', function(e) {
    document.body.style.backgroundColor = "blue";
});
resetButton.addEventListener('click', function(e) {
    document.body.style.backgroundColor = "white";
});

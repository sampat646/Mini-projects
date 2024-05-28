const incBu = document.getElementById('incrementButton');
const decBu = document.getElementById('decrementButton');


incBu.addEventListener('click', function() {
    // Increment the counter and update the display
var count = document.getElementById('counter').innerText;
count = parseInt(count) + 1;
document.getElementById('counter').innerText = count;

});

decBu.addEventListener('click', function() {
    // Decrement the counter and update the display
var count = document.getElementById('counter').innerText;

if (count > 0) {
        count--;
        document.getElementById('counter').innerText = count;
    }
});

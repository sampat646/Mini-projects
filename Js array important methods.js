// Reduce
// The reduce() method is used to apply a function against an accumulator and each element in the array
// to reduce it to a single value. In this example, it calculates the sum of all elements in the array.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, curVal) => {
  return accumulator + curVal;
}, 0); // The second argument '0' is the initial value of the accumulator
console.log(sum); // Output: 10

// Map
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// In this example, it creates a new array with strings that include the member's name and a message.
const members = ["Ram", "Raj", "Sam", "Hari", "Kush"];
const announcements = members.map((member) => {
  return `${member} joined the classes.`;
});
console.log(announcements);

// forEach
// The forEach() method executes a provided function once for each array element.
// In this example, it logs each number in the array to the console.
const numbers = [28, 77, 45, 99, 27];
numbers.forEach((number) => {
  console.log(number);
});

// Filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// In this example, it creates a new array containing only the elements from the original array that are greater than 5.
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter((n) => n > 5);
console.log(filteredArray);

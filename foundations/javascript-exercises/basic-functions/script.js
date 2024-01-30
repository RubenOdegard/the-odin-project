// Add 7 to any number
function add7(number) {
  return number + 7;
}

console.log("add7 (3): ", add7(3));

// Multiply two numebrs
function multiply(a, b) {
  return a * b;
}

console.log("multiply (2, 5): ", multiply(2, 5));

// Capitalize the first letter of a stringing
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("UPPERCASE"));
console.log(capitalize("lowercase"));
console.log(capitalize("rAnDoM"));

function lastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log("lastLetter (Ruben): ", lastLetter("Ruben"));

const sumAll = (a, b) => {
  // Reuturn "ERROR" if a or b is negative
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  // Return "ERROR" if a or b is non-number parameters
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  // Handle case for a being less than b
  if (a < b) {
    // Initialize a sum variable to hold the count
    let sum = 0;
    // Loop through every number between a and b
    for (let i = 0; i <= b; i++) {
      sum += i;
    }
    return sum;
  }

  // Handle case for a being greater than b
  if (a > b) {
    // Initialize a sum variable to hold the count
    let sum = 0;
    // Loop through every number between a and b
    for (let i = 0; i <= a; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;

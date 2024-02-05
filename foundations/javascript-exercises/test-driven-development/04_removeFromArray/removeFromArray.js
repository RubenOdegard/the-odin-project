const removeFromArray = (array, ...removeFromArray) => {
  // if removeFromArray does not include an item in array, it should not be removed
  // Array.filter returns an array with all elements that are not in removeFromArray
  return array.filter((item) => !removeFromArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

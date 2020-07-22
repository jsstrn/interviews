const binarySearch = (list, item, counter) => {
  let lowestIndex = 0;
  let highestIndex = list.length - 1;

  while (lowestIndex <= highestIndex) {
    counter && counter.add();

    let middleIndex = Math.floor((highestIndex + lowestIndex) / 2);
    let guess = list[middleIndex];

    if (guess === item) {
      return guess;
    }

    if (guess < item) {
      lowestIndex = middleIndex + 1;
    } else {
      highestIndex = middleIndex - 1;
    }
  }

  return null;
};

module.exports = binarySearch;

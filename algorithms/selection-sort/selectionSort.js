const findLowestValue = (unsortedArray) => {
  const initialIndex = 0;
  let lowestValue = unsortedArray[initialIndex];
  let lowestValueIndex = initialIndex;

  for (let i = 0; i < unsortedArray.length; i++) {
    if (unsortedArray[i] < lowestValue) {
      lowestValue = unsortedArray[i];
      lowestValueIndex = i;
    }
  }

  return [lowestValue, lowestValueIndex];
};

const selectionSort = (unsortedArray) => {
  const sortedArray = [];
  const unsortedArrayLength = unsortedArray.length;

  for (let i = 0; i < unsortedArrayLength; i++) {
    const [lowestValue, lowestValueIndex] = findLowestValue(unsortedArray);
    sortedArray.push(lowestValue);
    unsortedArray.splice(lowestValueIndex, 1);
  }

  return sortedArray;
};

module.exports = selectionSort;

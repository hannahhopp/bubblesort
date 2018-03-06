function split (arr) {
  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  if (arr.length === 1) return arr;
  result = merge(split(firstHalf), split(secondHalf));
  return result;
}

function comparisons (num1, num2) {
  return num1 > num2;
}

function merge (firstHalf, secondHalf) {
  let returnArr = [];
  const firstHalfCopy = firstHalf.slice();
  const secondHalfCopy = secondHalf.slice();
  let reference = firstHalfCopy.shift();
  let comparator = secondHalfCopy.shift();

  while (reference && comparator) {
    if (comparisons(reference, comparator)) {
      returnArr.push(comparator);
      comparator = secondHalfCopy.shift();
    } else {
      returnArr.push(reference);
      reference = firstHalfCopy.shift();
    }
  }

  if (reference) returnArr = returnArr.concat(reference, firstHalfCopy);
  else returnArr = returnArr.concat(comparator, secondHalfCopy);
  return returnArr;
}


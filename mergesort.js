function split (arr) {
  const midPoint = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  if (arr.length === 1) {
    return arr;
  }
  let finalFirstHalf = split(firstHalf);
  let finalSecondHalf = split(secondHalf);
  return [finalFirstHalf, finalSecondHalf];
}

function merge (arr) {
  /*
  [5, 4, 3, 2, 1]
  --> [[5, 4] | [3, 2, 1]]
  --> [[[5], [4]] | [[3, 2], [1]]]
  --> [[[[5], [4]] | [[[3], [2]], [1]]]
  --> [[4, 5] | [[2, 3], [1]]
  --> [[4, 5] | [1, 2, 3]]
  --> [1, 2, 3, 4, 5]
  */
  let splitArr = split(arr)

  return arr;
}

let arr = [1, 2, 3];
console.log(split(arr));
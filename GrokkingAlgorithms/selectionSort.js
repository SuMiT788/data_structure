function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((value, i) => {
    if (value < smallest) {
      smallest = value;
      smallestIndex = i;
    }
  });

  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const copiedArr = JSON.parse(JSON.stringify(arr));

  arr.forEach((_) => {
    const smallestIndex = findSmallest(copiedArr);
    newArr.push(...copiedArr.splice(smallestIndex, 1));
  });

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));

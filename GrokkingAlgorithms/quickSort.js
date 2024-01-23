function quickSort(array) {
  if (array.length < 2) return array;
  else {
    const pivot = array[0];
    const arr = array.slice(1);

    const less = arr.filter((elem) => elem <= pivot);
    const greater = arr.filter((elem) => elem > pivot);

    array = [];

    return array.concat(quickSort(less), pivot, quickSort(greater));
  }
}

// Generating an array of 1000 random numbers
function generateRandomArray(count) {
  const randomArray = [];
  for (let i = 0; i < count; i++) {
    randomArray.push(Math.floor(Math.random() * 10000) + 1);
  }
  return randomArray;
}

const arrayOfNumbers = generateRandomArray(10000);

console.log(quickSort(arrayOfNumbers));

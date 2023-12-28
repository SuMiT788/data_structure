// WRITE SELECTIONSORT FUNCTION HERE //
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }

    if (min !== i) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3];
  selectionSort(myArray);
  console.log(myArray);
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/

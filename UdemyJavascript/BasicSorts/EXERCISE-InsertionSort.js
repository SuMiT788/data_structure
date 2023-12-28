// WRITE INSERTIONSORT FUNCTION HERE //
function insertionSort(array) {
  let temp, j;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    j = i - 1;
    while (j > -1 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
    console.log(array);
  }
  return array;
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3];
  insertionSort(myArray);
  console.log(myArray);
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/

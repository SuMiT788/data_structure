// 4.1
const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// 4.2
const len = (arr, length = 0) => {
  if (!arr.length) return length;
  return len(arr.slice(1), length + 1);
};

// 4.3
const max = (arr, maxElem = Number.MAX_SAFE_INTEGER) => {
  if (!arr) return null;

  const firstElem = arr[0];
  if (arr.length === 1) return maxElem > firstElem ? maxElem : firstElem;

  return max(arr.slice(1), arr[0]);
};

// 4.4
const binarySearch = (array, item, start = 0, end = array.length - 1) => {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === item) return mid;
  if (array[mid] < item) return binarySearch(array, item, mid + 1, end);
  if (array[mid] > item) return binarySearch(array, item, start, mid - 1);
};

console.log(binarySearch([11, 12, 13, 14, 15, 16], 16));

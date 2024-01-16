// This thing actually blew my mind
function fibonacci2(n, a = 0, b = 1) {
  if (n === 0) return a;
  else if (n === 1) return b;
  return fibonacci2(n - 1, b, a + b);
}

function fibonacci1(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonacci1(n - 1) + fibonacci1(n - 2);
}

// Chapter 4 page 76
function arrElemSum(arr, sum = 0) {
  if (!arr) return null;
  if (arr.length === 0) return 0;
  if (arr.length === 1) return sum + arr[0];
  return arrElemSum(arr.slice(1), sum + arr[0]);
}

console.log(fibonacci2(50));

function fibonaci2(n, a = 0, b = 1) {
  if (n === 0) return a;
  else if (n === 1) return b;
  return fibonaci2(n - 1, b, a + b);
}

function fibonaci1(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return fibonaci1(n - 1) + fibonaci1(n - 2);
}

console.log(fibonaci2(50));

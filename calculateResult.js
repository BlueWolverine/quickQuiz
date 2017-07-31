function calculateResult(a, n, b) {
  let result;
  let temp = a;
  if (a!==parseInt(a) || b!==parseInt(b) || n!==parseInt(n)) {
    console.log("wrong input");
    return false;
  } else {
    if (a>=b) {
      return a % b;
    } else {
      while(temp >= b) {
        temp *= a;
      }
      return temp % b;
    }
  }
}
console.log(calculateResult(99, 1000, 100))

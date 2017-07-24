function getPrimeNumber(num) {
    let result = [];
    for (let i = 2; i < num; i++) {
       var flag = true;
       for (let j = 2; j <= i / 2; j++) {
         if (i % j === 0) {
         flag = false;
         break;
         }
       }
    if (flag) {
      result.push(i);
    }
  }
  return result;
}

console.log(getPrimeNumber(100));
             

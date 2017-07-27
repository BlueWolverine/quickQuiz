function getLargestUglyNumber(order) {
  let number = [];
  let num = 1;
  while (number.length < order) {
    if(num<=0) {
        num++;
        continue;
    } else if ((num==1||num%2==0||num%3==0||num%5==0)&&num%7!=0) {
        number.push(num);
        num++;
    } else {
        num++;
        continue;
    }
  }
  return number[number.length-1];
}

console.log(getLargestUglyNumber(9));
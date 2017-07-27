function findMainFactor(array) {
  let median;
  let temp = 0;
  if (array.length%2==0) {
    median = (array[array.length/2]+array[array.length/2-1])/2;
  } else {
      median = array[parseInt(array.length/2)];
  }

  for (let i = 0; i<array.length; i++) {
    if (array[i] === median) {
        temp++;
    }
  }
  if (temp >= parseInt(array.length/2)+1)
  {
      return median;
  } else {
      return null;
  }
}
let array = [1,2,2,2,2];
console.log(findMainFactor(array));
function getLongestWord(str) {
 let array = str.split(' ');
 let max = array[0].length;
 let result = [];
 let temp = array[0];
 result.push(temp);
  for (let i = 1; i<array.length; i++) {
    if (array[i].length>max) {
      if (array[i].indexOf(',') != -1) {
        if (array[i].length - 1>max) {
          max = array[i].length-1;
          temp = array[i].replace(',', '');
        }
      } else {
        result = [];
        max = array[i].length;
        temp = array[i];
        result.push(temp);
      }
    } else if (array.length == max) {
        if (array[i].indexOf(',') != -1) {
          continue;
        } else {
          result.push(temp);
          temp = array[i];
        }
    }
  }
  return result;
}
let str = 'I have a pencil, and an eraser, too.'
console.log(getLongestWord(str));

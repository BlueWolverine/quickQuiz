function makeLongestPlalindrome(str) {
  let array = str.split('');
  let letterMap = new Map();
  let result = [];
  let resultTwo = [];
  let finResult = [];
  let tag = false;
  letterMap.set(array[0], 1);
  for (let i = 1; i<array.length; i++) {
    if (letterMap.has(array[i])) {
      let temp = letterMap.get(array[i]);
      temp++;
      letterMap.set(array[i], temp);
    } else {
      letterMap.set(array[i], 1);
    }
  }
//console.log(letterMap);
//console.log(parseInt(letterMap.get('a')/2))
  for (let key of letterMap) {
    for (let j = 0; j<parseInt(letterMap.get(key)/2); j++) {
      result.push(key);
    }
  }
console.log(result)
  for (let key of letterMap) {
    if (letterMap.get(key) % 2 != 0) {
      result.push(key);
      tag = true;
      break;
    }
  }
  if(tag) {
    for (let i = 0; i<result.length-1; i++) {
      resultTwo.push(result[result.length-i]);
    }
  } else {
    for (let i = 0; i<result.length; i++) {
      resultTwo.push(result[result.length-i]);
    }
  }
  console.log(resultTwo)
  finResult = (result + resultTwo).split('');
  return finResult;
}
console.log(makeLongestPlalindrome('asdsasa'));

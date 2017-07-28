function makeLargestNumber(array) {
    let numChar = [] ;
    let result = [];
    let makeInt = '';
    for (let i = 0; i<array.length; i++) {
        let temp = [];
        temp = array[i].toString().split(''); 
        for (let j = 0; j<temp.length; j++) {
            numChar.push(temp[j]);
        }
    }
    for (let i = 0; i<numChar.length; i++) {
      result.push(parseInt(numChar[i]));
    }
    result.sort(function(x,y) {
        if(x>y) {
            return -1;
        } else if (x<y) {
            return 1;
        } else {
            return 0;
        }
    });
    for (let i = 0; i<result.length; i++) {
        makeInt += result[i];
    }
    return makeInt;
}

console.log(makeLargestNumber([1,24,3]))
'use strict'

function feibonaxi(count) {
    let num = [];
    let sum = 1;
    for (var i = 0; i<count; i++) {
      if(i==0 ||i==1) {
          num[i] = 1;
      }  else {
          num[i] = num[i-1] + num[i-2];
      }
    }
    return num;
}
console.log(feibonaxi(100));
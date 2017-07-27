'use strict';

function get_union(collection_a, collection_b) {
  let result = collection_a;
  if (collection_a.length <= collection_b.length) {
    for (let i = 0; i<collection_b.length; i++) {
      if (collection_a.indexOf(collection_b[i]) == -1) {
        result.push(collection_b[i]);
      }
    }
  } else {
    for (let i = 0; i<collection_a.length; i++) {
      if (collection_b.indexOf(collection_a[i]) == -1) {
        result.push(collection_a[i]);
      }
    }
  }
  result.sort(function(x, y) {
      if (x>y) {
          return 1;
      } else if (x<y) {
          return -1;
      } else {
          return 0;
      }
  })
  return result;
}

var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
var collection_c = [10, 27, 28, 19, 5, 78, 23];
console.log(get_union(collection_a, collection_b));
module.exports = get_union;


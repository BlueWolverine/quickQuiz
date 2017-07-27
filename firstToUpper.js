function firstToUpper(str) {
  let array = str.split(' ');
  for(var i=0; i<array.length; i++) {
   var char=array[i].charAt(0);
   array[i]=array[i].replace(char,function(s){return s.toUpperCase();});
 }
 array=array.join(" ");
 return array;
}

console.log(firstToUpper('i have a pen.'));

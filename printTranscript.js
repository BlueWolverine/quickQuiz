//分成多个函数书写

module.exports = function printTranscript(information) {
  var inforSheet = new Array();
  var sum = 0;
  var average = 0;
  var t = 0;
  inforSheet.name = information[0];
  inforSheet.chinese = information[1];
  inforSheet.english = information[2];
  inforSheet.cs = information[3];
  inforSheet.math = information[4];

  console.log('tanscript'+'/n');

  for (value in inforSheet) {
    if (NaN(inforSheet.value)) { //shift()函数移除数组中的第一个元素并返回
      console.log(inforSheet.key+ ":" +inforSheet.name);
      console.log('===================');
    }
    else {
      sum += inforSheet.value;
      t++;
      console.log(inforSheet.key + ":" + inforSheet.value);
    }
    console.log('*******************');
  }
  average = sum/t;
  console.log('average:' + average);
  console.log('total:' + sum);
  console.log('==================');//属性需要返回的 name:${inforsheet.name}
}

function main() {
  information = ['zhangsan', '80', '90', '78', '95'];
  printTranscript(information);
}

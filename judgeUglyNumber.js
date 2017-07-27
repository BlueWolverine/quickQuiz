function judgeUglyNumber(num) {
    if(num<=0) {
        return false;
    } else if ((num%2==0||num%3==0||num%5==0)&&num%7!=0) {
        return true;
    } else {
        return false;
    }
}
console.log(judgeUglyNumber(14));
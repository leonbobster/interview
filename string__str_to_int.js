function strToInt(str) {
    var isNeg = false;
    var num = 0;
    var i = 0;
    var len = str.length;

    if (str[0] === '-') {
        isNeg = true;
        i++;
    }
    while (i < len) {
        num *= 10;
        num += str[i] - '0';
        i++;
    }
    if (isNeg) {
        num = -num;
    }

    return num;
}

['0', '-1', '1', '333'].forEach(str => {
    var num = strToInt(str);
    console.log(num, typeof num);
});
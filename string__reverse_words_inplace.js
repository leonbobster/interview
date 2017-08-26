function reverseString(str, s, e) {
    if (s === undefined) s = 0;
    if (e === undefined) e = str.length - 1;
    while (s < e) {
        [str[s], str[e]] = [str[e], str[s]];
        s++;
        e--;
    }
}

function reverseWords(str) {
    var start = 0;
    var end = 0;
    var length = str.length;
    while (end < length) {
        if (str[end] !== ' ') {
            start = end;
            while (str[end] !== ' ' && end < length) end++;
            end--;
            reverseString(str, start, end);
        }
        end++;
    }
}

str = 'foobar bazbat';
console.log(str);
str = str.split('');
reverseString(str);
reverseWords(str);
console.log(str.join(''));
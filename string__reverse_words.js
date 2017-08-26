function reverseWords(str) {
    let buff = [],
        l = str.length,
        tokenReadPos = l - 1;

    while (tokenReadPos >= 0) {
        if (str[tokenReadPos] === ' ') {
            buff.push(str[tokenReadPos--]);
        } else {
            let wordEnd = tokenReadPos;
            while (tokenReadPos >= 0 && str[tokenReadPos] !== ' ')
                tokenReadPos--;
            let wordReadPos = tokenReadPos + 1;
            while (wordReadPos <= wordEnd)
                buff.push(str[wordReadPos++]);
        }
    }

    return buff.join('');
}

console.log(reverseWords('Do or do not, there is no try.'));

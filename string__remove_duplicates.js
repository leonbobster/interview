console.log(
    Object.keys(
        'foobarbrarorr'
            .split('')
            .reduce((x, y) => { x[y] = 1; return x; }, {})
    )
        .join('')
);

function removeDuplicates(chars) {
    let i = 1,
        j = 1;

    while (i < chars.length) {
        if (chars[i] !== chars[i - 1]) {
            chars[j] = chars[i];
            j++;
        }
        i++;
    }

    return chars.slice(0, j);
}

let chars = 'foobar'.split('');
chars.sort();
console.log(removeDuplicates(chars).join(''));
function merge(left, right) {
    let i = 0,
        j = 0,
        k = 0,
        result = [];

    while (i < left.length && j < right.length) {
        result[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }

    while (i < left.length)
        result[k++] = left[i++];

    while (j < right.length)
        result[k++] = right[j++];

    return result;
}

function mergeSortSimple(data) {
    if (data.length < 2)
        return data;

    const mid = Math.round(data.length / 2);
    const left = mergeSortSimple(data.slice(0, mid));
    const right = mergeSortSimple(data.slice(mid));

    return merge(left, right);
}

console.log(mergeSortSimple([3, 1, 18, 22, 4, 7, 5]));
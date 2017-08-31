function merge(left, right) {
    let i = j = k = 0,
        result = [];

    while (i < left.length && j < right.length) {
        result[k++] = left[i] < right[j] ? left[i++] : right[j++];
    }

    while (i < left.length) result[k++] = left[i++];
    while (j < right.length) result[k++] = right[j++];

    return result;
}

function mergeSortSimple(data) {
    if (data.length < 2) return data;

    let mid = Math.round(data.length / 2);
    let left = data.slice(0, mid);
    let right = data.slice(mid);

    left = mergeSortSimple(left);
    right = mergeSortSimple(right);

    return merge(left, right);
}

console.log(mergeSortSimple([3, 1, 18, 22, 4, 7, 5]));
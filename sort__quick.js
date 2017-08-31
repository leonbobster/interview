function quickSort(data) {
    if (data.length < 2)
        return data;
    const pivot = Math.round(data.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < data.length; i++) {
        if (i === pivot) continue;
        if (data[i] < data[pivot]) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return left.concat([data[pivot]], right);
}

console.log(quickSort([3, 6, 1, 72, 12, 4, 2]))
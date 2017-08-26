function selectionSortRecursive(data, start) {
    if (start === undefined) start = 0;
    if (start < data.length) {
        swap(data, start, findMinIndex(data, start));
        selectionSortRecursive(data, start + 1);
    }
}

function findMinIndex(data, start) {
    let min = start;
    for (i = start + 1; i < data.length; i++) {
        if (data[i] < data[min]) {
            min = i;
        }
    }
    return min;
}

function swap(data, i1, i2) {
    if (i1 !== i2) {
        [data[i1], data[i2]] = [data[i2], data[i1]];
    }
}

let data = [3, 5, 2, 4, 1, -3, 100];
selectionSortRecursive(data);
console.log(data);
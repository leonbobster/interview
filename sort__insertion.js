function insertionSort(data) {
    for (let curr = 1; curr < data.length; curr++) {
        let val = data[curr];
        let j;
        for (j = curr - 1; j >= 0 && val < data[j]; j--) {
            data[j + 1] = data[j];
        }
        data[j + 1] = val;
    }
    return data;
}

console.log(insertionSort([14, 3, 5, 1, 2]));
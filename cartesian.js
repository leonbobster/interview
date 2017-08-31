// Generate all combinations of array elements:
function* cartesian(head, ...tail) {
    let remainder = tail.length ? cartesian(...tail) : [[]];
    for (let r of remainder) {
        for (let h of head) {
            yield [h, ...r];
        }
    }
}

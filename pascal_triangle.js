function pascal(n) {
    let prev;
    for (let i = 0; i < n; i++) {
        let curr = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i)
                curr.push(1);
            else if (i > 1) {
                curr.push(prev[j - 1] + prev[j]);
            }
        }
        process.stdout.write(curr.join(' ') + '\n');
        prev = curr;
    }
}

pascal(10);



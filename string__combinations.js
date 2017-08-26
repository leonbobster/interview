function Combinations(str) {
    this.in = str;
}

Combinations.prototype.out = [];
Combinations.prototype.combine = function (start) {
    if (start === undefined) {
        start = 0;
    }
    for (let i = start; i < this.in.length; ++i) {
        this.out.push(this.in.charAt(i));
        console.log(this.out.join(''));
        if (i < this.in.length) {
            this.combine(i + 1);
        }
        this.out.pop();
    }
};

new Combinations('wxyz').combine();
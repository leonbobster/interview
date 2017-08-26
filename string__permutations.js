function Permutations(str) {
    this.in = str;
}

Permutations.prototype.used = [];
Permutations.prototype.out = [];
Permutations.prototype.permute = function () {
    console.log(this.out, this.used)
    if (this.out.length === this.in.length) {
        console.log(this.out.join(''));
        return;
    }
    for (let i = 0; i < this.in.length; i++) {
        if (this.used[i]) continue;
        this.out.push(this.in.charAt(i));
        this.used[i] = true;
        this.permute();
        this.used[i] = false;
        this.out.pop();
    }

    console.log(this.out, this.used);
};

let p = new Permutations('ab');
p.permute();
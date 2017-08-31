class Permutations {
    constructor(input) {
        this.input = input;
        this.used = Array(input.length).fill(false);
        this.output = '';
    }

    permute() {
        if (this.output.length === this.input.length) {
            console.log(this.output);
            return;
        }
        for (let i = 0; i < this.input.length; i++) {
            if (this.used[i] === false) {
                this.output += this.input[i];
                this.used[i] = true;
                this.permute();
                this.used[i] = false;
                this.output = this.output.slice(0, -1);
            }
        }
    }
}

const p = new Permutations('abcd');
p.permute();
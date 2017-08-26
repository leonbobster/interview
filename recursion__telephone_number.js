function TelephoneNumber(phoneNum) {
    this.phoneNum = phoneNum;
}

TelephoneNumber.prototype.result = [];
TelephoneNumber.prototype.PHONE_NUMBER_LENGTH = 7;
TelephoneNumber.prototype.printWords = function (curDigit) {
    if (curDigit === undefined) curDigit = 0;
    if (curDigit === this.PHONE_NUMBER_LENGTH) {
        console.log(this.result.join(''));
        return;
    }
    for (let i = 1; i <= 3; ++i) {
        this.result[curDigit] = this.getCharKey(this.phoneNum[curDigit], i);
        this.printWords(curDigit + 1);
        if (
            this.phoneNum[curDigit] === 0
            || this.phoneNum[curDigit] === 1
        ) {
            return;
        }
    }
};
TelephoneNumber.prototype.getCharKey = function (telephoneKey, place) {
    if (telephoneKey === 0 || telephoneKey === 1) {
        return telephoneKey.toString();
    }
    const keys = {
        2: ['A', 'B', 'C'],
        3: ['D', 'E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y']
    };
    return keys[telephoneKey][place];
};

new TelephoneNumber([1, 2, 3, 4, 5, 6, 7]).printWords();
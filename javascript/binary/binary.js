class Binary {
    constructor(numStr) {
        this.numStr = numStr;
    }

    toDecimal() {
        if (!this.numStr.match(Binary.VALIDATE_REG)) {
            return 0;
        }
            
        let decimal = Number.parseInt(this.numStr, 2);

        return decimal;
    }
}

Binary.VALIDATE_REG = /^[01]+$/

module.exports = Binary;

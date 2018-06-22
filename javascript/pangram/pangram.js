

class Pangram {
    
    constructor (sentence) {
        this.sentence = sentence;
    }

    isPangram() {
        let alphabetSet = this.generateAlphabetSet();
        this.sentence.toLowerCase()
            .split('')
            .forEach(char => {
                alphabetSet.delete(char);
            });

        return alphabetSet.size === 0;
    }

    generateAlphabetSet() {
        return new Set('abcdefghijklmnopqrstuvwxyz'.split(''))
    }
}

module.exports = Pangram;

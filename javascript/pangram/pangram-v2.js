// regex + set version

class Pangram {
    constructor (sentence) {
        this.sentence = sentence;
    }

    isPangram() {
        let lower = this.sentence.toLowerCase();
        let alphabetOnly = lower.replace(/[^a-z]/gi, '');
        let uniqueLetterSet = new Set(alphabetOnly.split(''));

        return uniqueLetterSet.size === 26;
    }
}

module.exports = Pangram;

class Bob {
    hey(sentence) {
        let answer = '';
        if (this.isYell(sentence) && this.isQuestion(sentence)) {
            answer = `Calm down, I know what I'm doing!`;
        } else if (this.isYell(sentence)) {
            answer = 'Whoa, chill out!';
        } else if (this.isQuestion(sentence)) {
            answer = 'Sure.';
        } else if (this.isSilence(sentence)) {
            answer = 'Fine. Be that way!';
        } else {
            answer = 'Whatever.';
        }

        return answer;
    }

    isQuestion(sentence) {
        return sentence.replace(/\s/g, '').endsWith('?');
    }

    isYell(sentence) {
        let letterOnly = sentence.replace(/[^a-z]/gi, '');
        if (letterOnly.length === 0) {
            return false;
        }

        let haslowerCaseLetter = letterOnly.match(/[a-z]/) !== null;
        if (haslowerCaseLetter) {
            return false;
        }

        return true;
    }

    isSilence(sentence) {
        let withoutBlank = sentence.replace(/\s/g, '');

        return withoutBlank.length === 0;
    }
}

module.exports = Bob;

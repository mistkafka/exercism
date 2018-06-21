const BEGIN_CHAR_CODE = 'a'.charCodeAt(0);
const COUNT_OF_ALPHABET = 26;
let alphabet_mapping = {}


for (let i = 0; i < COUNT_OF_ALPHABET; i++) {
    let alphabet = String.fromCharCode(BEGIN_CHAR_CODE + i);
    let alphabet_index = i;
    
    alphabet_mapping[alphabet] = alphabet_index;
    alphabet_mapping[alphabet_index] = alphabet;
}

class Cipher {
    constructor(key = Cipher.randomKey()) {
        if (typeof key !== 'string') {
            throw Error('Bad key');
        }
        
        if (key === '') {
            throw Error('Bad key');
        }
        
        if (key.match(Cipher.INVALID_KEY_CHAR_REG)) {
            throw Error('Bad key');
        }

        this.key = key;
    }

    static randomKey() {
        let arr = Array(Cipher.MIN_RANDOM_KEY_LENGTH);
        for (let i = 0; i < arr.length; i++) {
            let randomIndex = Number.parseInt(Math.random() * 100) % COUNT_OF_ALPHABET;
            let randomAlphabet = alphabet_mapping[randomIndex];

            arr[i] = randomAlphabet;
        }

        return arr.join('');
    }

    encode(plaintext) {
        return this.doCoding(plaintext, 'encode');
    }

    decode(ciphetext) {
        return this.doCoding(ciphetext, 'decode');
    }

    doCoding(text, operate) {
        return text
            .split('')
            .map((currChar, index) => {
                let currKeyChar = this.key[index % this.key.length];
                
                let currCharIndex = alphabet_mapping[currChar];
                let currKeyCharIndex = alphabet_mapping[currKeyChar];
                
                let codedIndex = null;
                if (operate === 'encode') {
                    codedIndex = currCharIndex + currKeyCharIndex;
                } else {
                    codedIndex = currCharIndex - currKeyCharIndex;
                }
                
                codedIndex = codedIndex % COUNT_OF_ALPHABET;
                if (codedIndex < 0) {
                    codedIndex = codedIndex + COUNT_OF_ALPHABET;
                }
                
                let codedChar = alphabet_mapping[codedIndex];

                return codedChar;
            })
            .join('');
    }
}

Cipher.MIN_RANDOM_KEY_LENGTH = 100;
Cipher.INVALID_KEY_CHAR_REG = /[^a-z]/;

module.exports = Cipher;

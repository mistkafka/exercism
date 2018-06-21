
class DnaTranscriber {
    
    toRna(DNA) {
        if (typeof DNA !== 'string') {
            throw new Error('Invalid input');
        }
        if (DNA.match(DnaTranscriber.INVALID_DNA_REG)) {
            throw new Error('Invalid input');
        }

        return DNA.split('').map(sign => DnaTranscriber.TO_RNA_MAPPING[sign]).join('');
    }
}

DnaTranscriber.INVALID_DNA_REG = /[^CGAT]/;

DnaTranscriber.TO_RNA_MAPPING = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
};

module.exports = DnaTranscriber;

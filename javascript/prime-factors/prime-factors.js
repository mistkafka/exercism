const MAX_PRIME = 1e7;

function getPrimes(max) {
    max = Number.parseInt(max);
    const mark = Array(max + 1).fill(true);
    mark[0] = false;
    mark[1] = false;

    let sieveNum = 2;

    while(sieveNum * sieveNum <= max) {

        // mark sieved number
        let index = 2;
        while(index * sieveNum <= max) {
            mark[index * sieveNum] = false;
            index = index + 1;
        }

        // get next sieve number
        for (i = sieveNum + 1; i < max; i++) {
            if (mark[i]) {
                sieveNum = i;
                break;
            }
        }
    }

    const primes = mark.map((isPrime, num) => {
        if (isPrime) {
            return num;
        } else {
            return false;
        }
    }).filter((item) => {
        if (item === false) {
            return false;
        } else {
            return true;
        }
    });

    return primes;
}

const PRIMES_TABLE = getPrimes(MAX_PRIME);

function findFirstDivisibleFactor(num) {
    let index = 0;
    while(PRIMES_TABLE[index] <= num) {
        let factor = PRIMES_TABLE[index];
        if (num % factor === 0) {
            return factor;
        } else {
            index = index + 1;
        }
    }

    return false;
}

function getFactors(num) {
    const minFactor = findFirstDivisibleFactor(num);

    if (minFactor === false) {
        return [];
    }

    if (minFactor === num) {
        return [num];
    } else {
        return [minFactor, ...getFactors(num / minFactor)];
    }
}

const primeFactors = {
    for (num) {
        return getFactors(num);
    }
}

module.exports = primeFactors;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('寻找多少以内的素数？', (max) => {

    max = Number.parseInt(max);
    const mark = Array(max + 1).fill(true);
    mark[0] = false;
    mark[1] = false;

    let sieveNum = 2;

    while(sieveNum * sieveNum <= max) {
        let index = 2;
        while(index * sieveNum <= max) {
            mark[index * sieveNum] = false;
            index = index + 1;
        }

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

    console.log(`${max}以内素数共计${primes.length}个，分别是：`);
    primes.forEach((prime) => {
        console.log(prime);
    });

  rl.close();
});

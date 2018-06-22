class Gigasecond {
    constructor(birthday) {
        this.birthday = birthday;
    }

    date() {
        let targetTime = this.birthday.getTime() + Gigasecond.gigasecond * 1e3;

        return new Date(targetTime);
    }
}

Gigasecond.gigasecond = 1e9;

module.exports = Gigasecond;

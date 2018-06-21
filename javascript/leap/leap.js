//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
//
// YOUR CODE GOES HERE
    //
    this.year = year;
};

Year.prototype.isLeap = function () {
//
// YOUR CODE GOES HERE
    //
    let year = this.year;
    
    if (year % 400 === 0) {
        return true;
    }

    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }

    return false;
};

module.exports = Year;

const numbered = require('numbered');

const units = {};
units.second = 1000;
units.minute = units.second * 60;
units.hour = units.minute * 60;
units.day = units.hour * 24;
units.week = units.day * 7;
units.month = units.day * 30;
units.year = units.day * 365;

const regexp = /(second|minute|hour|day|week|month|year)s?/;

const humanInterval = time => {
  if (!time || typeof time === 'number') {
    return time;
  }

  let result = 0;

  time = time.replace(/([^a-z0-9.-]|and)+/g, ' ');

  for (;;) {
    const match = time.match(regexp);
    if (!match) {
      return result;
    }
    const matchedNumber = time.substring(0, match.index).trim();
    const unit = units[match[1]];
    let number = 1;
    if (matchedNumber.length !== 0) {
      number = parseFloat(matchedNumber);
      if (isNaN(number)) {
        number = numbered.parse(matchedNumber);
      }
    }
    result += number * unit;
    time = time.substring(match.index + match[0].length);
  }
};

module.exports = humanInterval;

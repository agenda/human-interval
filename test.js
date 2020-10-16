const test = require('ava');
const humanInterval = require('.');

const macro = (t, inputs, expected) => {
  inputs = Array.isArray(inputs) ? inputs : [inputs];
  inputs.forEach(input => t.is(humanInterval(input), expected));
};

const units = {};
units.second = 1000;
units.minute = units.second * 60;
units.hour = units.minute * 60;
units.day = units.hour * 24;
units.week = units.day * 7;
units.month = units.day * 30;
units.year = units.day * 365;

const timeUnits = [
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year'
];

const englishNumbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten'
];

// Invalid values:
test('Returns undefined when given undefined', macro, undefined, undefined);
test('Returns null when given null', macro, null, null);
test('Returns empty string when given empty string', macro, '', '');
test('Returns NaN when given unknown string', macro, 'foobar', Number.NaN);

// Single values
test('Returns the number when given a number', macro, 5000, 5000);
test('Understands numbers', macro, '2 seconds', 2 * units.second);
test('Understands decimals', macro, '2.5 seconds', 2.5 * units.second);
test('Understands long decimals', macro, '2.5555 seconds', 2.5555 * units.second);

// Understands time base units without numbers
// i.e. "second === 1000"
timeUnits.forEach(unit => {
  test(
    'Understands "' + unit + '" without number',
    macro,
    unit,
    Number(units[unit])
  );
});

// Understands time base units in singular
// i.e. "1 second === 1000"
timeUnits.forEach(unit => {
  test(
    'Understands "1 ' + unit + '"',
    macro,
    '1 ' + unit,
    Number(units[unit])
  );
});

// Understands time base units in plural
// i.e. "2 seconds === 2000"
timeUnits.forEach(unit => {
  test(
    'Understands ' + unit + 's in plural',
    macro,
    '2 ' + unit + 's',
    2 * Number(units[unit])
  );
});

// Understands time base units in decimals values
// i.e. "1.5 seconds === 1500"
timeUnits.forEach(unit => {
  test(
    'Understands ' + unit + 's in decimals',
    macro,
    '1.5 ' + unit + 's',
    1.5 * Number(units[unit])
  );
});

// English numbers
// i.e. "one second === 1000"
englishNumbers.forEach((number, i) => {
  test(
    'Understands english number ' + number,
    macro,
    number + ' seconds',
    (i + 1) * units.second
  );
});

// Understands negative numbers
// i.e. "-2 seconds === -2000"
timeUnits.forEach(unit => {
  test(
    'Understands negative ' + unit + 's',
    macro,
    '-2 ' + unit + 's',
    -2 * Number(units[unit])
  );
});

// Mixed
test('Understands mixed units', macro, '3 minutes and 30 seconds', (3 * units.minute) + (30 * units.second));
test('Understands mixed time expressions with plurals', macro, ['three minutes and 30 seconds', 'three minutes 30 seconds'], (3 * units.minute) + (30 * units.second));
test('Understands mixed time expressions with singulars', macro, ['one minute and 1 second', 'one minute 1 second'], units.minute + units.second);
test('Understands 2 digit english numbers', macro, 'thirty three seconds', 33 * units.second);
test('Understands mix units + multi digit english numbers', macro, 'hundred and three seconds and twelve minutes', (103 * units.second) + (12 * units.minute));
test('Understands hyphenated numbers', macro, 'three hundred and twenty-five seconds', (325 * units.second));

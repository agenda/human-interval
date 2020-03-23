const humanInterval = require('.');
const test = require('ava');

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

test('returns the number when given a number', macro, 5000, 5000);
test('returns undefined when given undefined', macro, undefined, undefined);
test('does not require a number', macro, 'week', units.week);
test('understands seconds', macro, '1 second', units.second);
test('understands minutes', macro, '1 minute', units.minute);
test('understands hours', macro, '1 hour', units.hour);
test('understands days', macro, '1 day', units.day);
test('understands weeks', macro, '1 week', units.week);
test('understands months', macro, '1 month', units.month);
test('understands years', macro, '1 year', units.year);
test('understands numbers', macro, '2 seconds', 2 * units.second);
test('understands decimals', macro, '2.5 seconds', 2.5 * units.second);
test('understands english numbers', macro, 'two seconds', 2 * units.second);
test('understands negative numbers', macro, '-2 seconds', -2 * units.second);
test('works with mixed units', macro, '3 minutes and 30 seconds', (3 * units.minute) + (30 * units.second));
test('works with mixed time expressions', macro, ['three minutes and 30 seconds', 'three minutes 30 seconds'], (3 * units.minute) + (30 * units.second));
test('Understands 2 digit english numbers', macro, 'thirty three seconds', 33 * units.second);
test('mix units + multi digit english numbers', macro, 'hundred and three seconds and twelve minutes', (103 * units.second) + (12 * units.minute));

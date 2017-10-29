const test = require('ava');
const humanInterval = require('.');

const macro = (t, inputs, expected) => {
  inputs = Array.isArray(inputs) ? inputs : [inputs];
  inputs.forEach(input => t.is(humanInterval(input), expected));
};

test('returns the number when given a number', macro, 5000, 5000);
test('returns undefined when given undefined', macro, undefined, undefined);
test('does not require a number', macro, 'week', 7 * 86400000);
test('understands seconds', macro, '1 second', 1000);
test('understands minutes', macro, '1 minute', 60000);
test('understands hours', macro, '1 hour', 3600000);
test('understands days', macro, '1 day', 86400000);
test('understands weeks', macro, '1 week', 7 * 86400000);
test('understands months', macro, '1 month', 30 * 86400000);
test('understands years', macro, '1 year', 31536000000);
test('understands numbers', macro, '2 seconds', 2000);
test('understands decimals', macro, '2.5 seconds', 2500);
test('understands english numbers', macro, 'two seconds', 2000);
test('works with mixed units', macro, '3 minutes and 30 seconds', 210000);
test('works with mixed time expressions', macro, ['three minutes and 30 seconds', 'three minutes 30 seconds'], 210000);

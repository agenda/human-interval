# Human Interval
Human-readable interval parser for Javascript.

Converts words written in English to numbers by using [node-numbered](https://github.com/blakeembrey/node-numbered).

Originally inspired by [matthewmueller/date](http://github.com/matthewmueller/date).

## Uses

Human Interval is used by job scheduling libraries such as [Agenda](https://github.com/Agenda/agenda#readme) and [Bree](https://jobscheduler.net). They are a job schedulers for Node.js with cron expression syntax, human-friendly times, Dates, and more!

## Example usage

```js
const humanInterval = require('human-interval');

setTimeout(() => {
  // Do something!
}, humanInterval('three minutes'));
```

## More sophisticated examples

Human Interval understands all of the following examples:

```js
humanInterval('minute');
humanInterval('one minute');
humanInterval('1.5 minutes');
humanInterval('3 days and 4 hours');
humanInterval('3 days, 4 hours and 36 seconds');
humanInterval('4 months, 3 days, 5 hours and forty-five seconds');
```

## The full list

### Units

Supports the following units in the plural and singular forms:

- `seconds`
- `minutes`
- `hours`
- `days`
- `weeks`
- `months` — assumes 30 days
- `years` — assumes 365 days

### Wordy numbers

Supports numbers being written out in English words.

```js
humanInterval('five minutes');
```

### Hyphenated numbers

Supports hyphenated numbers.

```js
humanInterval('twenty-five seconds');
```

### Negative numbers

Supports negative numbers if the time starts with a `-` symbol immediately followed by a number.

```js
humanInterval('-2 minutes');
```

# License
[The MIT License](LICENSE.md)

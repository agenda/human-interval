# Human Interval
Human readable interval parser for Javascript.

Heavily inspired by
[matthewmueller/date](http://github.com/matthewmueller/date).

This package converts words written in english to numbers by using [node-numbered](https://github.com/blakeembrey/node-numbered).


## Example Usage

```js
const humanInterval = require('human-interval');

setTimeout(() => {
  // Do something crazy!
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

### Supported Units

Human Interval supports the following units

- `seconds`
- `minutes`
- `hours`
- `days`
- `weeks`
- `months` -- assumes 30 days
- `years` -- assumes 365 days

### Wordy Numbers

Human Interval supports numbers being written out in English words.

```js
humanInterval('five minutes');
```

### Hyphenated Numbers

Human Interval supports hyphenated numbers.

```js
humanInterval('twenty-five seconds');
```

### Negative Numbers

Human Interval supports negative numbers if the time starts with a `-` symbol immediately followed by a number.

```js
humanInterval('-2 minutes');
```

# License
[The MIT License](LICENSE.md)

# Human Interval
Human readable interval parser for Javascript.

Heavily inspired by
[matthewmueller/date](http://github.com/matthewmueller/date).

**If you'd like to use this for job scheduling, then check out [Bree](https://jobscheduler.net).  Bree is a job scheduler for Node.js with built-in support for workers, cron expression syntax, human-friendly times, Dates, and more.**

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
humanInterval('one minute');
humanInterval('1.5 minutes');
humanInterval('3 days and 4 hours');
humanInterval('3 days, 4 hours and 36 seconds');
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

Human Interval supports English numbers being written out in English by using [node-numbered](https://github.com/blakeembrey/node-numbered).

# License
[The MIT License](LICENSE.md)

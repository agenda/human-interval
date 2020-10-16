# Human Interval
Human readable interval parser for Javascript.

Heavily inspired by [matthewmueller/date](http://github.com/matthewmueller/date).

## Uses

Human Interval is used by job scheduling libraries such as [Agenda](https://github.com/Agenda/agenda#readme) and [Bree](https://jobscheduler.net). They are a job schedulers for Node.js with cron expression syntax, human-friendly times, Dates, and more!

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
- `months` — assumes 30 days
- `years` — assumes 365 days

### Wordy Numbers

Human Interval supports numbers up to ten being written out in English. If you
want to extend it, you can do so by adding more keys to the language map.
Alternatively you could add support for alternative languages.

```js
const humanInterval = require('human-interval');
humanInterval.languageMap['one-hundred'] = 100

// Adds support for the following:
humanInterval('one-hundred and fifty seconds') // returns 150000
```

# License
[The MIT License](LICENSE.md)

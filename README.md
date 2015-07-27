# Human Interval
Human readable interval parser and formatter for Node.js/the browser.

Heavily inspired by
[matthewmueller/date](http://github.com/matthewmueller/date).


## Example Usage

```js
var humanInterval = require('human-interval');

setTimeout(function() {
  // Do something crazy!
}, humanInterval.human('three minutes'));

```

```js
var humanInterval = require('human-interval');

var timeout = 124000;

setTimeout(function() {
  // Do something crazy!
}, timeout);

console.log("The action will be taken in " + humanInterval.machine(timeout));

```

## More sophisticated examples

humanInterval understands all of the following examples:

```js
humanInterval.human('one minute');
humanInterval.human('1.5 minutes');
humanInterval.human('3 days and 4 hours');
humanInterval.human('3 days, 4 hours and 36 seconds');
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

You can access and modify this list through `humanInterval.units`. For example, you could do this to support customized units, or to localize names.

### Wordy Numbers

Human Interval supports numbers up to ten being written out in English. If you
want to extend it, you can do so by adding more keys to the language map.
Alternatively you could add support for alternative languages.

```js
var humanInterval = require('human-interval');
humanInterval.languageMap['one-hundred'] = 100

// Adds support for the following:
humanInterval('one-hundred and fifty seconds') // returns 150000
```

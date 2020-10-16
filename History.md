2.0.0 / 2020-10-16
==================

* [Refactor](https://github.com/agenda/human-interval/pull/37) human interval using [numbered](https://www.npmjs.com/package/numbered) package. Thank you @sampathBlam and @alFReD-NSH for your contributions!
  - Supports all the formats as previously, and more!
  - Supports numbers written as English words (one, two hundred)
  - Supports time expressions in singular and plural (minute and minutes)
  - Supports negative numbers (-2)
  - Supports hyphenated words (twenty-five)
* Updated dev dependencies.
* Added more tests.

**Breaking**

* Stopped testing Node.js 8 — might still work of course. We're now testing for Node.js v10, v12, and v14.

1.0.0 / 2019-11-24
==================

**Breaking**

* Remove Component.js support — this tool has not been maintained since 2015 https://github.com/agenda/human-interval/pull/10
* Drop Node.js 4, 5, and 6 support — might still work but we're not testing for these anymore

**Internal development tooling**

* Update development dependencies
* Add MIT license
* Switch testing framework to Ava from Mocha https://github.com/agenda/human-interval/pull/16
* Use XO for linting

0.1.6 / 2016-05-11
==================

* Fix bug for invalid input strings.

0.1.5 / 2015-07-30
==================

* Fixed a bug with commas, all tests are now passing.

0.1.4 / 2014-04-06
==================

* Add support for number omission.

0.1.3 / 2014-01-04
==================

* Added support for months.

0.1.2 / 2014-01-03
==================

* Added support for 'week' unit.

0.1.1 / 2013-10-28
==================

* Added better undefined handling.

0.1.0 / 2013-10-25
==================

* Initial Release.

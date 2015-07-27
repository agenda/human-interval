var expect = require('expect.js'),
    humanInterval = require('../index.js');

describe('Human Interval', function() {
  it("returns the number when given a number", function() {
    expect(humanInterval.human(5000)).to.be(5000);
  });

  it("returns undefined when given undefined", function() {
    expect(humanInterval.human(undefined)).to.be(undefined);
  });

  it('does not require a number', function() {
      expect(humanInterval.human('week')).to.be(7 * 86400000);
  });

  describe('basic units', function() {
    it('understands seconds', function() {
      expect(humanInterval.human('1 second')).to.be(1000);
    });
    it('understands minutes', function() {
      expect(humanInterval.human('1 minute')).to.be(60000);
    });
    it('understands hours', function() {
      expect(humanInterval.human('1 hour')).to.be(3600000);
    });
    it('understands days', function() {
      expect(humanInterval.human('1 day')).to.be(86400000);
    });
    it('understands weeks', function() {
      expect(humanInterval.human('1 week')).to.be(7 * 86400000);
    });
    it('understands months', function() {
      expect(humanInterval.human('1 month')).to.be(30 * 86400000);
    });
    it('understands years', function() {
      expect(humanInterval.human('1 year')).to.be(31536000000);
    });
  });

  describe("basic numbers", function() {
    it("understands numbers", function() {
      expect(humanInterval.human('2 seconds')).to.be(2000);
    });

    it("understands decimals", function() {
      expect(humanInterval.human('2.5 seconds')).to.be(2500);
    });
  });

  describe("english numbers", function() {
    it("understands numbers", function() {
      expect(humanInterval.human("two seconds")).to.be(2000);
    });
  });

  describe("mixes", function() {
    it("works with long numbers", function() {
      expect(humanInterval.human('3 minutes and 30 seconds')).to.be(210000);
    });

    it("works with mixed units", function() {
      expect(humanInterval.human('3 minutes and 30 seconds')).to.be(210000);
    });

    it("works with mixed time expressions", function() {
      expect(humanInterval.human('three minutes and 30 seconds')).to.be(210000);
      expect(humanInterval.human('three minutes 30 seconds')).to.be(210000);
    });
  });
});


describe('Machine Interval', function() {

  it("returns undefined when given undefined", function() {
    expect(humanInterval.machine(undefined)).to.be(undefined);
  });

  describe('basic units', function() {
    it('outputs seconds', function() {
      expect(humanInterval.machine(1000)).to.be('one second');
    });
    it('outputs minutes', function() {
      expect(humanInterval.machine(60000)).to.be('one minute');
    });
    it('outputs hours', function() {
      expect(humanInterval.machine(3600000)).to.be('one hour');
    });
    it('outputs days', function() {
      expect(humanInterval.machine(86400000)).to.be('one day');
    });
    it('outputs weeks', function() {
      expect(humanInterval.machine(7 * 86400000)).to.be('one week');
    });
    it('outputs months', function() {
      expect(humanInterval.machine(30 * 86400000)).to.be('one month');
    });
    it('outputs years', function() {
      expect(humanInterval.machine(31536000000)).to.be('one year');
    });
  });

  describe("basic numbers", function() {
    it("outputs numbers", function() {
      expect(humanInterval.machine(2000)).to.be('two seconds');
      expect(humanInterval.machine(
        10*humanInterval.units.year  +
        9*humanInterval.units.month +
        3*humanInterval.units.week  +
        2*humanInterval.units.day   +
        8*humanInterval.units.hour  +
        7*humanInterval.units.minute+
        5*humanInterval.units.second
      )).to.be('ten years, nine months, three weeks, two days, eight hours, seven minutes, five seconds');
    });
  });
});

function consistencyTest(val) {
  expect(humanInterval.human(humanInterval.machine(val))).to.be(val);
}

describe('Consistency of .human(.machine())', function() {

  /* If .human(.machine(val)) equals val, then the library produces output
   *  that it can parse, as well as being consistent in handling values.
   */

  it("returns undefined when given undefined", function() {
    consistencyTest(undefined);
  });

  describe('basic units', function() {
    it('handles seconds', function() {
      consistencyTest(1000);
    });
    it('handles minutes', function() {
      consistencyTest(60000);
    });
    it('handles hours', function() {
      consistencyTest(3600000);
    });
    it('handles days', function() {
      consistencyTest(86400000);
    });
    it('handles weeks', function() {
      consistencyTest(7 * 86400000);
    });
    it('handles months', function() {
      consistencyTest(30 * 86400000);
    });
    it('handles years', function() {
      consistencyTest(31536000000);
    });
  });

  describe("basic numbers", function() {
    it("handles numbers", function() {
      consistencyTest(2000);
      consistencyTest(
        10*humanInterval.units.year  +
        9*humanInterval.units.month +
        3*humanInterval.units.week  +
        2*humanInterval.units.day   +
        8*humanInterval.units.hour  +
        7*humanInterval.units.minute+
        5*humanInterval.units.second
      );
    });
  });
});
const validate = require('./../index.js');

describe('ArrayOf', () => {
  test('is array', () => {
    expect(validate.check({
      interests: validate.arrayOf(validate.string)
    }, {
      interests: 'not array'
    }).success).toBe(false);
  });

  test('is array required', () => {
    expect(validate.check({
      interests: validate.arrayOf(validate.string)
    }, {
      interests: []
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.string).isRequired
    }, {
      interests: []
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.string).isRequired
    }, {
      interests: ['lorem']
    }).success).toBe(true);
  });

  test('is array of string', () => {
    expect(validate.check({
      interests: validate.arrayOf(validate.string)
    }, {
      interests: ['sport', 'football']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.length(4, 8))
    }, {
      interests: ['sport', 'football']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.length(4, 8))
    }, {
      interests: ['sport', 'skysurfing']
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.oneOf(['music', 'films', 'sport', 'games'])).length(2)
    }, {
      interests: ['music', 'films']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.isRequired).length(2)
    }, {
      interests: []
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.isRequired).length(2)
    }, {
      interests: ['', '']
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.isRequired).length(2)
    }, {
      interests: ['test', '']
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.string.isRequired).length(2)
    }, {
      interests: ['test', 'test2']
    }).success).toBe(true);
  });

  test('is array of number', () => {
    expect(validate.check({
      interests: validate.arrayOf(validate.number)
    }, {
      interests: ['1', '2', '3']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.number)
    }, {
      interests: ['lorem']
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.number.range(10, 50))
    }, {
      interests: ['12', '19', '25']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.number.range(70, 80))
    }, {
      interests: ['10']
    }).success).toBe(false);
  });

  test('array length', () => {
    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(5)
    }, {
      interests: ['12', '19', '25']
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(5)
    }, {
      interests: ['12', '19', '25', '30', '22']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(5)
    }, {
      interests: ['12', '19', '25', '30', '22', '71']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(2, 3)
    }, {
      interests: ['12']
    }).success).toBe(false);

    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(2, 3)
    }, {
      interests: ['12', '22']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(2, 3)
    }, {
      interests: ['12', '22', '32']
    }).success).toBe(true);

    expect(validate.check({
      interests: validate.arrayOf(validate.number).length(2, 3)
    }, {
      interests: ['12', '22', '32', '42']
    }).success).toBe(false);
  });
});

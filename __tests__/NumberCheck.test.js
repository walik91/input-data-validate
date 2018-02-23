const validate = require('./../index.js');

describe('NumberCheck', () => {
  test('is number', () => {
    expect(validate.check({
      username: validate.number
    }, {
      username: 4
    }).success).toBe(true);

    expect(validate.check({
      username: validate.number
    }, {
      username: '99'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.number
    }, {
      username: 'lorem'
    }).success).toBe(false);
  });

  test('is required', () => {
    expect(validate.check({
      username: validate.number.isRequired
    }, {
      username: ''
    }).success).toBe(false);

    expect(validate.check({
      username: validate.number.isRequired
    }, {
      username: undefined
    }).success).toBe(false);
  });

  test('range', () => {
    expect(validate.check({
      age: validate.number.range(18, 99)
    }, {
      age: '25'
    }).success).toBe(true);

    expect(validate.check({
      age: validate.number.range(18, 99)
    }, {
      age: '15'
    }).success).toBe(false);

    expect(validate.check({
      age: validate.number.range(18, 99)
    }, {
      age: '125'
    }).success).toBe(false);

    expect(validate.check({
      age: validate.number.gt(22)
    }, {
      age: '33'
    }).success).toBe(true);

    expect(validate.check({
      age: validate.number.gt(50)
    }, {
      age: '33'
    }).success).toBe(false);

    expect(validate.check({
      age: validate.number.lt(99)
    }, {
      age: '56'
    }).success).toBe(true);

    expect(validate.check({
      age: validate.number.lt(25)
    }, {
      age: '31'
    }).success).toBe(false);
  });
});

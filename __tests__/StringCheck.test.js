const validate = require('./../index.js');

describe('StringCheck', () => {
  test('is string', () => {
    expect(validate.check({
      username: validate.string
    }, {
      username: 'lorem'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string
    }, {
      username: 4
    }).success).toBe(false);
  });

  test('is required', () => {
    expect(validate.check({
      username: validate.string.isRequired
    }, {
      username: 'lorem'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.isRequired
    }, {
      username: ''
    }).success).toBe(false);

    expect(validate.check({
      username: validate.string.isRequired
    }, {
      username: null
    }).success).toBe(false);
  });

  test('length', () => {
    expect(validate.check({
      username: validate.string.length(4, 10)
    }, {
      username: 'lorem'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.length(5, 10)
    }, {
      username: '1234'
    }).success).toBe(false);
  });

  test('equal', () => {
    expect(validate.check({
      username: validate.string.equal('lorem')
    }, {
      username: 'lorem'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.equal('lorem')
    }, {
      username: ''
    }).success).toBe(false);
  });

  test('oneOf', () => {
    expect(validate.check({
      username: validate.string.oneOf(['lorem', 'ipsum'])
    }, {
      username: 'lorem'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.oneOf(['lorem', 'ipsum'])
    }, {
      username: 'dolor'
    }).success).toBe(false);
  });
});


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

  test('is email', () => {
    expect(validate.check({
      username: validate.string.isEmail
    }, {
      username: 'some@gmail.com'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.isEmail
    }, {
      username: 'some@one@gmail.com'
    }).success).toBe(false);

    expect(validate.check({
      username: validate.string.isEmail
    }, {
      username: ''
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

  test('is custom', () => {
    expect(validate.check({
      username: validate.string.custom(value => value === 'lorem')
    }, {
      username: 'lorem'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.custom(value => value === 'lorem')
    }, {
      username: 'test'
    }).success).toBe(false);

    expect(validate.check({
      username: validate.string.custom(value => value === '')
    }, {
      username: ''
    }).success).toBe(true);
  });

  test('is/not', () => {
    expect(validate.check({
      username: validate.string.is(/^some test regexp$/i)
    }, {
      username: 'Some test regexp'
    }).success).toBe(true);

    expect(validate.check({
      username: validate.string.is(/^some test regexp$/i)
    }, {
      username: 'Lorem ipsum'
    }).success).toBe(false);

    expect(validate.check({
      username: validate.string.not(/^some test regexp$/i)
    }, {
      username: 'Some test regexp'
    }).success).toBe(false);

    expect(validate.check({
      username: validate.string.not(/^some test regexp$/i)
    }, {
      username: 'Lorem ipsum'
    }).success).toBe(true);
  });

  test('undefiend object', () => {
    expect(validate.check({
      username: validate.string.length(5, 10)
    }).success).toBe(false);
  });
});


const BaseCheck = require('./../BaseCheck.js');

class StringCheck extends BaseCheck {
  get isEmail() {
    return this.is(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }

  constructor() {
    super();

    this.checkList.push({
      name: 'main',
      args: []
    });
  }

  mainCheck(value) {
    return typeof value === 'string';
  }

  not(...args) {
    this.checkList.push({
      name: 'not',
      args
    });

    return this;
  }

  notCheck(value, regExp) {
    return !regExp.test(value);
  }

  is(...args) {
    this.checkList.push({
      name: 'is',
      args
    });

    return this;
  }

  isCheck(value, regExp) {
    return regExp.test(value);
  }

  length(...args) {
    this.checkList.push({
      name: 'length',
      args
    });

    return this;
  }

  lengthCheck(value, min, max) {
    return !(value.length < min || value.length > max);
  }

  equal(...args) {
    this.checkList.push({
      name: 'equal',
      args
    });

    return this;
  }

  equalCheck(value, template) {
    return template === value;
  }

  oneOf(...args) {
    this.checkList.push({
      name: 'oneOf',
      args
    });

    return this;
  }

  oneOfCheck(value, list) {
    return list.indexOf(value) >= 0;
  }
}

module.exports = StringCheck;

const BaseCheck = require('./../BaseCheck.js');

class StringCheck extends BaseCheck {
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

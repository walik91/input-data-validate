const BaseCheck = require('./../BaseCheck.js');

class ArrayOf extends BaseCheck {
  constructor(validate, rules) {
    super();

    this.validate = validate;
    this.rules = rules;

    this.checkList.push({
      name: 'main',
      args: []
    });
  }

  mainCheck(value) {
    if (!Array.isArray(value)) return false;

    let status = true;

    value.forEach((item) => {
      if (!this.validate.check({
        item: this.rules
      }, {
        item
      }).success) status = false;
    });

    return status;
  }

  required(value) {
    return this.lengthCheck(value, 1, Number.MAX_SAFE_INTEGER);
  }

  length(min, max) {
    const args = [min, max];

    if (typeof args[1] === 'undefined') {
      args[1] = Number.MAX_SAFE_INTEGER;
    }

    this.checkList.push({
      name: 'length',
      args
    });

    return this;
  }

  lengthCheck(value, min, max) {
    return !(value.length < min || value.length > max);
  }
}

module.exports = ArrayOf;

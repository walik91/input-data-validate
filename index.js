const StringCheck = require('./lib/StringCheck');
const NumberCheck = require('./lib/NumberCheck');
const ArrayOf = require('./lib/ArrayOf');

class InputDataValidate {
  get string() {
    return new StringCheck();
  }

  get number() {
    return new NumberCheck();
  }

  check(dataTypes, dataList = {}) {
    this.result = {
      success: true,
      invalid: []
    };

    Object.keys(dataTypes).forEach((field) => {
      if (!dataTypes[field].check(dataList[field])) {
        this.result.success = false;
        this.result.invalid.push(field);
      }
    });

    return this.result;
  }

  arrayOf(rules) {
    return new ArrayOf(this, rules);
  }
}

module.exports = new InputDataValidate();

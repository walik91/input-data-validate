const BaseCheck = require('./../BaseCheck.js');

class NumberCheck extends BaseCheck {
  constructor() {
    super();

    this.checkList.push({
      name: 'main',
      args: []
    });
  }

  mainCheck(value) {
    return !Number.isNaN(Number(value));
  }

  range(...args) {
    this.checkList.push({
      name: 'range',
      args
    });

    return this;
  }

  rangeCheck(value, min, max) {
    return !(value < min || value > max);
  }

  gt(min) {
    const args = [min + 1, Number.MAX_SAFE_INTEGER];

    this.checkList.push({
      name: 'range',
      args
    });

    return this;
  }

  lt(max) {
    const args = [Number.MIN_SAFE_INTEGER, max - 1];

    this.checkList.push({
      name: 'range',
      args
    });

    return this;
  }
}

module.exports = NumberCheck;

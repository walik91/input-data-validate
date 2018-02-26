class BaseCheck {
  get isRequired() {
    this.checkRequired = true;

    return this;
  }

  constructor() {
    this.checkList = [];
    this.checkRequired = false;
  }

  check(value) {
    let status = true;

    this.checkList.forEach((item) => {
      const args = [value, ...item.args];

      if (!this[`${item.name}Check`](...args)) {
        status = false;
      }
    });

    return status && (!this.checkRequired || (this.checkRequired && this.required(value)));
  }

  required(value) {
    return value !== '';
  }

  custom(...args) {
    this.checkList.push({
      name: 'custom',
      args
    });

    return this;
  }

  customCheck(value, callback) {
    return callback(value);
  }
}

module.exports = BaseCheck;

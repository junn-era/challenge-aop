const Account = require('./account');

class SalaryAccount extends Account {
  constructor(balance) {
    super(balance);
  }
}

module.exports = SalaryAccount;
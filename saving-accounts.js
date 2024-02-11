const Account = require('./account');

class SavingsAccount extends Account {
  constructor(balance) {
    super(balance);
  }
}

module.exports = SavingsAccount;
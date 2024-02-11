const Account = require('./account');

class CurrentAccount extends Account {
  constructor(balance) {
    super(balance);
  }
}

module.exports = CurrentAccount;


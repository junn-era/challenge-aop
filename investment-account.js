const Account = require('./account');

class InvestmentAccount extends Account {
  constructor(balance) {
    super(balance);
  }
}

module.exports = InvestmentAccount;
const SavingsAccount = require('./saving-accounts');
const BalanceAspect = require('./balance-aspect');

const WithdrawSavingsAccount = AspectJ.weave(SavingsAccount, BalanceAspect);

module.exports = WithdrawSavingsAccount;
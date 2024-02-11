const CurrentAccount = require('./current-account');
const BalanceAspect = require('./balance-aspect');

const WithdrawCurrentAccount = AspectJ.weave(CurrentAccount, BalanceAspect);

module.exports = WithdrawCurrentAccount;
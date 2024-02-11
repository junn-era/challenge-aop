const InvestmentAccount = require('./investment-account');
const BalanceAspect = require('./balance-aspect');

const WithdrawInvestmentAccount = AspectJ.weave(InvestmentAccount, BalanceAspect);

module.exports = WithdrawInvestmentAccount;
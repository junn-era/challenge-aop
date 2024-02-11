const SalaryAccount = require('./salary-account');
const BalanceAspect = require('./balance-aspect');

const WithdrawAccountSalary = AspectJ.weave(SalaryAccount, BalanceAspect);

module.exports = WithdrawAccountSalary;
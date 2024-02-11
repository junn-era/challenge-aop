const WithdrawCurrentAccount = require('./withdraw-current-account');
const WithdrawAccountSalary = require('./withdraw-account-salary');
const WithdrawSavingsAccount = require('./withdraw-savings-account');
const WithdrawInvestmentAccount = require('./withdraw-investment-account');

const currentAccount = new WithdrawCurrentAccount(1000);
currentAccount.saque(500); // Saldo insuficiente para realizar o saque

const salaryAccount = new WithdrawAccountSalary(1000);
salaryAccount.saque(500); // Saldo insuficiente para realizar o saque

const savingsAccount = new ContaPoupancaSaque(1000);
savingsAccount.saque(500); // Saldo insuficiente para realizar o saque

const investmentAccount = new ContaInvestimentoSaque(1000);
investmentAccount.saque(500); // Saldo insuficiente para realizar o saque
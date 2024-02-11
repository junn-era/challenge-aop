const aspectj = require('aspectj-js');

const BalanceAspect = {
  around: {
    checkBalance(joinPoint) {
      const account = joinPoint.target;
      const value = joinPoint.args[0];

      if (account.checkBalance() >= value) {
        joinPoint.proceed();
      } else {
        console.error('Saldo insuficiente para realizar o saque');
      }
    },
  },
};

module.exports = SaldoAspect;
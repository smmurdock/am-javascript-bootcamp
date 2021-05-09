const account = {
  name: 'Shanay Murdock',
  expenses: [],
  income: [],
  addExpense: function(description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    });
  },
  addIncome: function(description, amount) {
    this.income.push({
      description: description,
      amount: amount
    });
  },
  getAccountSummary: function() {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount;
    });

    this.income.forEach(function(income) {
      totalIncome = totalIncome + income.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${accountBalance.toFixed(
      2
    )}. \n$${totalIncome.toFixed(2)} in income. \n$${totalExpenses.toFixed(
      2
    )} in expenses.`;
  }
};

account.addIncome('Job', 1100);
account.addExpense('Rent', 750);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1500);
account.addExpense('Verizon', 215);
console.log(account.getAccountSummary());
console.log('\nincome:', account.income);
console.log('expenses:', account.expenses);

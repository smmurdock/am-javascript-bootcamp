let myAccount = {
  name: 'Shanay Murdock',
  expenses: 0,
  income: 0
};

// let otherAccount = myAccount;
// otherAccount.income = 1000;

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account);
};

// addExpense(myAccount, 2.5);
// console.log(myAccount);
// console.log(otherAccount);
// addIncome function (account, amount)
let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

// resetAccount function (account) - reset to 0
let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

// getAccountSummary function - print summary of balances with total expenses and income
// Account for Shanay has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has ${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
getAccountSummary(myAccount);

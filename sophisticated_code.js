// file: sophisticated_code.js

// This code is a sophisticated implementation of a simplified bank account management system.
// It allows users to create new accounts, deposit and withdraw funds, transfer money between accounts,
// view their account details, and calculate interest. It utilizes advanced object-oriented programming
// principles and demonstrates a well-structured codebase with scalability in mind.

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(name, initialBalance) {
    const account = new Account(name, initialBalance);
    this.accounts.push(account);
    return account;
  }

  getAccount(accountNumber) {
    return this.accounts.find((account) => account.number === accountNumber);
  }
}

class Account {
  static accountCounter = 1000;

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.number = Account.accountCounter++;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient funds");
    }
  }

  transfer(amount, targetAccount) {
    if (amount <= this.balance) {
      this.withdraw(amount);
      targetAccount.deposit(amount);
    } else {
      throw new Error("Insufficient funds");
    }
  }

  calculateInterest(rate) {
    return (this.balance * rate) / 100;
  }
}

// Usage example:

const bank = new Bank();

const account1 = bank.createAccount("John Doe", 1000);
const account2 = bank.createAccount("Jane Smith", 2000);

console.log(`Account ${account1.number}: ${account1.name}, Balance: $${account1.balance}`);
console.log(`Account ${account2.number}: ${account2.name}, Balance: $${account2.balance}`);

account1.deposit(500);
account2.withdraw(800);

console.log(`Account ${account1.number}: Updated Balance: $${account1.balance}`);
console.log(`Account ${account2.number}: Updated Balance: $${account2.balance}`);

account1.transfer(200, account2);

console.log(`Account ${account1.number}: Transfer completed. Updated Balance: $${account1.balance}`);
console.log(`Account ${account2.number}: Transfer received. Updated Balance: $${account2.balance}`);

const interest1 = account1.calculateInterest(5);
const interest2 = account2.calculateInterest(5);

console.log(`Account ${account1.number}: Interest accrued: $${interest1}`);
console.log(`Account ${account2.number}: Interest accrued: $${interest2}`);

// ... Continue with more operations and functionalities

// End of file.
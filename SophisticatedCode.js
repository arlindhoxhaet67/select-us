/*
File Name: SophisticatedCode.js

This code is a simulation of a stock portfolio management system. It includes various functionalities such as buying and selling stocks, calculating portfolio value, and displaying relevant information. The code is designed to be complex and elaborate, showcasing professional and creative coding techniques.

Note: This code is for showcasing purposes only and does not include actual stock data or real-time functionality.

Please ensure you have the necessary libraries and dependencies installed before running this code.
*/

// Import necessary dependencies
const readline = require('readline');

// Define the stock class
class Stock {
  constructor(symbol, name, price, quantity) {
    this.symbol = symbol;
    this.name = name;
    this.price = parseFloat(price);
    this.quantity = parseInt(quantity);
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.symbol} ${this.name} | Price: $${this.price.toFixed(2)} | Quantity: ${this.quantity}`;
  }
}

// Define the portfolio class
class Portfolio {
  constructor() {
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  removeStock(symbol) {
    const index = this.stocks.findIndex(stock => stock.symbol === symbol);
    if (index > -1) {
      this.stocks.splice(index, 1);
      return true;
    }
    return false;
  }

  getPortfolioValue() {
    let totalValue = 0;
    for (const stock of this.stocks) {
      totalValue += stock.getTotalValue();
    }
    return totalValue;
  }

  display() {
    console.log('======= Portfolio Summary =======');
    for (const stock of this.stocks) {
      console.log(stock.toString());
    }
    console.log(`Total Portfolio Value: $${this.getPortfolioValue().toFixed(2)}`);
    console.log('================================');
  }
}

// Define the stock market class
class StockMarket {
  constructor() {
    this.stocks = {
      AAPL: { name: 'Apple Inc.', price: 148.32 },
      GOOGL: { name: 'Alphabet Inc.', price: 2710.76 },
      AMZN: { name: 'Amazon.com Inc.', price: 3405.80 },
      MSFT: { name: 'Microsoft Corporation', price: 294.62 },
      TSLA: { name: 'Tesla, Inc.', price: 721.49 }
    };
  }

  getStockPrice(symbol) {
    if (this.stocks.hasOwnProperty(symbol)) {
      return this.stocks[symbol].price;
    }
    return null;
  }

  isValidStock(symbol) {
    return this.stocks.hasOwnProperty(symbol);
  }
}

// Initialize portfolio and stock market
const portfolio = new Portfolio();
const stockMarket = new StockMarket();

// Define the command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display welcome message
console.log('========= Stock Portfolio Management System =========');
console.log('Commands:');
console.log('- buy <symbol> <quantity>: Buy stocks');
console.log('- sell <symbol> <quantity>: Sell stocks');
console.log('- display: Display portfolio summary');
console.log('- exit: Exit the program');
console.log('==============================================');

// Start reading user commands
rl.prompt();

rl.on('line', (input) => {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();

  switch (command) {
    case 'buy':
      const buySymbol = args[1];
      const buyQuantity = parseInt(args[2]);

      if (!stockMarket.isValidStock(buySymbol)) {
        console.log('Invalid stock symbol.');
      } else {
        const currentPrice = stockMarket.getStockPrice(buySymbol);
        const stock = new Stock(buySymbol, stockMarket.stocks[buySymbol].name, currentPrice, buyQuantity);
        portfolio.addStock(stock);
        console.log(`Bought ${buyQuantity} shares of ${buySymbol} at $${currentPrice.toFixed(2)} each.`);
      }
      break;

    case 'sell':
      const sellSymbol = args[1];
      const sellQuantity = parseInt(args[2]);

      if (!stockMarket.isValidStock(sellSymbol)) {
        console.log('Invalid stock symbol.');
      } else {
        const currentPrice = stockMarket.getStockPrice(sellSymbol);

        const existingStock = portfolio.stocks.find(stock => stock.symbol === sellSymbol);

        if (!existingStock) {
          console.log(`You don't own any ${sellSymbol} stocks.`);
        } else if (existingStock.quantity < sellQuantity) {
          console.log(`You only own ${existingStock.quantity} shares of ${sellSymbol}.`);
        } else {
          existingStock.quantity -= sellQuantity;
          console.log(`Sold ${sellQuantity} shares of ${sellSymbol} at $${currentPrice.toFixed(2)} each.`);
        }
      }
      break;

    case 'display':
      portfolio.display();
      break;

    case 'exit':
      rl.close();
      break;

    default:
      console.log('Invalid command.');
  }

  rl.prompt();
});

rl.on('close', () => {
  console.log('Exiting program. Thank you!');
});

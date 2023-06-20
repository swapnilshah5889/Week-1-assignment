/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let transactionsMap = new Map();

  for(let i=0; i<transactions.length; i++) {
    let t = transactions[i];
    
    // If Map Contains the Item
    if(transactionsMap.has(t.category)) {
      transactionsMap.set(t.category, transactionsMap.get(t.category) + t.price);
    }
    else {
      transactionsMap.set(t.category, t.price);
    }
  }
  let ans = [];
  transactionsMap.forEach((value, key) => {
    ans.push({'category':key, 'totalSpent':value});
  });
  return ans;
}

module.exports = calculateTotalSpentByCategory;
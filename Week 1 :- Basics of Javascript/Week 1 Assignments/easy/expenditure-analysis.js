/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpentByCategory = {};

  // Calculate total spent for each category
  for (let i = 0; i < transactions.length; i++) {
    let currentTransaction = transactions[i];
    let category = currentTransaction.category;
    let price = currentTransaction.price;

    // Check if category already exists in totalSpentByCategory
    if (totalSpentByCategory[category]) {
      // If yes, add the price of the current transaction to the existing total spent
      totalSpentByCategory[category] += price;
    } else {
      // If no, initialize the total spent for the category with the price of the current transaction
      totalSpentByCategory[category] = price;
    }
  }

  // Convert the totalSpentByCategory object into an array of objects
  let result = [];
  for (let category in totalSpentByCategory) {
    result.push({ category: category, totalSpent: totalSpentByCategory[category] });
  }

  // Return the array of objects representing total spent by category
  return result;
}

module.exports = calculateTotalSpentByCategory;




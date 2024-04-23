function makeTransaction(quantity, pricePerDroid, customerCredits) {
     const totalPriceDroid = quantity * pricePerDroid;
     const balanceComparison = totalPriceDroid <= customerCredits;
    
     if (balanceComparison) {
          const message = `You ordered ${quantity} droids worth ${totalPriceDroid} credits!`;
               return message;
     }
     else {
          const message = 'Insufficient funds!';
          return message;
     }
}
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
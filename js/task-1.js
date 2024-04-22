function makeTransaction(quantity, pricePerDroid, customerCredits) {
     const totalPriceDroid = quantity * pricePerDroid;
     if (totalPriceDroid <= customerCredits) {
          const message = `You ordered ${quantity} droids worth ${totalPriceDroid} credits!`;
          console.log(message);
     }
     else {
          const message = 'Insufficient funds!';
          console.log(message);
     }
}
makeTransaction(5, 3000, 23000);
makeTransaction(3, 1000, 15000);
makeTransaction(10, 5000, 8000);
makeTransaction(8, 2000, 10000);
makeTransaction(10, 500, 5000);
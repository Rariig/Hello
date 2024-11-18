/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let minPrice = Infinity;  // Initialize to a high value
    let maxProfit = 0;        // Initialize max profit to 0, as we can't have negative profit

    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if the current price is lower than our recorded minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        
        // Calculate profit if we sold at the current price
        let profit = prices[i] - minPrice;

        // Update maxProfit if the calculated profit is higher than our recorded maxProfit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};

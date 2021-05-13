/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in 
the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


1. Take note that days are plus one for index
2. Each price listed is a new day
3. Create variable to hold profit. Find greatest difference between Selling day - Buying day for maximum profit
4. Hold the current diff as we iterate through array . If we find a y > x then profit = y. If not profit = x. 
5. If there is no profit (negative value) return zero. 

[7,1,5,3,6,4]           

selling - buying
1 - 7 = -6
prfit = -6 (if negative value, keep zero)

z. Return profit 

1. Declare a min and max value set those to null
2. For of loop and find the min value
3. Declare a new variable called new val and store the index of min
4.check to see if the min val === prices.length-1 //return 0
5. for loop start i at new val
6. find the max value
7. return max-min 

*/

prices = [7,6,4,1,3]

function buySell(prices){
    let min = null, 
    max = null 

    for(let val of prices){
        if(!min){
            min = val
        }else if(min > val){
            min = val
        }
    }

    let newVal = prices.indexOf(min) 
    if(newVal === prices.length - 1){
        return 0
    }
        
    for(let i = newVal; i < prices.length; i++){
        if(!max){
            max = prices[i] 
        }else if(max < prices[i]){
            max = prices[i]
        }
    }

        return max - min
}

console.log(buySell(prices))

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    var maxWealth =0;
    accounts.forEach(customer=>{
        var wealth = 0;
        customer.forEach(n=>{
          wealth +=n;
        });
        
        if(wealth > maxWealth)
        {
         maxWealth = wealth;
        }
     });   
    return maxWealth;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))
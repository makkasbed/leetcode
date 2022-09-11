/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   
    var sums =[];
    sums.push(nums[0]);
    var i=1;
    var sum = nums[0];
    while(i<nums.length)
    {
           sum += nums[i];   
           sums.push(sum); 
           i++;      
    }    
    return sums;
};

console.log(runningSum([1,2,3,4]));
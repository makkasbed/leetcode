/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
     var fizz_data =[];
     for(var i=1;i<=n;i++)
     {
        if(i%3==0 && i%5==0)
        {
            fizz_data.push("FizzBuzz");
        }else if(i%3==0)
        {
            fizz_data.push("Fizz");
        }else if(i%5==0)
        {
            fizz_data.push("Buzz");
        }else
        {
            fizz_data.push(i.toString());
        }
     }
     return fizz_data;
};

console.log(fizzBuzz(5));
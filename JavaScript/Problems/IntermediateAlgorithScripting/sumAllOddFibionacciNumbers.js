/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/


function sumFibs(num) {
let n = []; 
let fibo = []; 
let j = 2; 
let i = 0; 
for(i; i <= num; i++){
    if(i < 2){
    n.push(i); 
    fibo.push(i); 
    } else if(i >=  2){
    n.push(i); 
        while(j <= i){
        fibo.push(fibo[j - 1] + fibo[j - 2]); 
        j++; 
        }
    }
}
let oddd = []; 
let sum = 0; 
for(let i = 0; i < fibo.length; i++){
        if(fibo[i] <= num){
            oddd.push(fibo[i]); 
        }        
    }
const odd = (arr) =>{
let sum = 0; 
for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            sum += arr[i]; 
        }
    }
    return sum; 
}  
console.log(n); 
console.log(fibo); 
return odd(oddd); 
};

console.log(sumFibs(10));

function sumPrimes(num) {
let prime = []; 
let primo = []; 
let k = -1; 
    for(let i = num; i > 0; i--){
        prime.push([]); 
        k++; 
        for(let j = i; j > 0; j--){
            prime[k].push(j); 
        }
    }

let a = -1; 
    for(let i = 0; i < prime.length; i++){
        primo.push([]); 
        a++; 
        for(let k = 0; k < prime[i].length; k++){
            if(prime[i][0] % prime[i][k] == 0){
                primo[a].push(prime[i][k]);
            }
        }
    }
return primo; 

 const  suma =  primo.reduce((a,b) => {
        if(b.length == 2){
            a.push(b[0]);            
       }
       return a; 
   }, []) 

    return suma.reduce((a,b) => a + b); 
}


console.log(sumPrimes(1500));

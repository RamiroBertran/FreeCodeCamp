function smallestCommons(arr) {
let n = 1; 
// esta linea ordena el array dado en el caso de que este desordenado. 
    // start; 
let sort  = arr.sort((a,b) => a -b); 
    // end; 
// esta linea le asigna el valor de cada item del array a una variable a,b; 
    // start
let [a,b] = sort;
    // end; 
// esta linea sera el array que contendra al rango de valores entre a y b; 
    // start; 
let range = []; 
    // end; 
// Este pedazo de codigo me devulven todos los numeros que esten entre a y b; 
    //start;
    for(let i = a; i <= b; i++){
        range.push(i); 
    }
    //end;
// Ahora tengo que crear dos variables una la cuals sera la contenedora de los multiplos de a , y la otra de b; 

let mcm_a = []; 
let mcm_b = [];
let mcm_ab = []; 
        
        if(a % 2 == 0){
            mcm_a.push(2); 
            a = a / 2; 
        }
        else if(a % 3 == 0){
            mcm_a.push(3); 
            a = a / 3; 
        } else if(a % 5 == 0){
            mcm_a.push(5); 
            a = a / 5; 
        } else if(a % 7){
            mcm_a.push(7); 
            a = a / 7; 
        }
    
        if(b % 2 == 0){
            mcm_b.push(2); 
            b = b / 2; 
        }
        else if(b % 3 == 0){
            mcm_b.push(3); 
            b = b / 3; 
        } else if(b % 5 == 0){
            mcm_b.push(5); 
            b = b / 5; 
        } else if(b % 7 == 0){
            mcm_b.push(7); 
        }
            b = b / 7; 
mcm_b.unshift(1);
mcm_a.unshift(1);
console.log(mcm_b); 
console.log(mcm_a); 
}
//ahora el objetivo es lograr tres listas. Una con los multiplos comun de a, y otra de b; }
    
console.log(smallestCommons([5,1]));


// comun denominador mayor, de dos numeros enteros en los cuales no son todos cero. Es el positivo mas grande que dividide cada entero. // El comun denominador de x,y es gcd(x,y), por ejemplo de 8 y 4 es gcd(8, 12) = 4;. El denominador comun mayor de a y b , es d, en los cuales hay enteros e y f, en los que a = de y b = df; 
    // Por lo tanto si mulitplicamos al denominador por el entero f tenemos a "a", del mismo modo con "b". 
    //
// Si a o b es cero, queda como el valor absoluto del que no es ceropor ejemplo, si b es 0, es igual a gcd(a,0) = gcd(0,a) = |a|; 
    //
// gcd(0,0) = undefined; 


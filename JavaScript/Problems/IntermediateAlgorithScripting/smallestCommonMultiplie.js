function smallestCommons([a,b] = arg) {
// a = 1, b = 10;
    // d = 10; 
    let d = b; 
    // arg = [1,10]; 
    let arg = [a,b]; 
    arg.sort((a,b) => a -b); 
    // i = 10; 
    let i = b; 
    // donde se colocan ambos divisores, de a y b; 
    let div = [[], []]; 
    // el rango entre a y b; 
    let range = []; 
    // for(i = 1; 1 <= 10; i + 1); 
    for(let i = arg[0]; i <= arg[1]; i++){
        range.push(i);
    }

let gcd = (a = a, b = b) => {

// mientras i > 0, si b dividido d da resto 0, a div[0] agreagele d, luego a i restale uno, y  a d restale 1; 
// en la segunda vuelta quedaira: 9 > 0, si(10 / 9) da resto cero, agreaglo a div[0]; si no, no hagas nada. 
    while(i >  0){
        if(b % d == 0){
            div[0].push(d); 
        }
        i--; 
        d--; 
    }

// aca hacemos lo mismo pero con los divisiores de a, buscamos cuales son sus divisores a partir de si da o no resto cero. 
    let c = a; 
    let j = a; 
        while(j > 0){
            if(a % c == 0){
                div[1].push(c); 
            }
            j--; 
            c--; 
        }


// con este ciclo for, le decimos , que va a girar hasta que el largo de los divisisores ya no sea mayoro a i que vale cero. Luego vamos a girar por los items que estan adentro de cada item, caja adnetro de caja. Si el item divisor esta en ambos casos me va retonar todos los item a une nueva lista llamada divisores comunes. 
console.log(div); 
//let common_divisores = []; 
    for(let i = 0;  i < div.length; i++){
        for(let j = 0; j < div[i].length; j++){
            if(div[1].indexOf(div[0][j]) >= 0){
                return div[0][j]; 
            }
        }
    }
}

let hcf = gcd(a, b); 

let mcm = Math.abs(a * b) / hcf; 
console.log(hcf); 
return mcm; 



for(let i = 0; i <= range.length; i++){
        if(mcm % range[i] !== 0){
            console.log("false"); 
        } else {

        }
    }
}


console.log(smallestCommons([1,5]));

/*
let mcm = []; 
for(let i = 0; i < hcf.length; i++){
    mcm.push(Math.abs(a * b) / hcf[i]); 
   }
*/


/*
 * The above code did't work. I am not going to remove it, since a want to show you how difference I make my code this time. 
 */

function smallestCommons(arr) {
  arr.sort((a,b) => a - b); 
  let [a,b] = [arr[0], arr[1]]; 
  let range = []; 
  let n = 1; 
  let m = 1; 
  for(let i = a; i <= b; i++){
    range.push(i); 
  }
  let verSi = (ran, x, y) => {
    let n = 0; 
    if(x != y){
      return false; 
    }
    ran.forEach(item => {if(x % item == 0 && y % item == 0){
        n++;
    }});
    if(n == ran.length){
      return true;
    } else {
      return false; 
    }
  }
  let i = a; 
  // a < b; 
  // mulitplicar a por n. A n hay que sumarle uno si es que no es igual a b, y a "a", hay que recetear el valor a su valor inicial; 
  for(i; !verSi(range, i, b); i *= n){ // i = 1; 1 *= 2; n++; 
  //console.log("valor de i: " + i); 
  //console.log("valor de b: " + b); 
      if(b < i){
      b = arr[1]; 
      b *= m; 
      m++; 
    }
      i = arr[0]; 
      n++; 
  }
  return i; 
}

console.log(smallestCommons([23, 18]));



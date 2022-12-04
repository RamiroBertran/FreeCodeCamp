
function whatIsInAName(collection, source) {
let prop = Object.keys(source); 
let newcol = [...collection]; 
let container = []; 
let arr = []; 
    for(let i = 0; i < prop.length; i++){
        container.push(newcol.filter(item => item[prop[i]] == source[prop[i]])); 
    }

    for(let i = 0; i < container.length;i++){
        if(container[i].length  === 0){
            return container[i]; 
        }
    }
arr = [...container[0]]
// creo un nuevo array sobre el que voy a iterar y al cortarlo, lo cual es necesario, no modificiar sobre el que estoy iterando. 
console.log(newarr); 
    if(prop.length > 1){
    for(let i = 0; i < prop.length; i++){
    console.log("Buscamos la prop: " + prop[i]); 
    let j = 0; 
        while(arr.length > j){
            if(arr[j].hasOwnProperty(prop[i]) === false){
                console.log(arr[j]); 
                console.log(prop[i] + ": no esta"); 
                arr.splice(j,1); 
                j--; 
                console.log(j); 
                //ver el estado de newarr; 
                
            } else {
                console.log(arr[j]); 
                console.log(prop[i] + ": esta"); 
        }
        j++; 
    }
    }
}
return arr; 
}


/* la tengo adentro: 
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})); 

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })); 
 *
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); 

console.log( whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3})); 
*/

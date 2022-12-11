function addTogether(x, y){
let reg = /[a-z]/ig; 

    if(reg.test(x)){
        return undefined; 
    }

    if(y === undefined){
        return function(z){
            if(typeof(x) !== typeof(z)){
                return  undefined;
            } else {
                return x + z; 
            }
        }

    } else if(typeof(x) !== typeof(y)){
            return undefined; 

    } else {
            return x + y; 
    }
}


console.log(addTogether(2)(3));
console.log(addTogether(5,7)); 
console.log(addTogether(23, 30));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether("2", 3))
console.log(addTogether(2)([3]));
console.log(addTogether(5, undefined))

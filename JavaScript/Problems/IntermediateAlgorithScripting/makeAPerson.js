const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
    //
  this.getFullName = function() {
      return firstAndLast; 
  };
    
this.getFirstName = function() {
    return  firstAndLast.split(" ")[0]; 
}

this.getLastName = function() {
    return firstAndLast.split(" ")[1]; 
}

this.setFirstName = function(newName){
    const arr =  firstAndLast.split(" "); 
    arr[0] = newName; 
    return arr.join(" "); 
}

this.setLastName = function(lastName){
    firstAndLast.split(" ")[1] = lastName; 
    return firstAndLast[1]; 
}

this.setFullName = function(full){
    let fName = full.split(" "); 
    firstAndLast.split(" ")[0] = fName[0]; 
    firstAndLast.split(" ")[1] = fName[1]; 
    return firstAndLast.join(" "); 
}
};

const bob = new Person('Bob Ross');

console.log(bob instanceof Person); // bien
console.log(bob.firstname);  // bien
console.log(bob.lastname); // bien
console.log(bob.getFirstName()); // bien
console.log(bob.getLastName()); // bien
console.log(bob.getFullName()); // bien
console.log(bob.setFirstName("Haskell")); //bien
console.log(bob.getFullName()); //bien
console.log(bob.setLastName("Curry")); 
console.log(bob.getFullName()); 
console.log(bob.getFirstName()); 
console.log(bob.getLastName()); 















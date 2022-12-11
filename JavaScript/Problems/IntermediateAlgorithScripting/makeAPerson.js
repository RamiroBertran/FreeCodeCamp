const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
    //
this._fullName = firstAndLast.split(" "); 

  this.getFullName = function() {
      return this._fullName[0] + " " + this._fullName[1]; 
  };
    
this.getFirstName = function() {
    return this._fullName[0]; 
}

this.getLastName = function() {
    return this._fullName[1]; 
}

this.setFirstName = function(newName){
    this._fullName[0] = newName; 
    return this._fullName[0]; 
}

this.setLastName = function(lastName){
    this._fullName[1] = lastName; 
    return this._fullName[1]; 
}

this.setFullName = function(full){
    let fName = full.split(" "); 
    this._fullName[0] = fName[0]; 
    this._fullName[1] = fName[1]; 
    return this._fullName.join(" "); 
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

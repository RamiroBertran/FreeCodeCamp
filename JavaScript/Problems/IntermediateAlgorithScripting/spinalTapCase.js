// This code does not work in cases such havin more than one spaces or more than one dash, and probably much mores. I just try to solved the problem with the knowledge I had. 
function spinalCase(str) {
    let first; 
    let segundo; 
    let tercero; 
    let cuarto  = []; 
    let newarr; 
    let sin; 
    let arr = [];

        if(/\s/g.test(str)){
        first = str.replace(/-/, " ");
        segundo = first.split(" "); 
        for(let i = 0; i < segundo.length; i++){
            segundo[i] = segundo[i][0].toLowerCase() + segundo[i].substring(1); 
        }
        tercero = segundo.join(" ").split(""); 
        for(let i = 0; i < tercero.length;i++){
            if(tercero[i] !== tercero[i].toUpperCase() || tercero[i] == " "){
                cuarto.push(tercero[i])
            } else if(tercero[i] == tercero[i].toUpperCase()){
                cuarto.push(" "); 
                cuarto.push(tercero[i]); 
            }
            
        }
            return cuarto.join("").replace(/\s/g, "-").toLowerCase(); 
        }
        else if(/_/g.test(str)){
        newarr = str.replace(/_/g, "-"); 
        return newarr.toLowerCase(); 
        } else if(/\s/g.test(str) === false){
            sin = str.split(""); 
            for(let j = 0; j < sin.length; j++){
                if(/[a-z]/g.test(sin[j])){
                    arr.push(sin[j]);  
                } else {
                    arr.push("-"); 
                    arr.push(sin[j]); 
                }
            }
            return arr.join("").toLowerCase(); 

        }

    }

console.log(spinalCase("AllThe-small Things")); 
console.log(spinalCase("This Is Spinal Tap")); 
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh")); 


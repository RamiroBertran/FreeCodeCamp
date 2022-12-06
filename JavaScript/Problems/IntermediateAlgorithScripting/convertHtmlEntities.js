/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return the string Schindler&apos;s List.
convertHTML("<>") should return the string &lt;&gt;.
convertHTML("abc") should return the string abc.
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos

*/
function convertHTML(str) {
let arr = str.split(""); 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "&"){
            arr[i] = "&amp;"
        }
    }; 

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "'"){
            arr[i] = "&apos;";
        }else if(arr[i] == "<"){
            arr[i] = "&lt;"
        }else if(arr[i] == ">"){
            arr[i]  = "&gt;"
        }else if(arr[i] == '"'){
            arr[i] = "&quot;"; 
        }
    }
        return arr.join(""); 
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos")); 
console.log(convertHTML("Sixty > twelve")); 
console.log(convertHTML('Stuff in "quotation marks"')); 
console.log(convertHTML("Schindler's List")); 


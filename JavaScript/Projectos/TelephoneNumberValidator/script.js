function telephoneCheck(str) {
  if(/(^1\s\d{3}\s\d{3}\s\d*$|^1[^\s]5{3}\W5{3}-.*\d$|^1\s5{3}-5{3}.*\d*$|^1\s\W5{3}\W\s.*\d*$|^\W5{3}[^-](\d{3}|\s)|^\d{3}(-|\s)\d{3}|^5*$)/.test(str)&& str.length >= 10){
    return true; 
  } 
  return false;
}

console.log(telephoneCheck("1 555)555-5555"));


function checkCashRegister(price, cash, cid) {
  let vuelto = cash - price; 
  let arr = cid.slice(0,);
  let newarr = [...arr]; 
  let value = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]; 
  let change = [];
  let fix; 
  let j = 0; 
  let total = 0; 
  for(let x of newarr){
    total += x[1]; 
  }
  for(let i = cid.length - 1; i >= 0; i--){
      if(vuelto > value[i] && cid[i][1] > 0){
        j = 0;
        while(value[i] <= vuelto && cid[i][1] > 0){
            j++;
            fix = vuelto.toFixed(2);
            vuelto = fix;   
            vuelto -= value[i]; 
            cid[i][1] -= value[i]; 
          }
          change.unshift([cid[i][0], value[i] * j])
        }
      } 
    change.reverse(); 
    if(total < cash - price || vuelto != 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if(total == cash - price){
        cid[0][1] = 0.5;
        return {status: "CLOSED", change:cid};
    } else {
      return {status: "OPEN", change: change}
    }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

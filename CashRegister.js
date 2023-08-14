// Global denominations dictionary
const dict = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.10, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};

function checkCashRegister(price, cash, cid) {

  // Calculate the change

  let change = cash - price;

  // Transform the cash-in-drawer to a register object

  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  
  let cashNeeded = {};

  // Iterate over the key value pairs in the global dictionary
  // and subtract the lowest denomination from the change.
  // Then, add the required change to a new object. Update
  // the register to reflect these changes

  for (const [key, value] of Object.entries(dict).reverse()) {
    while (change >= value && register[key] > 0) {
      if (cashNeeded[key]) {
        cashNeeded[key] += value;
        cashNeeded[key] = parseFloat(cashNeeded[key].toFixed(2));
      } else {
        cashNeeded[key] = value;
      }
      change -= value;
      change = parseFloat(change.toFixed(2));
      register[key] -= value;
      register.total -= value;
      register.total = parseFloat(register.total.toFixed(2));
      register[key] = parseFloat(register[key].toFixed(2));
    }
  }

  // Create the statement object that will be returned

  let statement = {status: "OPEN", change: []};

  // Iterate over the cash-in-drawer array
  // and determine the status of the statement based on
  // the change returned

  for (let i = 0; i < cid.length; i++) {
    if (register.total === 0 && change === 0){
      statement.status = "CLOSED";
      statement.change = cid;
      return statement;
    }
    else if (cashNeeded[cid[i][0]] > cid[i][1] || change > 0) {
      statement.status = "INSUFFICIENT_FUNDS";
      statement.change = [];
      return statement;
    } else if (cashNeeded[cid[i][0]]) {
      statement.change.push([cid[i][0],cashNeeded[cid[i][0]]]);
    }
  }
  statement.change = statement.change.reverse();
  return statement;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

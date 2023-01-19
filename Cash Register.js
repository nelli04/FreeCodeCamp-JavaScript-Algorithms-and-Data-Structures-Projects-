function checkCashRegister(price, cash, cid) {
    const x = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
    let CID = 0;
    for (let elem of cid) {
      CID += elem[1];
    }
    CID = CID.toFixed(2);
    let z = cash - price;
    const c = [];
    if (z > CID) {
      return {status: "INSUFFICIENT_FUNDS", change: c}
    } else if (z.toFixed(2) === CID) {
      return {status: "CLOSED", change: cid}
    } else {
      cid = cid.reverse();
      for (let element of cid) {
        let v = [element[0], 0];
        while (z >= x[element[0]] && element[1] > 0) {
          v[1] += x[element[0]]
          element[1] -= x[element[0]]
          z -= x[element[0]]
          z = z.toFixed(2)
        }
        if (v[1] > 0) {
          c.push(v)
        }
      }
    }
    if (z > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return { status: "OPEN", change: c};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
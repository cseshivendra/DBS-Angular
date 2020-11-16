const totalBill = function (amount, tax = 10) {
    return amount + tax / 100 * amount;
}

console.log("Total bill is " + totalBill(100, 20));

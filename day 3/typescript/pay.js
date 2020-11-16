var GooglePay = (function () {
    function GooglePay() {
    }
    GooglePay.prototype.transact = function (from, to, amount, note) {
        console.log("Payment of Rs " + amount + " from " + from + " to " + to + " using Google pay");
    };
    return GooglePay;
})();
var PhonePay = (function () {
    function PhonePay() {
    }
    PhonePay.prototype.transact = function (from, to, amount, note) {
        console.log("Payment of Rs " + amount + " from " + from + " to " + to + " using Phone pay");
    };
    return PhonePay;
})();
var Paytm = (function () {
    function Paytm() {
    }
    Paytm.prototype.transact = function (from, to, amount, note) {
        console.log("Payment of Rs " + amount + " from " + from + " to " + to + " using Paytm pay");
    };
    return Paytm;
})();
var Options;
(function (Options) {
    Options[Options["NETBANKING"] = 0] = "NETBANKING";
    Options[Options["CREDIT_CARD"] = 1] = "CREDIT_CARD";
    Options[Options["DEBIT_CARD"] = 2] = "DEBIT_CARD";
    Options[Options["UPI"] = 3] = "UPI";
})(Options || (Options = {}));
var payment = new Paytm();
payment.transact('Suresh', 'Neeraj', 10000, 'Towards Rent');

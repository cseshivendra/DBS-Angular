interface Pay {
    transact(from : string, to : string, amount : number, note : string, option? : Options);
}


class GooglePay implements Pay {
    transact(from : string, to : string, amount : number, note : string) {
        console.log(`Payment of Rs ${amount} from ${from} to ${to} using Google pay`);
    }
}

class PhonePay implements Pay {
    transact(from : string, to : string, amount : number, note : string) {
        console.log(`Payment of Rs ${amount} from ${from} to ${to} using Phone pay`);
    }
}
class Paytm implements NetBanking {
    transact(from : string, to : string, amount : number, note : string) {
        console.log(`Payment of Rs ${amount} from ${from} to ${to} using Paytm pay`);
    }
}

enum Options {
    NETBANKING,
    CREDIT_CARD,
    DEBIT_CARD,
    UPI
}


interface NetBanking {
    transact(from : string, to : string, amount : number, note : string);
}


const payment: NetBanking = new Paytm();
payment.transact('Suresh', 'Neeraj', 10000, 'Towards Rent');

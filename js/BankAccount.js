class BankAccount{
    static minbalance=0; 
    constructor(accountno,accounttype,balance){
        this.accountno=accountno;
        this.accounttype=accounttype;
        this.balance=balance;
        if(accounttype=='savings'){
            BankAccount.minbalance=1000;
        }
        if(accounttype=='current'){
            BankAccount.minbalance=10000;
        }
        if(accounttype=='bussiness'){
            BankAccount.minbalance=20000;
        }

    }
    deposit(amount){
        this.balance=this.balance+amount;
    }
    withdraw(amount){
        if(amount+BankAccount.minbalance<this.balance)
        this.balance=this.balance-amount;
    else
    console.log('Insufficient balance')
    }
    display(){
        return `${this.accountno} ${this.accounttype} ${this.balance}`
    }

}
let account1=new BankAccount(123567853,'savings',10000);
account1.withdraw(3000)
console.log(account1.balance)
account1.display()
console.log(account1.display())
let acc2=new BankAccount(6876786,'current',25000);
acc2.display()
console.log(acc2.display())
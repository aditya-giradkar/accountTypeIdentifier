const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]

const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //
    let amountArr = accountBalanceHistory.map((obj)=>obj.account.balance.amount),
        result = false;
    const diff = amountArr[1] - amountArr[0];
    for (let i=0; i < amountArr.length - 1 ; i++){
        if(amountArr[i+1] - amountArr[i] != diff){
            result = true;
            break;   
        } 
    }
    return result ? "A" : "B";
  };

console.log(accountTypeChecker(accountBalanceHistory));

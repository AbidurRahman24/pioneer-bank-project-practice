const addDesposit = document.getElementById("add-deposit");
addDesposit.addEventListener("click", () => {
  const depositCurrence = Number(document.getElementById("depositCurrence").value);

  if (depositCurrence > 0) {
    const depositAmount = Number(document.getElementById("depositAmount").innerText);
    const totalDeposit = depositCurrence + depositAmount;
    document.getElementById("depositAmount").innerText = totalDeposit;

    const balance = Number(document.getElementById("balance").innerText);
    const totalBalance = totalDeposit + balance;
    document.getElementById("balance").innerText = totalBalance;
  }
  
  document.getElementById("depositCurrence").value = "";
});


// WithDraw btn
const withDrawBtn = document.getElementById("withDrawBtn")
withDrawBtn.addEventListener('click', ()=>{
  const withDrawCurrency = Number(document.getElementById("withDrawCurrency").value);
  if(withDrawCurrency > 0){
  const withDrawAmount = Number(document.getElementById("withDrawAmount").innerText);
  const total = withDrawCurrency + withDrawAmount;
  document.getElementById("withDrawAmount").innerText = total;

  const balance = Number(document.getElementById("balance").innerText)
  const totalBalance = balance - total;
  document.getElementById("balance").innerText = totalBalance;
  }


  document.getElementById("withDrawCurrency").value = ''
})


const sumInput = () =>{
  
}
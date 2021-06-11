const addDesposit = document.getElementById('add-deposit')
    addDesposit.addEventListener('click', ()=>{
        const depositCurrence = Number(document.getElementById('depositCurrence').value)
        const depositAmount = Number(document.getElementById('depositAmount').innerText)
        const totalDeposit = depositCurrence + depositAmount;
        document.getElementById('depositAmount').innerText = totalDeposit;

        document.getElementById('depositCurrence').value = ''

        const balance = Number(document.getElementById('balance').innerText)
        const totalBalance = totalDeposit + balance;
        console.log(totalBalance);
        document.getElementById('balance').innerText = totalBalance;
})



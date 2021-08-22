document.getElementById('control-button').addEventListener('click', function(){

    const amountInput = document.getElementById('semesterAmount');
    const amountInputText = amountInput.value;
    const amountInputTotal = parseInt(amountInputText);
    const thisSemesterCost = document.getElementById('semesterCost');
    thisSemesterCost.innerText = amountInputTotal;

    const totalPayable = document.getElementById('totalPay');
    const totalpayableFeesText = totalPayable.innerText;
    const totalpayableFees = parseInt(totalpayableFeesText);
    const totalPayableAmount = totalpayableFees + amountInputTotal;
    totalPayable.innerText = totalPayableAmount;

    const totalDue = document.getElementById('total-due');
    const totalDueText = totalDue.innerText;
    const totalDueAmount = parseInt(totalDueText);
    const grandTotalDue = totalDueAmount - amountInputTotal;
    totalDue.innerText = grandTotalDue;



})
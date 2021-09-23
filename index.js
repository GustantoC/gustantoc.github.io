function calculateLoan() {
    let amount = document.querySelector('#amount').value
    let month = document.querySelector('input[name=month]:checked').value
    let monthlyInterest = amount * (5/100/month)
    let paymentperbulan = ((amount/month) + monthlyInterest)
    if (amount < 1000000) {
        document.getElementById('payment').textContent = 'Amount minimum is Rp.1000.000'
    } else {

        document.getElementById('payment').textContent = paymentperbulan

    }
}


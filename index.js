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

let Nama = ''
let nomorKTP = ''

function hitungTenor(pinjaman,bulan){
  return Math.ceil(pinjaman/bulan)
}

function namaChange(){
  console.log('ada');
}


function jatuhTempo(tenor = 0){
  let currDate = new Date;
  let tempo = new Date(currDate)
  tempo.setMonth(tempo.getMonth() + tenor)
  let returnTempo = tempo.getDate()+'-'+tempo.getMonth()+1+'-'+tempo.getFullYear()
  
  console.log(returnTempo);
  //Cari p/span/div yang nyimpen si jatuh tempo masukin
} 

function nextPage(from,to){
  if(from == 'page1'){
    if(!formNamaDanKTP()){
      return
    }
  } else if(from == 'page2' && to == 'page3'){
    /**
     * Tunjukan nama, ktp
     * jumlah pinjaman, pilihan tenor,
     * biaya bulanan, dan Jatuh tempo
     */
    // if(!function2()){
    //   return
    // }
  } else if(from == 'page3' && to == 'page2'){
    //Kosongin jumlah pinjaman dan tenor
  }

  //"Ganti page"
  document.querySelector('#'+from).style.display = 'none'
  document.querySelector('#'+to).style.display = 'inline' //bisa flex ato apalah
}

function formNamaDanKTP(){
  Nama = document.getElementById('namaUser').value
  nomorKTP = document.getElementById('ktpUser').value
  if(!Nama){
    alert('Nama tidak boleh kosong')
    return false
  } else if(!nomorKTP) {
    alert('KTP tidak boleh kosong')
    return false
  }
  document.querySelector('#greetingsNama').textContent = 'Halo, ' + Nama
  return true
}

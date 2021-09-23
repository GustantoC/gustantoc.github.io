let Nama = ''
let nomorKTP = ''
let bulanan = ''
let tempoAkhir = ''
let totalPinjaman = ''
let tenorBulan = ''

function calculateLoan() {
    let amount = document.querySelector('#amount').value
    let month = document.querySelector('input[name=month]:checked').value
    let monthlyInterest = amount * (5/100/month)
    let paymentperbulan = Math.ceil((amount/month) + monthlyInterest)
    if (amount < 1000000) {
      document.getElementById('payment').textContent = 'Amount minimum is Rp.1000.000'
    } else {
      document.getElementById('payment').textContent = paymentperbulan
      document.getElementById('jatuhTempo').textContent = jatuhTempo(Number(month))
    }
    bulanan = paymentperbulan
    totalPinjaman = amount
    tenorBulan = month
    tempoAkhir = jatuhTempo(Number(month))
}


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
  let returnTempo = tempo.getDate()+'-'+(tempo.getMonth()+1)+'-'+tempo.getFullYear()
  return returnTempo
} 

function nextPage(from,to){
  if(from == 'page1'){
    console.log('masuk Page1');
    if(!formNamaDanKTP()){
      return
    }
  } else if(from == 'page2' && to == 'page3'){
    console.log(totalPinjaman);
    summaryPage()
    if(Number(totalPinjaman) < 1000000){
      alert('Pinjaman harus diatas Rp. 1.000.000,-')
      return
    }
  } else if(from == 'page3' && to == 'page4'){
    if(!document.getElementById('noRek').value){
      alert('Mohon isi nomor rekening')
      return
    }
    document.querySelector('#rekeningDisplay').textContent = document.getElementById('noRek').value
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
  calculateLoan()
  return true
}

function summaryPage(){
  document.querySelector('#summaryNama').textContent = 'Nama: ' + Nama
  document.querySelector('#summaryKTP').textContent = 'KTP : ' + nomorKTP
  document.querySelector('#summaryTotalPinjaman').textContent = 'Total Pinjaman : ' +toRupiah(totalPinjaman)
  document.querySelector('#summaryTenor').textContent = 'Tenor : ' + tenorBulan + ' bulan'
  document.querySelector('#summaryBulanan').textContent = 'Bulanan : ' + toRupiah(bulanan.toString())
  document.querySelector('#summaryJatuhTempo').textContent = 'Jatuh Tempo : ' + tempoAkhir
}

function toRupiah(num) {
  let tmp = []
  for (let i = num.length-1; i >= 0; i--) {
      tmp.push(num[i])
  }
  tmp.unshift('0')
  let tmp2 = ''
  for (let j = 0; j < tmp.length; j++) {
      if (j%3 === 0 && j != tmp.length-1 && j !== 0) {
          tmp2 += tmp[j] + '.' 
      } else if(j !== 0) {
          tmp2 += tmp[j]
      }
  }

  let rupiah = ''
  for (let k = tmp2.length-1; k >= 0 ; k--) {
      rupiah += tmp2[k]
  }

  let result = `Rp. ${rupiah},00`
  return result

}
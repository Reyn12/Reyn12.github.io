// TRANSFER BANK
const nominal_bca = document.getElementById('nominal_bca');
const nominal_bni = document.getElementById('nominal_bni');

// VIRTUAL ACCOUNT
const nominal_maybank = document.getElementById('maybankVa');
const nominal_permataVa = document.getElementById('permataVa');
const nominal_bniVa = document.getElementById('bniVa');
const nominal_briVa = document.getElementById('briVa');
const nominal_mandiriVa = document.getElementById('mandiriVa');
const nominal_bcaVa = document.getElementById('bcaVa');
const nominal_sinarmasVa = document.getElementById('sinarmasVa');
const nominal_cimbVa = document.getElementById('cimbVa');
const nominal_bsiVa = document.getElementById('bsiVa');

// E WALLET
const nominal_ovoEwallet = document.getElementById('ovoEwallet');
const nominal_shopeeEwallet = document.getElementById('shopeeEwallet');
const nominal_danaEwallet = document.getElementById('danaEwallet');
const nominal_linkajaEwallet = document.getElementById('linkajaEwallet');

// CONVENIENCE STORE
const nominal_alfamartCS = document.getElementById('alfamartCS');
const nominal_indomaretCS = document.getElementById('indomaretCS');
const nominal_alfamidiCS = document.getElementById('alfamidiCS');

// Payment BCA
const bcaPayment = document.getElementById('bca')
const bniPayment = document.getElementById('bni')

// nominal
const nominal = document.getElementsByClassName("checkbox-nominal")

// list order
let valuePAYMENT = document.getElementById("valuePayment");

let hargaTB = ['2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.016.000', '2.017.000']

let hargaVA = ['2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000', '2.020.000']

let hargaEW = ['2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000', '2.000.000']

let hargaCS = ['2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000', '2.050.000']

for (let i = 0.; i < nominal.length; i++) {
	nominal[i].addEventListener("click", function() {
		if (nominal[i].checked) {
			// TB
	    	nominal_bni.innerHTML = `${hargaTB[i]} Rp`;
	    	nominal_bca.innerHTML = `${hargaTB[i]} Rp`;

	    	// VA
	    	nominal_maybank.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_permataVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_bniVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_briVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_mandiriVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_bcaVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_sinarmasVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_cimbVa.innerHTML = `${hargaVA[i]} Rp`;
	    	nominal_bsiVa.innerHTML = `${hargaVA[i]} Rp`;

	    	// EW
	    	nominal_ovoEwallet.innerHTML = `${hargaEW[i]} Rp`;
	    	nominal_shopeeEwallet.innerHTML = `${hargaEW[i]} Rp`;
	    	nominal_danaEwallet.innerHTML = `${hargaEW[i]} Rp`;
	    	nominal_linkajaEwallet.innerHTML = `${hargaEW[i]} Rp`;

	    	// CS
	    	nominal_alfamartCS.innerHTML = `${hargaCS[i]} Rp`;
	    	nominal_indomaretCS.innerHTML = `${hargaCS[i]} Rp`;
	    	nominal_alfamidiCS.innerHTML = `${hargaCS[i]} Rp`;
	    }
	})

	bcaPayment.addEventListener("click", function() {
	    if (nominal[i].checked && bcaPayment.checked) {
		    valuePAYMENT.textContent = "Bank Central Asia (BCA)"
		}
	})

	bniPayment.addEventListener("click", function() {
		if (nominal[i].checked && bniPayment.checked) {
			valuePAYMENT.textContent = "Bank Negara Indonesia (BNI)"
		}
	})
}

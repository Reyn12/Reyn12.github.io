// TRANSFER BANK
const nominal_bca = document.getElementById('nominal_bca');
const nominal_bni = document.getElementById('nominal_bni');

// Payment BCA
const bcaPayment = document.getElementById('bca')

// nominal
const nominal = document.getElementsByClassName("checkbox-nominal")
console.log(nominal)

let harga = ["1123","132","1324","35","57","243", "24","634", "35", "24", "354", "46", "24", "243", "243", "243", "43", "3424"]

for (let i = 0.; i < nominal.length; i++) {
	nominal[i].addEventListener("click", function() {
		if (nominal[i].checked) {
	    	nominal_bni.innerHTML = harga[i];
	    	nominal_bca.innerHTML = harga[i];
	    } 

	    if (nominal[i].checked && bcaPayment.checked) {
        	valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    	}
	})

}
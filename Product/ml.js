const item18 = document.getElementById('18');
const bca = document.getElementById('bca');

let harga = 0;
const textBca = bca.textContent; // biar presist 

item18.addEventListener('click', () => {
    harga += 318000;

    if (item18.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

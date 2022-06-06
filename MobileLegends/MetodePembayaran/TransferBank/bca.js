// transfer bank
let bank = document.getElementById('bank');

// BCA PAYMENT
const bca = document.getElementById('bca');
const nominal_bca = document.getElementById('nominal_bca');

let harga = 0;
const textnominal_bca = nominal_bca.textContent; // biar presist 

const item18 = document.getElementById('18');
item18.addEventListener('click', () => {
    harga += 2016000;

    if (item18.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
    
})

const item17 = document.getElementById('17');
item17.addEventListener('click', () => {
    harga += 1209600;

    if (item17.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item16 = document.getElementById('16');
item16.addEventListener('click', () => {
    harga += 973500;

    if (item16.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item15 = document.getElementById('15');
item15.addEventListener('click', () => {
    harga += 328500;

    if (item15.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item14 = document.getElementById('14');
item14.addEventListener('click', () => {
    harga += 274600;

    if (item14.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item13 = document.getElementById('13');
item13.addEventListener('click', () => {
    harga += 228700;

    if (item13.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item12 = document.getElementById('12');
item12.addEventListener('click', () => {
    harga += 204600;

    if (item12.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item11 = document.getElementById('11');
item11.addEventListener('click', () => {
    harga += 168900;

    if (item11.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item10 = document.getElementById('10');
item10.addEventListener('click', () => {
    harga += 164800;

    if (item10.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item9 = document.getElementById('9');
item9.addEventListener('click', () => {
    harga += 134600;

    if (item9.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item8 = document.getElementById('8');
item8.addEventListener('click', () => {
    harga += 103400;

    if (item8.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item7 = document.getElementById('7');
item7.addEventListener('click', () => {
    harga += 84100;

    if (item7.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item6 = document.getElementById('6');
item6.addEventListener('click', () => {
    harga += 61800;

    if (item6.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item5 = document.getElementById('5');
item5.addEventListener('click', () => {
    harga += 42700;

    if (item5.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item4 = document.getElementById('4');
item4.addEventListener('click', () => {
    harga += 21300;

    if (item4.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item3 = document.getElementById('3');
item3.addEventListener('click', () => {
    harga += 134800;

    if (item3.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item2 = document.getElementById('2');
item2.addEventListener('click', () => {
    harga += 305800;

    if (item2.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

const item1 = document.getElementById('1');
item1.addEventListener('click', () => {
    harga += 117000;

    if (item1.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp.' + harga;
        bank.textContent = textnominal_bca + 'Rp.' + harga;
        harga = 0;
    }
})

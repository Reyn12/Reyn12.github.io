
const bank = document.getElementById('bank');
const tfBank = bank.textContent; // biar presist 

const bank18 = document.getElementById('18');
bank18.addEventListener('click', () => {
    harga += 2016000;

    if (bank18.checked) {
        bank.textContent = tfBank + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

// BCA PAYMENT
const bca = document.getElementById('bca');

let harga = 0;
const textBca = bca.textContent; // biar presist 

const item18 = document.getElementById('18');
item18.addEventListener('click', () => {
    harga += 2016000;

    if (item18.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item17 = document.getElementById('17');
item17.addEventListener('click', () => {
    harga += 1209600;

    if (item17.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item16 = document.getElementById('16');
item16.addEventListener('click', () => {
    harga += 973500;

    if (item16.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item15 = document.getElementById('15');
item15.addEventListener('click', () => {
    harga += 328500;

    if (item15.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item14 = document.getElementById('14');
item14.addEventListener('click', () => {
    harga += 274600;

    if (item14.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item13 = document.getElementById('13');
item13.addEventListener('click', () => {
    harga += 228700;

    if (item13.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item12 = document.getElementById('12');
item12.addEventListener('click', () => {
    harga += 204600;

    if (item12.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item11 = document.getElementById('11');
item11.addEventListener('click', () => {
    harga += 168900;

    if (item11.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item10 = document.getElementById('10');
item10.addEventListener('click', () => {
    harga += 164800;

    if (item10.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item9 = document.getElementById('9');
item9.addEventListener('click', () => {
    harga += 134600;

    if (item9.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item8 = document.getElementById('8');
item8.addEventListener('click', () => {
    harga += 103400;

    if (item8.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item7 = document.getElementById('7');
item7.addEventListener('click', () => {
    harga += 84100;

    if (item7.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item6 = document.getElementById('6');
item6.addEventListener('click', () => {
    harga += 61800;

    if (item6.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item5 = document.getElementById('5');
item5.addEventListener('click', () => {
    harga += 42700;

    if (item5.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item4 = document.getElementById('4');
item4.addEventListener('click', () => {
    harga += 21300;

    if (item4.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item3 = document.getElementById('3');
item3.addEventListener('click', () => {
    harga += 134800;

    if (item3.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item2 = document.getElementById('2');
item2.addEventListener('click', () => {
    harga += 305800;

    if (item2.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const item1 = document.getElementById('1');
item1.addEventListener('click', () => {
    harga += 117000;

    if (item1.checked) {
        bca.textContent = textBca + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

// BNI PAYMENT
const bni = document.getElementById('bni');
const textBni = bni.textContent; // biar presist

const bni1 = document.getElementById('1');
bni1.addEventListener('click', () => {
    harga += 117000;

    if (bni1.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni2 = document.getElementById('2');
bni2.addEventListener('click', () => {
    harga += 305800;

    if (bni2.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni3 = document.getElementById('3');
bni3.addEventListener('click', () => {
    harga += 134800;

    if (bni3.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni4 = document.getElementById('4');
bni4.addEventListener('click', () => {
    harga += 21300;

    if (bni4.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni5 = document.getElementById('5');
bni5.addEventListener('click', () => {
    harga += 42700;

    if (bni5.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni6 = document.getElementById('6');
bni6.addEventListener('click', () => {
    harga += 61800;

    if (bni6.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni7 = document.getElementById('7');
bni7.addEventListener('click', () => {
    harga += 84100;

    if (bni7.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni8 = document.getElementById('8');
bni8.addEventListener('click', () => {
    harga += 103400;

    if (bni8.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni9 = document.getElementById('9');
bni9.addEventListener('click', () => {
    harga += 134600;

    if (bni9.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni10 = document.getElementById('10');
bni10.addEventListener('click', () => {
    harga += 164800;

    if (bni10.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni11 = document.getElementById('11');
bni11.addEventListener('click', () => {
    harga += 168900;

    if (bni11.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni12 = document.getElementById('12');
bni12.addEventListener('click', () => {
    harga += 204600;

    if (bni12.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni13 = document.getElementById('13');
bni13.addEventListener('click', () => {
    harga += 228700;

    if (bni13.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni14 = document.getElementById('14');
bni14.addEventListener('click', () => {
    harga += 274600;

    if (bni14.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni15 = document.getElementById('15');
bni15.addEventListener('click', () => {
    harga += 328500;

    if (bni15.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni16 = document.getElementById('16');
bni16.addEventListener('click', () => {
    harga += 973500;

    if (bni16.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni17 = document.getElementById('17');
bni17.addEventListener('click', () => {
    harga += 1209600;

    if (bni17.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})

const bni18 = document.getElementById('18');
bni18.addEventListener('click', () => {
    harga += 2016000;

    if (bni18.checked) {
        bni.textContent = textBni + 'Rp.' + harga;
        harga = 0; // set ulang biar g nimpa 
    }
})
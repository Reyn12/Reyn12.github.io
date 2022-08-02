// transfer bank
let bank = document.getElementById('bank');

// BCA PAYMENT
const bca = document.getElementById('bca');
const nominal_bca = document.getElementById('nominal_bca');

let harga = 0;
const textnominal_bca = nominal_bca.textContent; // biar presist 

// Payment BCA
const bcaPayment = document.getElementById('bca')

const item18 = document.getElementById('ml_9302');
item18.addEventListener('click', () => {
    harga = '2.016.000';

    if (item18.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "9302 Diamonds (7822+1480)";
    }
    if (item18.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
    
})

const item17 = document.getElementById('ml_5534');
item17.addEventListener('click', () => {
    harga = '1.209.600';

    if (item17.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "5534 Diamonds (4744+790)";
    }
    if (item17.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item16 = document.getElementById('ml_4394');
item16.addEventListener('click', () => {
    harga = '973.500';

    if (item16.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "4394 Diamonds (3724+670)";
    }
    if (item16.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item15 = document.getElementById('ml_1412');
item15.addEventListener('click', () => {
    harga = '328.500';

    if (item15.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "1412 Diamonds (1250+162)";
    }
    if (item15.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item14 = document.getElementById('ml_1163');
item14.addEventListener('click', () => {
    harga = '274.600';

    if (item14.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "1163 Diamonds (1041+122)";
    }
    if (item14.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item13 = document.getElementById('ml_977');
item13.addEventListener('click', () => {
    harga = '228.700';

    if (item13.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "977 Diamonds (872+105)";
    }
    if (item13.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item12 = document.getElementById('ml_878');
item12.addEventListener('click', () => {
    harga = '204.600';

    if (item12.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "878 Diamonds (781+97)";
    }
    if (item12.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item11 = document.getElementById('ml_720');
item11.addEventListener('click', () => {
    harga = '168.900';

    if (item11.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "720 Diamonds (638+82)";
    }
    if (item11.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item10 = document.getElementById('ml_706');
item10.addEventListener('click', () => {
    harga = '164.800';

    if (item10.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "706 Diamonds (625+81)";
    }
    if (item10.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item9 = document.getElementById('ml_556');
item9.addEventListener('click', () => {
    harga = '134.600';

    if (item9.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "556 Diamonds (506+50)";
    }
    if (item9.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item8 = document.getElementById('ml_429');
item8.addEventListener('click', () => {
    harga = '103.400';

    if (item8.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "429 Diamonds (390+39)";
    }
    if (item8.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item7 = document.getElementById('ml_344');
item7.addEventListener('click', () => {
    harga = '84.100';

    if (item7.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "344 Diamonds (312+32)";
    }
    if (item7.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item6 = document.getElementById('ml_257');
item6.addEventListener('click', () => {
    harga = '61.800';

    if (item6.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "257 Diamonds (234+23)";
    }
    if (item18.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item5 = document.getElementById('ml_172');
item5.addEventListener('click', () => {
    harga = '42.700';

    if (item5.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "172 Diamonds (156+16)";
    }
    if (item5.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item4 = document.getElementById('ml_86');
item4.addEventListener('click', () => {
    harga = '21.300';

    if (item4.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "86 Diamonds (78+8)";
    }
    if (item4.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item3 = document.getElementById('ml_twilight');
item3.addEventListener('click', () => {
    harga = '134.800';

    if (item3.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "Twilight Pass (Promo)";
    }
    if (item3.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item2 = document.getElementById('ml_starlightPlus');
item2.addEventListener('click', () => {
    harga = '305.800';

    if (item2.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "Starlight Member Plus (Promo)";
    }
    if (item2.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

const item1 = document.getElementById('ml_starlight');
item1.addEventListener('click', () => {
    harga = '117.000';

    if (item1.checked) {
        nominal_bca.textContent = textnominal_bca + 'Rp ' + harga;
        bank.textContent = textnominal_bca + 'Rp ' + harga;
        harga = 0;
        valueItem.textContent = "Starlight Member + 26 Diamonds (Promo)";
    }
    if (item1.checked && bcaPayment.checked) {
        valuePAYMENT.textContent = "Bank Central Asia (BCA)"
    }
})

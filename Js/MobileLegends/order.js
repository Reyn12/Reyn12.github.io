let inputID = document.getElementById("inputID");
let IDserver = document.getElementById("IDserver");
let Order = document.getElementById("Order");
let valueID = document.getElementById("valueID");
let valueSERVER = document.getElementById("valueSERVER");
let valueItem = document.getElementById("valueItem");

function listOrder() {
  valueID.textContent = inputID.value;
  valueSERVER.textContent = IDserver.value;
}

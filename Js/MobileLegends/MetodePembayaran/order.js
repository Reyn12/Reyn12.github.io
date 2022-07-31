let inputID =  document.getElementById("inputID")
let IDserver =  document.getElementById("IDserver")
let Order =  document.getElementById("Order")
let valueID = document.getElementById("valueID")
let valueSERVER = document.getElementById("valueSERVER")

function listOrder() {
    console.log("tes")
    valueID.textContent = inputID.value
    valueSERVER.textContent = IDserver.value
}
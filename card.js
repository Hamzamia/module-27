// function updateCase(isIncreasing) {
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     // caseInput.value = parseInt(caseNumber) + 1
//     if (isIncreasing == true) {
//         caseInput.value = parseInt(caseNumber) + 1;
//     }
//     else {
//         casenumber.value = parseInt(casenumberText) - 1;

//     }
// }



// document.getElementById('input-plus').addEventListener('click', function () {
//     updateCase(true);

// })

// // document.getElementById('input-minus').addEventListener('click', function () {
// //     //console.log("minus button clicked");
// //     const caseInput = document.getElementById('case-number');
// //     const caseInputText = caseInput.value;
// //     caseInput.value = parseInt(caseInputText) - 1;
// // })

// document.getElementById('input-minus').addEventListener('click', function () {

//     // const casenumber = document.getElementById('case-number');
//     // const casenumberText = casenumber.value;
//     updateCase(false);
//     // casenumber.value = parseInt(casenumberText) - 1;

// })

function updateproduct(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productnumber = productInput.value;
    if (isIncreasing == true) {
        productnumber = parseInt(productnumber) + 1;
    }
    else if (productnumber > 0) {
        productnumber = parseInt(productnumber) - 1;
    }
    productInput.value = productnumber;
    const productTotalPrice = document.getElementById(product + '-total');
    productTotalPrice.innerText = productnumber * price;

    calculateTotal();

}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const productnumber = parseInt(phoneInput.value);
    return productnumber;
}

function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number');
    // const productnumber = parseInt(phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;

    // update on the  html element
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalPrice;





}





////phone update
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproduct('phone', 1219, true);


})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateproduct('phone', 1219, false);
})

//case update  event

document.getElementById('input-plus').addEventListener('click', function () {
    updateproduct('case', 59, true);
});
document.getElementById('input-minus').addEventListener('click', function () {
    updateproduct('case', 59, false);
})
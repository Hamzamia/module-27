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
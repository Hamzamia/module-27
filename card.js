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

function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else {
        caseInput.value = parseInt(caseNumber) - 1;
    }

}

document.getElementById('input-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});
document.getElementById('input-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})
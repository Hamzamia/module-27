document.getElementById('input-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseInputText = caseInput.value;
    caseInput.value = parseInt(caseInputText) + 1;

})

document.getElementById('input-minus').addEventListener('click', function () {
    //console.log("minus button clicked");
    const caseInput = document.getElementById('case-number');
    const caseInputText = caseInput.value;
    caseInput.value = parseInt(caseInputText) - 1;
})
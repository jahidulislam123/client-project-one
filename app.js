
function updateProductNumber(product,price, isIncreasing) {
    console.count('hi hi');
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;

    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    // updateCaseTotal
    const productTotal = document.getElementById(product +'-total');
    productTotal.innerText = productNumber *  price;
    calculateTotal();
}


function getInputValue(product){
    const productInput =document.getElementById(product+'-number');
    const productNumber =parseFloat( productInput.value) ;
    return productNumber;
}

function calculateTotal (){
   
 const phoneTotal =getInputValue('phone') * 1219;
 const caseTotal =getInputValue('case')*59;

 const subTotal =phoneTotal+caseTotal;
 const taxAmount = subTotal/10;
 const tatalPrice = subTotal+taxAmount;

 document.getElementById('sub-total').innerText=subTotal;
 document.getElementById('tax-amount').innerText=taxAmount;
 document.getElementById('total-price').innerText=tatalPrice;

}


// phone increse decreses event
document.getElementById('phone-plus').addEventListener('click', function () {

    console.log('phone plus clicked');
    updateProductNumber('phone',1229,true);
});
document.getElementById('phone-minus').addEventListener('click', function () {

    console.log('phone plus clicked');
    updateProductNumber('phone',1229,false);
});


// handle case increse decrese events
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',59,false);

});
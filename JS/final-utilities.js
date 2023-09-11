// ---------------------------------
// function for Plus Button
// ---------------------------------
function addingNewItemQuantity(itemId,) {
    const caseField = document.getElementById(itemId)
    const caseFieldString = caseField.value
    const previousCaseNumber = parseInt(caseFieldString)

    const newCaseNumber = previousCaseNumber + 1;
    caseField.value = newCaseNumber;

    return newCaseNumber
}

function getAddPriceById(itemPriceId, itemId, itemPrice) {
    const priceField = document.getElementById(itemPriceId)
    const priceFieldString = priceField.innerText
    const priceFieldNumber = parseFloat(priceFieldString)


    const itemQuantityField = document.getElementById(itemId)
    const itemQuantityString = itemQuantityField.value
    const itemQuantityNumber = parseFloat(itemQuantityString)

    const newPrices = itemPrice * itemQuantityString

    // const priceField = document.getElementById(itemPriceId)
    priceField.innerText = newPrices
}

// ---------------------------------
// function for minus Button
// ---------------------------------

function reducingNewItemQuantity(itemId,) {
    const caseField = document.getElementById(itemId)
    const caseFieldString = caseField.value
    const previousCaseNumber = parseInt(caseFieldString)

    const newCaseNumber = previousCaseNumber - 1;
    caseField.value = newCaseNumber;

    return newCaseNumber
}

function getMinusPriceById(itemPriceId, itemId, itemPrice) {
    const priceField = document.getElementById(itemPriceId)
    const priceFieldString = priceField.innerText
    const priceFieldNumber = parseFloat(priceFieldString)


    const itemQuantityField = document.getElementById(itemId)
    const itemQuantityString = itemQuantityField.value
    const itemQuantityNumber = parseFloat(itemQuantityString)

    // const newPrices = priceFieldNumber - (amount)

    if (priceFieldNumber == 0) {
        newPrices = priceFieldNumber + amount
    }
    else { newPrices = priceFieldNumber - (itemPrice) }

    // const priceField = document.getElementById(itemPriceId)
    priceField.innerText = newPrices
}

// ---------------------------------
//  Function for Sub Total
// ---------------------------------

// function getTotalAmountById(subtotalId, item1, item2) {
//     // const subTotalField = document.getElementById(subtotalId)
//     // const subTotalString = subTotalField.innerText
//     // const subTotal = parseFloat(subTotalString)

//     // const itemA = document.getElementById('iphone-12proMaxPrice')
//     // const itemAString = itemA.innerText
//     // const itemAnumber = parseFloat(itemAString)

//     // const itemB = document.getElementById('iphone-12proMaxCoverPrice')
//     // const itemBString = itemB.innerText
//     // const itemBnumber = parseFloat(itemBString)




//     // const subTotal = itemAnumber + itemBnumber
//     // console.log(subTotal)
//     // return subTotal
//     const payableField = document.getElementById(payableFieldId)
//     const payableString = payableField.innerText
//     // const payableAmount = parseFloat(payableString)

//     payableField.innerText = subTotal;



// }

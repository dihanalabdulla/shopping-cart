// ---------------------------------
// Item 1
// ---------------------------------
const item1Added = document.getElementById('btn-item1Plus').addEventListener('click', function () {
    var caseNumber = addingNewItemQuantity("item-1")
    const currentPrice = getAddPriceById('iphone-12proMaxPrice', 'item-1', 1000)
    var subtotal = setSubTotalPriceItem('iphone-12proMaxPrice', 'iphone-12proMaxCoverPrice', 5)
})


const item1Reduced = document.getElementById('btn-item1Minus').addEventListener('click', function () {
    var caseNumber = reducingNewItemQuantity("item-1")
    const currentPrice = getMinusPriceById('iphone-12proMaxPrice', 'item-1', 1000)
    var subtotal = setSubTotalPriceItem('iphone-12proMaxPrice', 'iphone-12proMaxCoverPrice', 5)
})

// ---------------------------------
// Item 2
// ---------------------------------
const item2Added = document.getElementById('btn-item2Plus').addEventListener('click', function () {
    var caseNumber = addingNewItemQuantity("item-2")
    const currentPrice = getAddPriceById('iphone-12proMaxCoverPrice', 'item-2', 50)
    var subtotal = setSubTotalPriceItem('iphone-12proMaxPrice', 'iphone-12proMaxCoverPrice', 5)
})


const item2Reduced = document.getElementById('btn-item2Minus').addEventListener('click', function () {
    var caseNumber = reducingNewItemQuantity("item-2")
    const currentPrice = getMinusPriceById('iphone-12proMaxCoverPrice', 'item-2', 50)
    var subtotal = setSubTotalPriceItem('iphone-12proMaxPrice', 'iphone-12proMaxCoverPrice', 5)
})



// ---------------------------------
// Sub Total
// ---------------------------------




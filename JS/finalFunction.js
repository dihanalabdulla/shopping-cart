// ---------------------------------
// Item 1
// ---------------------------------
const item1Added = document.getElementById('btn-item1Plus').addEventListener('click', function () {
    var caseNumber = addingNewItemQuantity("item-1")
    const currentPrice = getAddPriceById('iphone-12proMaxPrice', 'item-1', 1000)

    const itemA = document.getElementById('iphone-12proMaxPrice')
    const itemAString = itemA.innerText
    const itemAnumber = parseFloat(itemAString)

    const itemB = document.getElementById('iphone-12proMaxCoverPrice')
    const itemBString = itemB.innerText
    const itemBnumber = parseFloat(itemBString)


    const subTotal = itemAnumber + itemBnumber


    console.log(subTotal)
})


const item1Reduced = document.getElementById('btn-item1Minus').addEventListener('click', function () {
    var caseNumber = reducingNewItemQuantity("item-1")
    const currentPrice = getMinusPriceById('iphone-12proMaxPrice', 'item-1', 1000)
})

// ---------------------------------
// Item 2
// ---------------------------------
const item2Added = document.getElementById('btn-item2Plus').addEventListener('click', function () {
    var caseNumber = addingNewItemQuantity("item-2")
    const currentPrice = getAddPriceById('iphone-12proMaxCoverPrice', 'item-2', 50)

})


const item2Reduced = document.getElementById('btn-item2Minus').addEventListener('click', function () {
    var caseNumber = reducingNewItemQuantity("item-2")
    const currentPrice = getMinusPriceById('iphone-12proMaxCoverPrice', 'item-2', 50)
})



// ---------------------------------
// Sub Total
// ---------------------------------

// const itemA = document.getElementById('iphone-12proMaxPrice')
// const itemAString = itemA.innerText
// const itemAnumber = parseFloat(itemAString)

// const itemB = document.getElementById('iphone-12proMaxCoverPrice')
// const itemBString = itemB.innerText
// const itemBnumber = parseFloat(itemBString)


const itemAString = item2Added.innerText
const itemAnumber = parseFloat(itemAString)


const itemBString = item1Added.innerText
const itemBnumber = parseFloat(itemBString)


const subTotal = itemAnumber + itemBnumber


console.log(subTotal)

const submit = document.querySelector('.btn').addEventListener('click',postProduct)

function postProduct(){
    const productName = document.querySelector('.productName').value
const productPrice = document.querySelector('.productPrice').value
const consoleType = document.querySelector('.consoleType').value
const productDescription = document.querySelector('.post-Description').value
const productViews = document.querySelector('.productViews').value
const productGenre = document.querySelector('.productGenre').value
const productAvalible = document.querySelector('.Avalible').value





const newProduct =  fetch(`/products/new-product`, {
    method: 'POST',
    body: JSON.stringify({
        productName,
         productPrice, 
         consoleType,
         productDescription,
         productViews,
         productGenre,
        productAvalible
    }),
    headers: {
      'Content-Type': 'application/json',
    },

})
}

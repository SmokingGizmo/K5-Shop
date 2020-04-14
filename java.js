const AddToCartBtns = document.querySelectorAll(".figure-button");

let cartPrice = document.querySelector(".cart-price");

InStore();

function InStore() {
    for (let i = 0; i < AddToCartBtns.length; i++) {
        AddToCartBtns[i].addEventListener("click", AddToCart);
      }
}

function AddToCart() {

    const product = this.parentElement;
    
    let totalPrice;

    let productPricePoint = product.querySelector(".figure-button").innerHTML;

    let productPrice = parseInt(productPricePoint, 10);

    totalPrice += productPrice

    cartPrice.innerHTML = totalPrice.toString();

}




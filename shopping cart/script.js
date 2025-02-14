document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("cart-total");
    let cart = [];

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        totalPrice.textContent = total;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let name = this.getAttribute("data-name");
            let price = parseFloat(this.getAttribute("data-price"));
            cart.push({ name, price });
            updateCart();
        });
    });
});

// 

function clear() {
    
}

// clear cart
document.getElementById("clear-cart").addEventListener("click", function () {
    
    const cartItems = document.getElementById("cart-items").innerHTML=" ";
    const totalPrice = document.getElementById("cart-total").innerHTML=0;

    

});
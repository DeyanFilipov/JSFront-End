function solve() {
   let addButtons = Array.from(document.getElementsByClassName("add-product"));
   let checkoutBtn = document.querySelector(".checkout");
   
   let textarea = document.getElementsByTagName("textarea")[0];
 
   let boughtProducts = [];
   let totalPrice = 0;
 
   addButtons.forEach((btn) => {
     btn.addEventListener("click", addToCart);
   });
 
   function addToCart(e) {
     let product = e.currentTarget.parentNode.parentNode;
 
     let productTitle = product.querySelector(".product-title").textContent;
     let productPrice = product.querySelector(".product-line-price").textContent;
 
     if (!boughtProducts.includes(productTitle)) {
       boughtProducts.push(productTitle);
     }
 
     totalPrice += Number(productPrice);
 
     textarea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
   }
   checkoutBtn.addEventListener("click", checkout);
 
   function checkout(e) {
     textarea.value += `You bought ${boughtProducts.join(
       ", "
     )} for ${totalPrice.toFixed(2)}.`;
 
     addButtons.forEach((btn) => {
       btn.removeEventListener("click", addToCart);
     });

     checkoutBtn.removeEventListener("click", checkout);
   }
 }
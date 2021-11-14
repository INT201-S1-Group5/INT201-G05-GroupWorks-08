let addCart = document.querySelectorAll(".add");
let cartNumbers = document.querySelector("#cart");
let cartEle = document.querySelector('#incart');
let productList = document.querySelectorAll(".product");

let amount = 0;
let cartCollect = {
    cart: [],
    id: []
};

cartEle.innerHTML = amount;
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", () => {
        alert(`เพิ่มสินค้า 1 ชิ้น`);
        amount += 1;
        cartEle.innerHTML = amount;

        // function listCookies() {
        //     var theCookies = document.cookie.split(';');
        //     var aString = '';
        //     for (var i = 1; i <= theCookies.length; i++) {
        //         aString += i + ' ' + theCookies[i - 1] + "\n";
        //     }
        //     return aString;
        // }

        let productID = productList[i].id;
        if (cartCollect.id.includes(productID)) {
            let id = cartCollect.id.indexOf(productID);
            cartCollect.cart[id].amount += 1;
        } else {
            cartCollect.id.push(productID);
            cartCollect.cart.push({
                productDetails: {
                    productID: productID,
                    productName: productList[i].getElementsByClassName(productID)[0].textContent,
                },
                amount: 1
            });
        }
        setCookie("amount", amount, 365);
    }, true)
}

cartNumbers.addEventListener("click", () => {
    console.log(cartCollect);
}, true);
// localStorage.clear()

let cart = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []

//CALLBACK FUNCTIONS
const AddToCart = (item,number)=>{
    let CanAdd = true
    let itemToAdd = {
        title:item.title,
        price: item.price,
        num : number,
        subTotal : number*price
    }

    for (let i = 0; i < cart.length; i++) {
        const itm = cart[i];
        
        if(itm.itemName === itemToAdd.itemName){
            CanAdd = false
            itm.num += itemToAdd.num
        }
    }

    
    if(CanAdd){
        cart.push(itemToAdd);
    }
    cartNum.textContent = cart.length;
    localStorage.setItem("Cart",JSON.stringify(cart))
}
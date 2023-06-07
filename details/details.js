let details = document.getElementById("details")
const id = localStorage.getItem("itemId");
const cartNum = document.getElementById("cartNum")
cartNum.textContent = cart.length;
let number = 1;
const GetCurrentItem = (id) =>{
    for (let index = 0; index < ShopItems.length; index++) {
        const element = ShopItems[index];
        
        if(element.id == id)
        {
            return element;
        }
    }
}
item = GetCurrentItem(id)


const DisplayDetails = ()=>{
    details.innerHTML = `<div class="img">

    </div>
    <div class="info">
        <h3>${item.itemName}</h3>
        <div class="priceTag">
            <h5>Price </h2><span>$${item.itemPrice}.00</span>
        </div>
        <div class="stock">
            <p>No Of Items In Stock : </p><span>${item.numInStock}</span>
        </div>
        <div class="numToAdd">
            <p>Number</p>
            <span id="num">${number}</span>
            <div class="btns">
                <button id="add" onClick= "Add()">+</button>
                <button id="sub" onClick= "Sub()">-</button>
            </div>
        </div>
        <button class="addBtn" id="addTo" onClick="AddToCart()">Add To Cart</button>
    </div>`
}


const Add = () =>{
    const num = document.getElementById("num")
    if(number < item.numInStock){
        number++;
        num.textContent = number
    }
}

const Sub = () =>{
    const num = document.getElementById("num")
    if(number > 1){
        number--;
        num.textContent = number
    }
} 

const AddToCart = ()=>{
    let CanAdd = true
    let itemToAdd = {
        itemName:item.itemName,
        itemPrice: item.itemPrice,
        num : number
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

DisplayDetails();
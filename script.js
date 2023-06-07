const shopContainer = document.getElementById("shopContainer")
const cartNum = document.getElementById("cartNum")
cartNum.textContent = cart.length;

const DisplayShopItemOnTheScreen=()=>{
    ShopItems.forEach(item => {
        item.id;
        item.itemName;
        item.itemPrice;
        item.numInStock;
        DrawItemCard(item);
    });
}

const DrawItemCard = (item) =>{
    let itemCard = document.createElement("a");
    let itemImage = document.createElement("div");
    let itemName = document.createElement("h3");
    let priceTag = document.createElement("div")
    let pT = document.createElement("p")
    let pS = document.createElement("span")

    itemName.textContent = item.itemName;

    itemCard.href = "details/details.html"

    priceTag.classList.add("price")
    pT.textContent = "Price $ "
    pS.textContent = `${item.itemPrice}.00`
    priceTag.appendChild(pT)
    priceTag.appendChild(pS)

    itemCard.classList.add("itemCard")
    itemImage.classList.add("image")
    itemCard.appendChild(itemImage)
    itemCard.appendChild(itemName)
    itemCard.appendChild(priceTag)
    console.log(item.id)

    itemCard.addEventListener("click",async()=>{
        localStorage.setItem("itemId", item.id)
    })

    shopContainer.appendChild(itemCard)
}


DisplayShopItemOnTheScreen();
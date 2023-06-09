const shopContainer = document.getElementById("shopContainer")
const cartNum = document.getElementById("cartNum")
cartNum.textContent = cart.length;

const DisplayShopItemOnTheScreen = () => {
    ShopItems.forEach(item => {
        item.id;
        item.itemName;
        item.itemPrice;
        item.numInStock;
        DrawItemCard(item);
    });
}

const DrawItemCard = (item) => {
    let itemCard = document.createElement("div");

    itemCard.innerHTML = `<div href="details/details.html" class="itemCard">
        <img src=${item.image} class="image">
        </img>
        <h3>${item.title}</h3>
        <div class="price">
            <p>Price  </p><span>$${item.price}.00</span>
        </div>
        <div class="btns">
            <a class="add" onClick = "AddToCart">Add To Cart</a>
            <a href="details/details.html" class="view">View</a>
        </div>
    `

    itemCard.addEventListener("click", async () => {
        localStorage.setItem("itemId", item.id)
    })

    shopContainer.appendChild(itemCard)
}


DisplayShopItemOnTheScreen();


// CLICK FUNCTIONS
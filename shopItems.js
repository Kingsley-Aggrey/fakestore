let cart = localStorage.getItem("Cart")? JSON.parse(localStorage.getItem("Cart")) :[]
let ShopItems=[
    {
        id: 1,
        itemName : "Bag",
        numInStock: 5,
        itemPrice : 150
    },
    {
        id: 2,
        itemName : "Pen",
        numInStock: 20,
        itemPrice : 1
    },
    {
        id: 3,
        itemName : "Books",
        numInStock: 5,
        itemPrice : 250
    },
    {
        id: 4,
        itemName : "Toy",
        numInStock: 120,
        itemPrice : 100
    }
]
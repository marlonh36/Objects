const items = [
    {
        item: "shirt",
        category: "clothing",
        price: 12
    },
    {
        item: "pants",
        category: "clothing",
        price: 12
    },
    {
        item: "socks",
        category: "clothing",
        price: 12 
    },
    {
        item: "underwear",
        category: "clothing",
        price: 12 
    },
    {
        item: "wallet",
        category: "storage",
        price: 12 
    },
    {
        item: "backback",
        category: "storage",
        price: 12 
    },
    {
        item: "purse",
        category: "storage",
        price: 12 
    },
    {
        item: "fanny pack",
        category: "storage",
        price: 12 
    },
    {
        item: "sunglasses",
        category: "accessories",
        price: 12 
    },
    {
        item: "watch",
        category: "accessories",
        price: 12 
    },
    {
        item: "bracelet",
        category: "accessories",
        price: 12 
    },
    {
        item: "necklace",
        category: "accessories",
        price: 12 
    },
    {
        item: "beanie",
        category: "winter",
        price: 12 
    },
    {
        item: "earmuffs",
        category: "winter",
        price: 12 
    },
    {
        item: "scarf",
        category: "winter",
        price: 12 
    },
    {
        item: "gloves",
        category: "winter",
        price: 12 
    },
    {
        item: "sneakers",
        category: "footwear",
        price: 12 
    },
    {
        item: "crocs",
        category: "footwear",
        price: 12 
    },
    {
        item: "boots",
        category: "footwear",
        price: 12 
    },
    {
        item: "sandals",
        category: "footwear",
        price: 12 
    },
]

const cart = []

function addcart(item) {
cart.push(item.item)
}

function removecart(item) {
cart.pop(item.item)
}

function totalprice() {
    
}

/* 
console.log(items[7].item) */
addcart(items[5])
addcart(items[3])
removecart(items[3])
console.log(cart)
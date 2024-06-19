const product = function (name, quantity, price) {
    return {
        name: name,
        quantity: quantity,
        price: price,
    }
}


const inventory = {
    inventory: [],

    addProduct: function (item) {
        this.inventory.push(item);
    },

    updateQ: function (name, quantity) {
        for (let i=0;i<this.inventory.length;i++) {
            if (this.inventory[i].name === name) {
                this.inventory[i].quantity = quantity;
               
            }
        }
    },

    sellP: function (item, quantity0) {
        let Product = this.inventory.filter((item1) => item1.name == item); 
        if (Product[0].quantity>=quantity0) {
       Product[0].quantity =  Product[0].quantity-quantity0;
    console.log(`Sold ${quantity0} kg of ${item}`); } else {
        return console.log(`Only ${Product[0].quantity} kg of ${item} available`);
       }
        
    },

    report: function () {
        console.log(' ');
        console.log('Inventory report');
        this.inventory.map((item) => console.log(`${item.name} - Quantity: ${item.quantity} - Price: ${item.price}`))
    }
}



const p1 = product('rice',2, 50);
const p2 = product('wheat',5, 100);
const p3 = product('moong', 1 , 70);

inventory.addProduct(p1);
inventory.addProduct(p2);
inventory.addProduct(p3);


console.log(inventory.inventory);

inventory.updateQ('wheat',3);

console.log(inventory.inventory);

inventory.sellP('rice',2);

inventory.report();



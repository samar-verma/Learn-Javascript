function createItem(name, quantity, done) {
 return {
   name: name,
   quantity: quantity,
   status: done,
 };
};


const shoppingList = {
   items: [],

   addItem: function (item) {
      this.items.push(item)
   },

   removeItem: function (name) {
      this.items = this.items.filter((item) => item.name !== name)
   },

   listItem: function() {
      console.log('List of items');
      for (let item of this.items) {
         
         console.log(`${item.name}-${item.quantity}`);
      }
   },
  remainingList: function () {
   console.log('Items remaining to buy');
   for (let i = 0;i<this.items.length;i++) {
      if (this.items[i].status == 0) {
         console.log(this.items[i].name);
      }
   }
}

   

}


         
         // Creating items object
         const item1 = createItem('brush', 1, 1)
         const item2 = createItem('notebook', 3, 1)
         const item3 = createItem('facewash', 1, 0)
         const item4 = createItem('shirt', 2, 1)
         const item5 = createItem('apple', 12, 0)
         
         
         // Adding to items
         shoppingList.addItem(item1);
         shoppingList.addItem(item2);
         shoppingList.addItem(item3);
         shoppingList.addItem(item4);
         shoppingList.addItem(item5);
         
         // Removing from items
         shoppingList.removeItem('shirt')
         
         console.log((shoppingList.items[1].name));
         
     
         shoppingList.remainingList();
         
         
         

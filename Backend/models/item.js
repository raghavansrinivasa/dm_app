//get MySQL db
const db = require('../util/database');


//model for the item table
module.exports = class item {
    constructor(id, shopid, name, price, sale, discountend, category, discountprice, discountpercentage) {
        this.id = id;
        this.shopid = shopid;
        this.name = name;
        this.price = price;
        this.sale = sale;
        this.discountend = discountend;
        this.discountpercentage = discountpercentage;
        this.category = category;
        this.discountprice = discountprice;
    }

    //db test
    static fetchAll() {
        return db.execute('SELECT * FROM items');
    }

    //post item
    static post(shopid, name, price, sale, discountend, category, discountpercentage, discountprice) {
        return db.execute('INSERT INTO items (shopid, name, price, sale, discountend, category, discountpercentage, discountprice) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [shopid, name, price, sale, discountend, category, discountpercentage, discountprice]);
    }
}
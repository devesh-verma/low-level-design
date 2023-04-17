import Product from "./services/Product";
import Invoice from "./services/Invoice";
import product from "./services/Product";

class Facade {
    product: Product;
    invoice: Invoice;
    constructor() {
        this.product = new Product();
        this.invoice = new Invoice();
    }

    addProduct(){
        this.product.addProduct();
    }

    createInvoice(){
        this.invoice.createInvoice();
    }
}

export default Facade;
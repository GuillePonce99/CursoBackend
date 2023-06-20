class ProductManager {
    products;
    static code = 1;
    constructor(){
        this.products = [];
    }
    addProduct(title,description,price,thumbnail,stock,code){
        const producto = {
            title,
            description,
            price,
            thumbnail ,
            code : ProductManager.code,
            stock 
        };
        
        const validarCode = this.products.find((e)=> e.code === code)
        if (!title||!description||!price||!thumbnail||!stock) {
            return "Faltan datos"
        }else {
            if (validarCode) {
                return "Ya existe el producto con ese ID"
            } else {
                ProductManager.code++;
                this.products.push(producto)
            }
        }
        
    }
    getProducts(){
        return this.products;
    }
    getProductsById(id){
        const productsFilter = this.products.find((product)=> product.code == id)
        if (productsFilter== undefined) {
            return "Not Found";
        } else {
            return productsFilter
        }
    }

}


const producto = new ProductManager();
producto.addProduct("manzana", "fruta fresca", 200,"url",50)
producto.addProduct("pera", "fruta fresca", 100,"url",42)
producto.addProduct("banana", "fruta fresca", 150,"url",32)
producto.addProduct("kiwi", 550,"url",40) //PRODUCTO INCOMPLETO
producto.addProduct("naranja","fruta fresca", 550,"url",40, 2) //PRODUCTO CON ID REPETIDO
producto.addProduct("uva", "fruta fresca", 50,"url",10)

console.log(producto.getProducts());



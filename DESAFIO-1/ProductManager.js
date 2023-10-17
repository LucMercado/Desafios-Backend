class ProductManager {

    static contadorProductos = 0;

    constructor( ) {
        this.products = []
    }

    addProduct(title, description, price, code, stock) {
        
        const codeRepeat = this.products.find(p => p.code === code)

        if(codeRepeat) {
            console.log("Código de producto repetido, producto ya agregado anteriormente")
            
        } else{
            const newProduct = {
                id: ++ProductManager.contadorProductos,
                title,
                description,
                price,
                code,
                stock
            }
    
            this.products.push(newProduct)
            console.log("Producto agregado")
        }
        
    }
        

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const productFound = this.products.find(p => p.id === id)
        if (productFound) {
            console.log("Producto encontrado: ", productFound)
        } else {
            console.log("NOT FOUND")
        }
    }

}

const manager = new ProductManager

manager.addProduct("Coca-Cola zero", "sin azucar", 500, "0001", 55)
manager.addProduct("Coca-Cola zero", "sin azucar", 500, "0001", 55)
manager.addProduct("Fanta", "naranja", 500, "0002", 57)
console.log("Lista de productos", manager.getProducts())

manager.getProductById(1)




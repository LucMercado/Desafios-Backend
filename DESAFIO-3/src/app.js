import express from 'express'
import ProductManager from './ProductManager.js'

const manager = new ProductManager('./products.json')

const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send("Servidor OK")
})

app.get('/products', async (req, res) => {
    const products = await manager.getProducts()
    const limit = req.query.limit
    if (limit) {
        const productsLimit = products.slice(0, limit)
        res.status(200).send({products: productsLimit})
    } else {
        res.status(200).send({products: products})
    }
    
})

app.get('/products/:pid', async (req, res) => {
    const productId = Number.parseInt(req.params.pid)

    const productFound = await manager.getProductById(productId)

    if (productFound) {
        res.status(200).send(productFound)
    } else {
        res.status(404).send(`No se ha encontrado ningún producto con el ID: ${req.params.pid}`)
    }
    
})

app.listen(PORT, () => {
    console.log(`Servidor EXPRESS activo en puerto ${PORT}`)
})
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
        res.send(productsLimit)
    } else {
        res.send({...products}) //ver
    }
    
})

app.get('/products/:pid', async (req, res) => {
    const productId = Number.parseInt(req.params.pid)

    const productFound = await manager.getProductById(productId)

    res.send(productFound)
})

app.listen(PORT, () => {
    console.log(`Servidor EXPRESS activo en puerto ${PORT}`)
})
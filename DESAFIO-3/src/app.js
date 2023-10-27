import express from 'express'
// import ProductManager from '../DESAFIO-2/ProductManager.js'

// const manager = new ProductManager('./products.json')

const PORT = 8080
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
    res.status(200).send("Servidor OK")
})

app.get('/products', (req, res) => {
    res.send("Hola")
})

app.listen(PORT, () => {
    console.log(`Servidor EXPRESS activo en puerto ${PORT}`)
})
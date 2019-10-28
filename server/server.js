require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/api/products', ctrl.getProducts )
app.get('/api/product/:id', ctrl.getOne)
app.get('/api/cart', ctrl.getCart)
app.post('/api/products', ctrl.addProduct)
app.put('/api/product/:id', ctrl.editName)
app.delete('/api/product/:id', ctrl.remove)



app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} elves dancing in the attic`))
const products = require('../db.json')

let id = 0

const cart = []

module.exports = {
    getProducts: (req, res) => {
        res.status(200).send(products)
    },

    getOne: (req, res) => {
        const {id} = req.params
        const result = products.find(el => el.id === id)
        // console.log(result)
        res.status(200).send(result)
    },
    addProduct: (req, res) => {
        // console.log(req.body)
        const addToCart = {...req.body, id}
        cart.push(addToCart)
        id++
        console.log(cart)
        res.status(200).send(cart)
    },

    getCart: (req, res) => {
        res.status(200).send(cart)
    },

    editName: (req, res) => {
        const {id} = req.params
        const {product} = req.body
        const index = cart.findIndex(el => +el.id === +id)
        console.log(id)
        cart[index].product = product
            res.status(200).send(cart)

    },

    remove: (req, res) => {
        const {id} = req.params
        const index = cart.findIndex(el => el.id === id)
        cart.splice(index, 1)
        res.status(200).send(cart)
    }
}




import React, { Component } from 'react';
import Axios from 'axios';
import EditCart from './EditCart';
import Swal from 'sweetalert2'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total: 0
           
        }
    }
    
    componentDidMount = () => {
        Axios.get('/api/cart')
        .then(res => {
            // console.log(res.data[0].price)
                // console.log(res.data.products)
                this.setState({
                    cart: res.data,
                    total: res.data.reduce((acc, el) => (
                        +el.price + acc
                    ), 0) 
                })
            }).catch(err => console.log(err))
    }

    updateName = (id, body) => {
        Axios.put(`/api/product/${id}`, body)
        .then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    deleteProduct = (id) => {
        Axios.delete(`/api/product/${id}`)
        .then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    checkOut = () => {
       (this.state.cart ? Swal.fire(`Thank you for shopping with us!`) : 
       Swal.fire(`There are no items in your cart.`))
    }

   

    render() {
        // for (var i = 0; i < this.state.cart.length; i++) {
        //     total += this.state.cart[i].price
        // }
        return (
            <div className="container">
                {this.state.cart.map((el, i) => (
                  <div className='dashProduct' key={i}>
                        <button className='delete' onClick={()=>this.deleteProduct(el.id)}>X</button>
                        <img className='img' src={el.img} alt={el.product} />
                        <h2>{el.product}</h2>
                        <h3>${el.price}</h3>
                        <EditCart
                        updateNameFn = {this.updateName}
                        key={el.id}
                        cartObj={el}
                        deleteFn={this.deleteProduct}/>


                        
                    </div>
                ))}
                <div className="totalC">
                	<h3 className='total' >Total: ${this.state.total}.00</h3>
                	<button className='checkOut' onClick={this.checkOut}>Check Out</button>
                </div>
            </div>
        );
    }
}

export default Cart;
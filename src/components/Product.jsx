import React, { Component } from 'react';
import axios from 'axios'


class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            one: {}
        }
    }

    componentDidMount = () => {
        axios.get(`/api/product/${this.props.match.params.id}`)
        .then(res => {
            // console.log('hit')
            this.setState({
                one: res.data
            }).catch(500)
        })
    }

    addToCart = () => {  let {one} = this.state
        axios.post('/api/products', {img: one.img, product: one.product, price: one.price })
        .then(res => {
            this.props.history.push('/')
        })

            
    }
    
    render() {
        let one = this.state.one
        return (
            <div>
                <img className='img' src={one.img} alt={one.product}/>
                        <h2>{one.product}</h2>
                        <h3>{one.description}</h3>
                        <h3>{one.color}</h3>
                        <h3>${one.price}</h3>

                        <button className='addToCart' onClick={()=> this.addToCart()}>Add to Cart</button>
            </div>
        );
    }
}

export default Product;
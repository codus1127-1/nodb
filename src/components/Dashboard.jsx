import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state= {
            products: []
        }
    }
    

    componentDidMount= () => {
        Axios.get('/api/products')
        .then(res => {
            // console.log(res.data.products)
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        let productsToDisplay = this.state.products.map((el, index) => {
            return <div key={index}>
                <div className='dashProduct'>
                    <Link to={`/product/${el.id}`}>
                        <img className='img' src={el.img} alt={el.product}/>
                        <h2>{el.product}</h2>
                        <h3>${el.price}</h3>
                    </Link>
                </div>
            </div>
        })
        return (
            <div className="container">
                {productsToDisplay}
            </div>
        );
    }
}

export default Dashboard;
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="title">
                	<h1>Click to Cart</h1>
                	<img className='logo' src="https://cdn2.iconfinder.com/data/icons/online-shop-part-1/64/online_shop_ecommerce_shopping-12-512.png" alt="image"/>
                    <img className='logo2' src="https://dwglogo.com/wp-content/uploads/2016/02/Amazoncom-yellow-arrow.png" alt="arrow"/>
                </div>
                <nav>
                    <Link to='/'>
                        <div className="nav">
                            Shop
                    </div>
                    </Link>
                    <Link to='/cart'>
                        <div className="nav">
                            Cart
                    </div>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Header;
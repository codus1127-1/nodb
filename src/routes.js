import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Product from './components/Product';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/product/:id' component={Product}/>
    </Switch>
)
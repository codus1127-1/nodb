import React, { Component } from 'react';

class EditCart extends Component {

    constructor(props) {
        super(props);
        this.state ={
            nickname: '',
            editToggle: false
            
        }
    }

    toggleEdit(){
        this.setState({
            editToggle: !this.state.editToggle
        })
        if(this.state.editToggle && this.state.nickname) {
            this.props.updateNameFn(this.props.cartObj.id, {product: this.state.nickname})
        }
    }

    handleChange(e){
        this.setState({
            nickname: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                {this.state.editToggle ? <input 
               onChange={e => this.handleChange(e)}
               placeholder={this.props.cartObj.product}/> : null}
                <button className='addToCart' onClick={()=> this.toggleEdit()}>Rename</button>
                
            </div>
        );
    }
}

export default EditCart;
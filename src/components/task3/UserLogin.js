
import React, { Component } from 'react';

class Login extends Component {

    state = {
        name: "",
        location: "",
        phone: "",
        isValid: true,
        index:0
    }
    
    handleSubmit = e => {
        e.preventDefault();
    };
    inputChange = (event) => {
        if (event.target.name === "name") {
       
      
            this.setState({
                index:this.state.index+1,
                name: event.target.value
                 
})
        } else if (event.target.name === "location") {
         
            this.setState({
                index:this.state.index+1,
                phone: event.target.value,
               

            })
        } else if (event.target.name === "phone") {
        
             this.setState({
                index:this.state.index+1,
                phone: event.target.value,
                 })
        }
        
        if(this.state.index===3){
            this.setState({
                isValid: false
            })
        }
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" name="name" onChange={this.inputChange} placeholder="Ad soyadinizi daxil edin" />
                    <input type="text" name="location" required onChange={this.inputChange} placeholder="Unvani daxil edin" />
                    <input type="number" name="phone" onChange={this.inputChange} placeholder="Nomrenizi daxil edin" />
                    <button type="submit" disabled={this.state.isValid}> Submit</button>
                </form>

            </>
        )
    }
}



export default Login;
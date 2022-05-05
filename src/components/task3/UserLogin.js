import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import  PropTypes  from 'react';
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    inputChange = (event) => {
       
        if (event.target.type == "text") {
            this.setState({
                email: event.target.value

            })
        } else {
            this.setState({
                password: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        if (this.state.password.length < 8) {
            alert("zehmet olmasa duzgun password daxil edin")
        } else if (!this.state.email.endsWith(".ru")) {
            alert("zehmet olmasa duzgun email yazin")
        } else {
            alert("form succesfully submit")
        }
    }

    render() {
        return (
            <>
                <form>
                    <input type="text" onChange={this.inputChange} placeholder="email daxil edin" />
                    <input type="password" onChange={this.inputChange} placeholder="parolunuzu daxil edin" />
                    <button type='button' onClick={this.handleSubmit}>Login</button>
                </form>

            </>
        )
    }
}
export default Login;
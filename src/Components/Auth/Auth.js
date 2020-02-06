import React, { Component } from "react";

export default class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    render() {
        return (
            <div>
                <input name='username' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}></input>
                <input type='password' name='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}></input>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}
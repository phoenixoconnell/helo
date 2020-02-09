import React, { Component } from "react";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUserNavbar} from '../../ducks/reducer';

class Auth extends Component {
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

    register = () => {
        const { username, password } = this.state
        axios.post('/auth/register', {username, password}).then(res => {
            // this.setState({
            //     username: '',
            //     password: ''
            // })
            this.props.updateUserNavbar(res.data.user_id, res.data.username, res.data.profile_img)
            this.props.history.push('/dashboard')
        })
    }

    login = () => {
        const { username, password } = this.state
        axios.post('/auth/login', {username, password}).then(res => {
            // this.setState({
            //     username: '',
            //     password: ''
            // })
            this.props.updateUserNavbar(res.data.user_id, res.data.username, res.data.profile_img)
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                <input name='username' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}></input>
                <input type='password' name='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}></input>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default connect(undefined, {
    updateUserNavbar
})(withRouter(Auth));
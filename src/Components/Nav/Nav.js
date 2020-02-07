import React, { Component } from "react";
import {connect} from 'react-redux';

class Nav extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.profile_img} alt='Avatar'/>
                    <span>{this.props.username}</span>
                </div>
                <button>Home</button>
                <button>New Post</button>
                <button>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    username: reduxState.username,
    profile_img: reduxState.profile_img
})

export default connect(mapStateToProps, {

})(Nav)
import React, { Component } from 'react';
import {signIn} from '../../actions/authActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state = {
        email : "",
        password : ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        console.log(this.state);
    }

    render() {
        const {uid} = this.props;
        if(uid) return <Redirect to="/"/>
        return (
            <>
               <form className="container" autoComplete="off" 
                onSubmit={this.handleSubmit}
                style={{marginTop : "38px"}}>
                    <legend>{""}<h4>Sign In</h4></legend>
                    <div className="form-group"> 
                        <label htmlFor="email">Enter email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" 
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Enter Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                         onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
        uid : uid
    };
};

const mapDispatchToProps = dispatch => {
    return{
        signIn : (creds) => {
            dispatch(signIn(creds));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
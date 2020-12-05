import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signUp} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {
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
        console.log(this.state);
        this.props.signUp(this.state);
    }

    render() {
        const {uid} = this.props;
        if(uid)
            return <Redirect to="/" />
        return (
            <>
               <form className="container" autoComplete="off" 
                onSubmit={this.handleSubmit}
                style={{marginTop : "38px"}}>
                    <legend>{""}<h4>Sign Up</h4></legend>
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
    return{
        uid : uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (creds) => {
            dispatch(signUp(creds))
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);

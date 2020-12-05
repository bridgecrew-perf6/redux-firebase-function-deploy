import React from "react";
import {Link} from 'react-router-dom';
import {signOut} from '../../actions/authActions';
import {connect} from 'react-redux';

const NavItems = ({signOut, uid}) => {
    if(uid){
        return(
            <Link to="/logout" className="nav-link" onClick={signOut}>
                LogOut
            </Link>
        )
    }else{
        return(
            <>
                
                <Link to="/signup" className="nav-link">
                  SignUp
                </Link>
                <Link to="/signin" className="nav-link">
                    SignIn
                </Link>
            </>
        )
    }
    
}

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
        uid : uid
    }
}
const mapDispatchToProps = (Dispatch) => { 
    return {
        signOut : () => {
            Dispatch(signOut());
        }
    };   
};

export default connect(mapStateToProps,mapDispatchToProps)(NavItems);

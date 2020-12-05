import {toast} from 'react-toastify';

const authReducer = (state={}, action) => {
    switch(action.type){
        case "SIGN_IN" : {
            toast('Welcome back...');
            return state
    }
        case "SIGN_IN_ERR" :{
            toast.error('Sign in error...');
            return state
        }
        case "SIGN_OUT" : {
            toast('You signed out...');
            return state;
        }
        case "SIGN_UP" :{
            toast('Sign Up Successful...');
            return state
        }
        case "SIGN_UP_ERR" : {
            toast.error('Sign Up error...');
            return state;
        }
        default : return state; 
    }
}

export default authReducer;
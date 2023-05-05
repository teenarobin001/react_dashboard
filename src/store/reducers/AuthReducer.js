import { LOADING_ACTION, LOGIN_CONFIRMED_ACTION, LOGIN_FAILED_ACTION, SIGNUP_CONFIRMED_ACTION, SIGNUP_FAILED_ACTION } from "../actions/AuthActions";

const initialState = {
    auth:{
        email:'',
        idToken:'',
        localId:'',
        expiresIn:'',
        refreshToken:''
    },
    errorMessage:'',
    successMessage:'',
    showLoading: false    
}

export function AuthReducer(state = initialState, action){

    if(action.type === SIGNUP_CONFIRMED_ACTION){
        return {
            ...state,
            auth:action.payload,
            errorMessage:'',
            showLoading:false,            
            successMessage:'Signup Success',
        }
    }

    if(action.type === SIGNUP_FAILED_ACTION || action.type === LOGIN_FAILED_ACTION) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage:'',
            showLoading:false
        }
    }

    if(action.type === LOGIN_CONFIRMED_ACTION) {
        return {
            ...state,
            auth:action.payload,
            errorMessage:"",
            showLoading:false,
            successMessage: 'Login Success'
        }
    }

     

    if(action.type === LOADING_ACTION) {
        return{
            ...state,
            showLoading:action.payload
        }
    }

    return state;
}
import { formatError, Login, login, SignUp } from "../../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = 'signup confirmed';
export const SIGNUP_FAILED_ACTION = 'signup failed';
export const LOADING_ACTION = 'Loading Action';

export const LOGIN_CONFIRMED_ACTION = 'login confirmed';
export const LOGIN_FAILED_ACTION = 'login failed'

export const LOGOUT_ACTION = 'Logout Action'



export function signupAction(email, password) {
  return (dispatch) => {
    SignUp(email, password).then((response) => { 
        dispatch(loadingAction(false));
        dispatch(confirmedSignupAction(response.data));
    })
    .catch(error =>{ 
        const errorMessage = formatError(error.response.data); 
        
        dispatch(loadingAction(false));
        dispatch(failedSignupAction(errorMessage))
    })
  };
}

export function confirmedSignupAction(data) {
    return{
        type: SIGNUP_CONFIRMED_ACTION,
        payload:data,
    }
}

export function failedSignupAction(message){
    return {
        type: SIGNUP_FAILED_ACTION,
        payload:message
    }
}

export function loginAction(email,password,navigate){
    return(dispatch) => {
Login(email,password).then((response) =>{
    console.log(response.data,'sdswddsdsds');
    dispatch(loadingAction(false));
    dispatch(confirmedLoginAction(response.data));
    navigate('/')
     
})
.catch(error => {
    const errorMessage = formatError(error.response.data); 
    dispatch(loadingAction(false));
    dispatch(failedLoginAction(errorMessage))
})
    }
}

export function confirmedLoginAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload:data,
    }
}

export function failedLoginAction(message) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload:message
    }
}


export function loadingAction(status){
    return {
        type:LOADING_ACTION,
        payload:status
    }
}

export function logoutAction(navigate) {
    localStorage.removeItem('userDetails');
    
    window.location.href = '/login';
    return{
        type: LOGOUT_ACTION,
        
    }
}

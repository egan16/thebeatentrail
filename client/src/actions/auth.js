import * as api from '../api'; //imports everything from api folder.. requests can now be used in actions

export const signin = (formData, history) => async (dispatch) => {
    try {
        //send data to back so it knows system is trying to sign in the user
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        //send data to back so it knows system is trying to sign up the user
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
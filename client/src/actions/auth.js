import * as api from '../api'; //imports everything from api folder.. user api requests can now be used in actions

export const signin = (formData, history) => async (dispatch) => {
    try {
        //send and recieve data from backend api request to sign in the user
        const { data } = await api.signIn(formData);
        //dispatch data gotten from api to reducer
        dispatch({ type: 'AUTH', data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        //send and recieve data from backend api request to sign up the user
        const { data } = await api.signUp(formData);
        //dispatch data gotten from api to reducer
        dispatch({ type: 'AUTH', data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};
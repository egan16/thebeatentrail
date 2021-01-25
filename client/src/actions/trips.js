import * as api from '../api'; //imports everything from api folder.. requests can now be used in actions

//ACTION CREATORS - functions which return actions
export const getTrips = () => async (dispatch) => {
    //try to fetch all data from api
    try {
        //getting the response (or data object) from api
        const { data } = await api.fetchTrips();

        dispatch({ type: 'FETCH_ALL', payload: [] }); //{ type: 'FETCH_ALL', payload: [] } is an action object
        //everything above has used redux to dispatch an action from the data in backend
    } catch (error) {
        console.log(error.message);
    }
}
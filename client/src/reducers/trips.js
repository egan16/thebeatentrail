//Reducer function accepts state and action
export default (trips = [], action) => {
    //returns state in switch statements depending on the action
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; //action.payload is the trips retrieved from actions
        case 'CREATE':
            return trips;
        default:
            trips;
    }
}
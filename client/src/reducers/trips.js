
//Reducer function accepts state and action
export default (trips = [], action) => {
    //returns state in switch statements depending on the action
    switch (action.type) {
        case 'FETCH_ALL':
            return trips;
        case 'CREATE':
            return trips;
        default:
            trips;
    }
}
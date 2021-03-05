//Reducer function accepts state and action
export default (places = [ ], action) => {
    //returns state in switch statements depending on the action
    switch (action.type) {
        case 'FETCH_ALL_PLACES':
            console.log(action);
            return action.payload; //action.payload is the places retrieved from actions
        default:
            return places;
    }
}
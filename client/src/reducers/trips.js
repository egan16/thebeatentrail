//Reducer function accepts state and action
export default (trips = [ ], action) => {
    //returns state in switch statements depending on the action
    switch (action.type) {
        case 'DELETE':
            return trips.filter((trip) => trip._id != action.payload) //return all the trips except to the trip where id is equal to action.payload
        // case 'UPDATE':   //only remove comment will work as is!!
        case 'LIKE':
            return trips.map((trip) => trip._id == action.payload._id ? action.payload : trip); //map() over the trips, check what was the trip that was liked using id and then if trip was liked return the trip with the change, else return the trip as it was.
        case 'FETCH_ALL':
            return action.payload; //action.payload is the trips retrieved from actions
        case 'CREATE':
            return [... trips, action.payload]; // action.payload is the trip added to the array of trips
        default:
            return trips;
    }
}
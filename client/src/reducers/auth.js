const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            //set login data to localstorage
            localStorage.setItem('profile', JSON.stringify({ ... action?.data }));
            //set login data to authData state
            return { ... state, authData: action?.data };
    
        default:
            return state;
    }
};

export default authReducer;
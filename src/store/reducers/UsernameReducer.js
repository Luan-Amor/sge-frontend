
const usernameReducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'REMOVE_NAME':
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};

export default usernameReducer;

const tokenReducer = (token = '', action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return {
                ...token,
                token: action.payload
            };
        case 'REMOVE_TOKEN':
            return {
                ...token,
                token: action.payload
            };
        default:
            return token;
    }
};

export default tokenReducer;
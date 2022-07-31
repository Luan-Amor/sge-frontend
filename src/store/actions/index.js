export const ADD_NAME = 'ADD_NAME'
export const REMOVE_NAME = 'REMOVE_NAME'
export const ADD_TOKEN = 'ADD_TOKEN'
export const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const addName = payload => ({
    type: ADD_NAME,
    payload
});

export const removeName = payload => ({
    type: REMOVE_NAME,
    payload
});

export const addToken = payload => ({
    type: ADD_TOKEN,
    payload
});

export const removeToken = payload => ({
    type: REMOVE_TOKEN,
    payload
});


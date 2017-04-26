import * as types from '../actions/actionTypes';

const initialState = {
    isOpened: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_CART:
            return {...state, isOpened: true};
        case types.CLOSE_CART:
            return {...state, isOpened: false};
        default:
            return state;
    }
};
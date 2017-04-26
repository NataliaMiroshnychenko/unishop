import * as types from './actionTypes';

export const openCart = () => {
    return {
        type: types.OPEN_CART,
    };
};

export const closeCart = () => {
    return {
        type: types.CLOSE_CART,
    };
};

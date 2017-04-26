import people from './peopleReducer.js';
import cart from './cartReducer.js';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    people,
    cart,
});

export default rootReducer;
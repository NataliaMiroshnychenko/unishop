import * as types from './actionTypes';

export const addPerson = (person) => {
    return {
        type: types.ADD_PERSON,
        person
    };
}
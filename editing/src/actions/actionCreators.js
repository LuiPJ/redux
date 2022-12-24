import {ADD_ROW, DELETE_ROW, UPDATE_ROW} from './actionsType';

export function addRow(row) {
    const action = {
        type: ADD_ROW,
        payload: row
    };
    return action;
}

export function updateRow(row) {
    const action = {
        type: UPDATE_ROW,
        payload: row
    };

    return action;
}

export function deleteRow(row) {
    const action = {
        type: DELETE_ROW,
        payload: row
    };

    return action;
}

import { v4 as uuidv4 } from 'uuid';

import {ADD_ROW, DELETE_ROW, UPDATE_ROW} from '../actions/actionsType';

const initialState = [
    {
        id: uuidv4(),
        title: 'Двигатель',
        price: '120000'
    },
    {
        id: uuidv4(),
        title: 'Деталь',
        price: '13000'
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROW:
            const newRow = {
                id: uuidv4(),
                title: action.payload.title,
                price: action.payload.price
            };
            return [...state, newRow];
        case UPDATE_ROW:
            const copyState = [...state];
            const index = copyState.findIndex((elem) => elem.id === action.payload.id);
            copyState[index] = action.payload;
            return copyState;
        case DELETE_ROW:
            return state.filter((item) => item.id !== action.payload)
        default:
            return state;
    }
};

export default reducer;

import React, {ChangeEvent, FormEvent, useState} from 'react';
import {v4} from 'uuid';
import {useDispatch} from 'react-redux';

import {addRow} from '../../actions/actionCreators';

function AddingPanel() {
    const dispatch = useDispatch();

    const [fieldsVal, setFieldsVal] = useState({
        id: v4(), title: '', price: ''
    });

    const handleFieldChange = (e) => {
        const {name, value} = e.target;
        setFieldsVal((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addRow(fieldsVal));
        setFieldsVal({
            id: '', title: '', price: ''
        });
    };

    return (<form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="description" onChange={handleFieldChange}
                   value={fieldsVal.title}></input>
            <input name="price" type="text" placeholder="price" onChange={handleFieldChange}
                   value={fieldsVal.price}></input>
            <button type="submit">Add</button>
        </form>);
}

export default AddingPanel;

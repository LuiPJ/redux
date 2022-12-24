import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRow } from '../../actions/actionCreators';

function EditingPanel({ id, onClearEditingId }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const row = data.find((row) => row.id === id);
    const [editingRow, setEditingRow] = useState(row);

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setEditingRow((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        dispatch(updateRow(editingRow));
        onClearEditingId();
    };

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <input name="title" type="text" onChange={handleFieldChange} value={editingRow.title}></input>
            <input name="price" type="text" onChange={handleFieldChange} value={editingRow.price}></input>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => onClearEditingId()}>Cancel</button>
        </div>
    );
}

export default EditingPanel;

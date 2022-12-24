import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {deleteRow} from "./actions/actionCreators";
import AddingPanel from '../src/components/Add/AddingPanel';
import EditingPanel from '../src/components/Edit/EditingPanel';
import Row from '../src/components/Row/Row';

function Data() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    const [editingRowId, setEditingRowId] = useState();
    const [filteredElements, setFilteredElements] = useState('')


    const handleEditingRow = (id) => {
        setEditingRowId(id);
    };

    const handleDeleteRow = (id) => {
        dispatch(deleteRow(id));
    }

    const handleClearEditingRow = () => {
        setEditingRowId(undefined);
    };

    const InputPanel = editingRowId ? (
        <EditingPanel id={editingRowId} onClearEditingId={handleClearEditingRow}/>
    ) : (
        <AddingPanel/>
    );

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: "100vh"
        }}>
            {InputPanel}
            <input type="text" placeholder='filter' onChange={(e) => setFilteredElements(e.target.value)}/>
            <table>
                <tbody>
                {data.filter(item => item.title.toLowerCase().includes(filteredElements.toLowerCase())).map((row, index) => (
                    <Row data={row} key={index} onEditRow={handleEditingRow} onDeleteRow={handleDeleteRow}/>))}
                </tbody>
            </table>
        </div>
    );
}

export default Data;

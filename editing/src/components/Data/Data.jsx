import { useState } from 'react';
import { useSelector } from 'react-redux';

import AddingPanel from '../Add/AddingPanel';
import EditingPanel from '../Edit/EditingPanel';
import Row from '../Row/Row';

function Data() {
    const data = useSelector((state) => state);

    const [editingRowId, setEditingRowId] = useState();

    const handleEditingRow = (id) => {
        setEditingRowId(id);
    };

    const handleClearEditingRow = () => {
        setEditingRowId(undefined);
    };

    const InputPanel = editingRowId ? (
        <EditingPanel id={editingRowId} onClearEditingId={handleClearEditingRow} />
    ) : (
        <AddingPanel />
    );

    return (
        <>
            {InputPanel}
            <table style={{width:"100%"}}>
                <tbody>
                {data.map((row, index) => (
                    <Row data={row} key={index} onEditRow={handleEditingRow} />
                ))}
                </tbody>
            </table>
        </>
    );
}

export default Data;

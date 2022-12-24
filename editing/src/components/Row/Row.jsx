function Row({ data, onEditRow, onDeleteRow }) {
    const { id, title, price } = data;
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => onEditRow(id)}>Edit</button>
                <button onClick={() => onDeleteRow(id)}>Delete</button>
            </td>
        </tr>
    );
}

export default Row;

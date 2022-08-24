import React from 'react';
import TableRow from './TableRow';

const Table = ({ items }) => {
    return (
        <table className='table-container'>
            <tbody>
                {items?.map(item => (
                    <TableRow key={item?.id} item={item} />
                ))}
            </tbody>
        </table>
    )
}

export default Table
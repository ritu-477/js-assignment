import React from 'react';

const TableRow = ({ student: { firstName, lastName, email }, index }) => {
    return (
        <tr>
            <td className="pl-5">{index}</td>
            <td className="px-5">{firstName}</td>
            <td className="px-5">{lastName}</td>
            <td className="px-5">{email}</td>
        </tr>
    );
};

export default TableRow;
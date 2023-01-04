import React from 'react';
import eraseBtn from '../../assets/logos/trash-2 9.png'

const RegisterRow = ({ register, handleDelete }) => {
    const { volunteer, email, list, date, _id } = register;
    return (
        <tr>    
            <td>
                {volunteer}
            </td>
            <td>
                {email}
            </td>
            <td>
                {date}
            </td>
            <td>
                {list}
            </td>
            <td>
                <button onClick={()=> handleDelete(_id)}>
                <img className='w-8' src={eraseBtn} alt="" />
                </button>
            </td>
        </tr>
    );
};

export default RegisterRow;
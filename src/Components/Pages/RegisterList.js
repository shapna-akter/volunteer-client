import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import RegisterRow from './RegisterRow';

const RegisterList = () => {
    const { user } = useContext(AuthContext);
    const [registers, setRegisters] = useState([]);
    // console.log(registers);

    //showing volunteer register on table
    useEffect(() => {
        fetch(`https://volunteer-server-roan.vercel.app/registers?email=${user?.email}`)
            .then(response => response.json())
            .then(data => setRegisters(data))
    }, [user?.email])

    //for delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure want to cancel this order?");
        if (proceed) {
            fetch(`https://volunteer-server-roan.vercel.app/registers/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = registers.filter(reg => reg._id !== id);
                        setRegisters(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h2 className='text-4xl my-12'>Volunteer Register List</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Register Date</th>
                            <th>Volunteer List</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registers.map(register => <RegisterRow
                                key={register._id}
                                register={register}
                                handleDelete={handleDelete}
                            ></RegisterRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RegisterList;
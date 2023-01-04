import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Donation = () => {
    const { picture, name, _id } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const date = form.date.value;
        const list = form.list.value;

        const register = {
            registers: _id,
            volunteer : name,
            email,
            message,
            list,
            date,
        }

        fetch('https://volunteer-server-roan.vercel.app/registers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('successfully registered');
                    form.reset('')
                }
            })
            .catch(err => console.log(err));

    }

    return (
        <div>
            <div className="card lg:card-side shadow-xl w-1/2 mx-auto bg-white p-4 mt-12">
                <figure><img className='w-24' src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">{name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
            <form onSubmit={handleRegister}>
                <div className='grid grid-cols-1 gap-4 mt-12 mx-auto w-1/2'>
                    <h2 className='text-white text-2xl font-bold'>Register as a volunteer</h2>
                    <input name='name' type="text" placeholder="Full Name" className="input input-bordered input-primary " />
                    <input name='email' type="text" placeholder="User Email" className="input input-bordered input-primary" defaultValue={user?.email} />
                    <textarea name='message' className="textarea textarea-primary" placeholder="Description"></textarea>
                    <input name='date' type="date" placeholder="Date" className="input input-bordered input-primary" />
                    <input name='list' type="text" placeholder="Organize Books At the library" className="input input-bordered input-primary" />

                    <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="Register" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Donation;
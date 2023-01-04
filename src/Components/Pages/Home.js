import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Volunteer from './Volunteer';

const Home = () => {
    const volunteers = useLoaderData();
    console.log(volunteers);
    return (
        <div>
            <h2 className='text-white font-medium my-12 text-2xl'>I grow by helping people need</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10'>
                {
                    volunteers.map(volunteer => <Volunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Volunteer>)
                }
            </div>
        </div>
    );
};

export default Home;
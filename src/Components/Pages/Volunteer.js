import React from 'react';
import { Link } from 'react-router-dom';

const Volunteer = ({ volunteer }) => {
    const { picture, name, _id } = volunteer;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <Link to={`/donation/${_id}`}>
                <button type="button" className="btn btn-active btn-accent flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white">{name}</button>
            </Link>
        </div>
    );
};

export default Volunteer;
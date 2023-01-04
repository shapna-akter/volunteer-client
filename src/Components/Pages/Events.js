import React from 'react';

const Events = () => {
    return (
        <form>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 mx-12'>
                <input type="text" placeholder="Event Title" className="input input-bordered input-primary w-full " />
                <input type="text" placeholder="Event Date" className="input input-bordered input-primary w-full " />
                <textarea className="textarea textarea-primary" placeholder="Description"></textarea>
                <input type="photoURL" placeholder="Photo URL" className="input input-bordered input-primary w-full " />
            </div>
            <div className='flex justify-end mx-12'>
                <input className='btn btn-primary' type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default Events;
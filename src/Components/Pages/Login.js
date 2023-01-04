import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-1/2 mx-auto bg-white p-2 text-black m-12 rounded rounded-lg'>
            <h2 className='text-2xl font-bold'>Login with</h2>
            <div className='flex justify-center'>
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center p-4 w-full space-x-4 border rounded-2xl focus:ring-2 focus:ring-offset-1 border-gray-600 mt-4 focus:ring-violet-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Continue with Google</p>
                </button>
            </div>
            <p className='my-5'>Don't have an account? <Link className='text-blue-600' to='/signup'>Create an account</Link> </p>
        </div>
    );
};

export default Login;
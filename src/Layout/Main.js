import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Footer';
import Header from '../Components/Pages/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import ScrollTop from '../Utils/ScrollTop';

const MainLayOut = () => {
    ScrollTop();
    return (
        <div >
           <NavBar></NavBar>
            <div >
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;
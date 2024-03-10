import React, { useContext } from 'react';
import { AtuhContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const PrivateRoutes = ({children}) => {
    const {loading}=useContext(AtuhContext);
    const location =useLocation();
    // console.log(location)
    const {user}=useContext(AtuhContext);
    if(loading){
        return <div className='h-[100vh] flex justify-center items-center'><RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /></div>
    }
    return (
        
        user?children:
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;
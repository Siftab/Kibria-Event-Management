import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { VscEye } from "react-icons/vsc";
import { AtuhContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const [visible,setVisible]=useState(true);
    const {SignInUser,okAlert,}=useContext(AtuhContext);
    const location = useLocation();
    const navigate = useNavigate();
   
    const handleLogin=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        
        SignInUser(email,password)
        .then(res=>{
            okAlert('Login');
            // console.log(res.user)
            navigate(location?.state ? location.state:'/')

        })
        .catch(err=>{
            console.log(err);
            
Swal.fire({
  title: "Error",
  text: err.message,
  icon: "error"
});
        })
    }

    return (
        <div className='max-w-6xl mt-10 mx-auto flex justify-center items-center' >
            <div className='w-full md:w-1/2 mx-auto border shadow-lg px-8 py-24 rounded-lg'>
                <form className='flex flex-col space-y-8' onSubmit={handleLogin}>
                    <h1 className='text-center font-bold text-6xl mb-5'>Login</h1>
                    <hr />
                    <input className='border p-4 ' type="email" name="email" placeholder="Email" id="" required  />
                    <div className='flex items-center relative'><input className='border p-4 w-full' type={visible?"password":"text"} name="password" placeholder="Password" id="" required />
                    <span className='absolute right-5' onClick={()=> setVisible(!visible)}><VscEye ></VscEye></span>
                    </div>
                    <input className='bg-yellow-400 p-4 rounded-lg' type="submit" value="Login" />

                </form>
                <p className='text-center mt-10'>Don't have account <Link className='text-blue-600' to='/register'>Register</Link></p>

            </div>
            <Helmet>
        <title>Login  || Kibria event Mangement </title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>
        </div>
    );
};

export default Login;
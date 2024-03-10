import { useContext, useState } from 'react';
import { VscEye } from 'react-icons/vsc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { AtuhContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase.config'
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [passwordFault,setPasswordFault]=useState('')
    const [fault, SetFault] = useState('');
    const { createUser, googleSignIn, okAlert } = useContext(AtuhContext);
    const location =useLocation();
const handleRegister = (e) => {

    e.preventDefault();
    SetFault('');
    setPasswordFault('');
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const image = form.get('image');
    const email = form.get('email');
    const password = form.get('password');
    const checkbox = form.get('checkbox');

    // console.log(checkbox)
    if (!checkbox) {
        return SetFault("you must accept our term's")

    
    }
    if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?/\\.,;[\]-])(.{1,5}|.{7,})$/.test(password)){
        return setPasswordFault('your password conatin special charecters and number ,Captial letter &must be 6 chareters')

    }
    // updateProfile(auth.currentUser,{displayName:name,photoURL:image})

    createUser(email, password)
        .then(res => {
            console.log(res);
            okAlert('Register');
            updateProfile(auth.currentUser,{displayName:name,photoURL:image})
            .then(res=>console.log("updated profile info"))
            .catch(err=>console.log(err) )
            // navigate(location?.state ? location.state:'/')

        })
        .catch(err => setPasswordFault(err.message))
}
const registerWithGoogle = () => {
    googleSignIn()
        .then(res => res.user)
        .catch(err => console.log(err))
}
return (
    <div className='max-w-6xl mx-auto  border flex justify-center items-center ' >
        <div className=' mt-24 w-full md:w-1/2 mx-auto border shadow-lg px-8 py-24 rounded-lg'>
            <form className='flex flex-col space-y-8' onSubmit={handleRegister}>
                <h1 className='text-center font-bold text-6xl mb-5'>Register</h1>
                <hr />

                <input className='border p-4 ' type="text" name="name" placeholder="Name" id="" required />
                <input className='border p-4 ' type="text" name="image" placeholder="Image Url" id="" required />
                <input className='border p-4 ' type="email" name="email" placeholder="Email" id="" required />
                <div className='flex items-center relative'><input className='border p-4 w-full' type={visible ? "password" : "text"} name="password" placeholder="Password" id="" required />
                    <span className='absolute right-5' onClick={() => setVisible(!visible)}><VscEye ></VscEye></span>
                </div>
                {
                passwordFault && <p className='text-red-600  '>{passwordFault}</p>
            }
                <div className='flex space-x-4 ml-7'> <input type="checkbox" name="checkbox" id="" /> <p>Accept terms & conditions</p></div>
                <input className='bg-yellow-400 btn p-4 rounded-lg' type="submit" value="Register" />

            </form>

            {/* {
                passwordFault && <p className='text-red-600  text-center'>{passwordFault}</p>
            } */}
            {
                fault && <p className='text-red-600  text-center'>{fault}</p>
            }
            <p className='text-center mt-10 '>Already have account <Link className='text-blue-600' to='/login'>Login</Link></p>
            <p className='text-center my-10'>or,</p>
            <button onClick={registerWithGoogle} className='btn btn-outline w-full'><FaGoogle></FaGoogle> Sign in With Google</button>



        </div>
        <Helmet>
        <title>Register ||Kibria event Mangement </title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>

    </div>
);
};

export default Register;
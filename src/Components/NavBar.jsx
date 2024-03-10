import  { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import { AtuhContext } from '../Providers/AuthProvider';
const NavBar = () => {
    const {user,LogOut}=useContext(AtuhContext);
    // const {displayName,photoURL}=user;
    console.log(user)
    
 const handleLogOut=()=>{
    LogOut()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
 }
    const links = <>
        <li>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400 underline font-semibold" : ""
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400 underline font-semibold" : ""
            } >About_us</NavLink >
        </li>
        <li>
            <NavLink to='/gallery' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400 underline font-semibold" : ""
            } >Gallery</NavLink >
        </li>
        <li className={user?'hidden':''}>
            <NavLink to='/register' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-400 underline font-semibold" : ""
            } >Register</NavLink >
        </li>
       
    </>
    return (
        <div className=' bg-black'>
            <div className="navbar text-white max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} className='h-20 w-20 rounded-3xl'></img>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-lg flex gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user&& <div className='flex items-center mr-4 font-bold'><p>{user.displayName}</p><img className='w-16 rounded-full' src={user.photoURL} alt="" /></div>
                    }
                   {
                    user?
                    <button onClick={handleLogOut} className='btn btn-outline text-rose-700 '>LogOut</button>
                    :
                    <Link to='/login'><button className="btn btn-outline text-yellow-400">Login</button></Link>
                    

                   }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
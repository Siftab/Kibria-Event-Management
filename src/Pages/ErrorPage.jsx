
import Error from '../assets/Error.jpg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    return (
        <div className='max-w-6xl mx-auto h-[100vh] text-center'>
            <p className='text-center font-semibold text-4xl md:text-6xl my-10'>Sorry... ,<br />page Not Found!!</p>
            <div className=''><Link to='/'><button className='btn btn-outline text-red-600 mx-auto'>back To Home</button></Link></div>
            <img src={Error} className='h-full w-full' alt="" />
            <Helmet>
        <title>404!!!</title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>
        </div>
    );
};

export default ErrorPage;
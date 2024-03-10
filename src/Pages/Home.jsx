import React, { useEffect, useState } from 'react';
import Carusol from '../Components/Carusol';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Review_card from '../Components/review_card';
import Marquee from "react-fast-marquee";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const data =useLoaderData();
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(info=>setReviews(info))
    },[])
    
    return (
        <div className=''>
          
            <Carusol></Carusol>
            <div className='flex  flex-col md:flex-row  items-center p-10 mt-20 mb-36  max-w-6xl mx-auto ' >
                <div className='px-14  flex-1 ' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"><p><span className='text-5xl'>&#34;</span> With a passion for orchestrating seamless and impactful corporate events,<span className='font-bold'> Kibria Event management</span> is a seasoned event management professional with a proven track record of transforming visions into successful, memorable experiences. With a keen eye for detail and a strategic mindset, Kibria Event management has become synonymous with delivering events that exceed expectations.&#34;</p></div>

                {/* <img src={logo} alt=""  className='rounded-full w-1/4 h1/4'/> */}
               <div className='flex-1 mt-10 md:mt-0 ml-10 md:ml-0'> <h1 className='text-6xl tracking-widest font-bold'>Kibria <br /><span className='text-3xl font-light'>Event ManageMent</span></h1> 
                <p>Your satisfaction is our goal</p>
                </div>
            </div>

                        {/* oour services */}
                        <div className='text-center text-6xl font-semibold bg-slate-500 py-10 relative  max-w-6xl mx-auto'>
                            <h1 className='bg-yellow-400 w-fit px-20 py-10 rounded absolute -top-28  md:-top-16 md:left-36 lg:left-80'>Our Services</h1>
                            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mx-4 mt-10'>
                         
                            {
                                    data.map((aData,idx)=><Card key={idx} props={aData} ></Card>)

                                }
                          
                            </div>
                        </div>
                        {/* Review */}
                        <div className='max-w-6xl mx-auto  relative mt-24'>
                            <div className=' text-3xl font-bolds  text-center px-40 py-8 space-y-4'><p>Reviews Section </p> <hr /> <hr /></div>

                            
                               <Marquee  pauseOnHover={true}>
                                
                                {
                                reviews.map((review,idx)=><Review_card  key={idx} props={review}></Review_card>)
                         } 
                               
                         </Marquee>
                        </div>

                        <Footer></Footer>
                        
                        <Helmet>
        <title>Kibria event Mangement || best of best</title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>
        </div>
    );
};

export default Home;
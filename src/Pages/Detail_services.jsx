import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import { AtuhContext } from '../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Detail_services = () => {
   
    const AllData=useLoaderData();
    const {id} =useParams()
    // console.log(AllData,id)
    const TargetData = AllData.find(aData=> aData.id ==id);
    const {name,description,image,price}=TargetData;
 
    console.log(TargetData)
    return (
        <div>
               
                         
            <div className='max-w-6xl mx-auto w-full'>
            <h1 className='font-bold text-4xl md:text-8xl mb-4'>{name}</h1>
            <img src={image} alt=""  className='w-full py-10'/>
            <div className='flex justify-end  ' data-aos="fade-right"><p className='text-2xl md:text-right w-full md:w-1/2'>{description}</p></div>
            <div className='mt-10' data-aos="fade-left">
                <h1 className='font-bold text-4xl md:text-8xl mb-4'>Deals</h1>
                <p className='text-2xl md:w-2/3 '>Price starts  form <span className='text-green-500'>{price}</span> for every 10 person,it May increase or decrise according to your need and people number</p></div>
            
        </div>
        <Footer></Footer>
        <Helmet>
        <title>Details Services</title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>
        </div>
    );
};

export default Detail_services;
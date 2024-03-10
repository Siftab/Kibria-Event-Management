import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Gallery = () => {
    const allImg = useLoaderData();
    // console.log(allImg)
    return (
        <div className='max-w-6xl mx-auto  md:mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8' >
                    
            {
                allImg.map(img=><div key={img.id}><img src={img.imgURL} className='h-full w-full rounded-lg' alt="" /></div>)
            }
            </div>
            <Helmet>
        <title>Gallary || Kibria event Mangement </title>
        <link rel="canonical" href="../assets/logo.jpg" />
      </Helmet>
        </div>
    );
};

export default Gallery;
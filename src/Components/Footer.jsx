import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import {SiGmail} from 'react-icons/si'
const Footer = () => {
    return (
        <div className='bg-[#7c96b1]  mt-6 md:p-14'>
            <div className='max-w-6xl mx-auto md:flex  mb-10' >
              <img src="https://i.ibb.co/8sF1BFN/302741847-410005487908353-2226550690397528664-n.png" alt="" data-aos="zoom-in" data-aos-duration="3000"/>
              <div className='mt-10 md:mt-0 w-full flex justify-center items-center '>
                <div className='list-none text-white flex justify-center items-center gap-10' >
                   <div className='flex gap-8'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <SiGmail />
                   </div>
                   <div>
                     <li>About Us</li>
                    <li>Login</li>
                    <li>Register</li></div>
                </div>
                
            </div>
            </div>
            <hr />
            <p className='text-center'>All rights reserved &#169; Kibria Event Managements</p>
          
            
        </div>
    );
};

export default Footer;
import React from 'react';
import profile from '../assets/profile.png';
import { TfiCommentAlt } from "react-icons/tfi";

const Review_card = ({props}) => {
    const {name,date,review}=props;
    return (
        <div className='border-2 border-yellow-400  h-full p-10 rounded-lg shadow-lg w-96 mr-10 '>

            <div className='flex items-center space-x-4 '>
                <img src={profile} alt="" className='w-16 h-16' />
                <h1 className='font-bold'> <TfiCommentAlt className='text-yellow-400 text-2xl' />{name}</h1>
            </div>
            <div className=''><p >
                {review}
            </p> 
            <p>{date}</p></div>
            
            
            
        </div>
        
    );
};

export default Review_card;
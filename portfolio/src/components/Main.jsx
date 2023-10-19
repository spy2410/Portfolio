import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaInstagram, FaLinkedin, FaSpotify, FaHeart, FaRegHeart } from 'react-icons/fa';
import mainImage from '../images/main.png';



const Main = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src={mainImage} alt="image" />

      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center '>
          <h1 className='sm:text-5xl  text-4xl font-bold  text-gray-800 '>I am Vatsal Mandaliya</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I am a
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000, 
                'Competitive Programmer',
                2000, 
                'Plane Fanatic', 
                1000
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer ' size={20} />
            <FaSpotify className='cursor-pointer ' size={20} />
            <FaInstagram className='cursor-pointer ' size={20} />
            <FaLinkedin className='cursor-pointer ' size={20} />
            {isLiked ? (
              <FaHeart className='cursor-pointer' size={20} onClick={toggleLike} /> 
            ) : (
              <FaRegHeart className='cursor-pointer' size={20} onClick={toggleLike} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main
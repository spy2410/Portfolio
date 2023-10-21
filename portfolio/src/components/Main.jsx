import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaInstagram, FaLinkedin, FaSpotify, FaHeart, FaRegHeart, FaGithub } from 'react-icons/fa';
import mainImage from '../images/main.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Main = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likecount, setLikecount] = useState(0);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikecount(isLiked ? likecount - 1 : likecount + 1);
    const message = `You have ${isLiked ? 'unliked' : 'liked'} the portfolio. Total Likes: ${isLiked ? likecount - 1 : likecount + 1}`;
    toast.info(message);  
  }

  const twitter = () => {
    window.open('https://twitter.com/Vatsal0399','_blank');
  };
  const spotify = () => {
    window.open('https://open.spotify.com/user/lxmkubahmrpxqh43rc6knxwxk','_blank');
  };
  const instagram = () => {
    window.open('https://www.instagram.com/vats_al24/','_blank');
  };
  const linkedin = () => {
    window.open('https://www.linkedin.com/in/vatsal-m-35351b200/','_blank');
  };
  const github = () => {
    window.open('https://github.com/spy2410','_blank');
  }



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
            <a href='#' onClick={twitter}>
              <FaTwitter className='cursor-pointer'  size={20} /> 
            </a>
            <a href='#' onClick={spotify}>
              <FaSpotify className='cursor-pointer' size={20} /> 
            </a>
            <a href='#' onClick={instagram}>
              <FaInstagram className='cursor-pointer' size={20} /> 
            </a>
            <a href='#' onClick={github}>
              <FaGithub className='cursor-pointer' size={20} /> 
            </a>
            <a href='#' onClick={linkedin}>
              <FaLinkedin className='cursor-pointer' size={20} /> 
            </a>
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
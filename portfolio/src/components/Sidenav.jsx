import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineMail, AiOutlineProfile} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
const sidenav = () => {
    const[nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        // console.log('state changed')
    }
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className = 'fixed top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href='#work' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>Work</span>
                </a>
                <a onClick={handleNav} href='#project' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProfile size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={handleNav} href='https://drive.google.com/file/d/1xi3-KURKnFDP-4JahzHXZ8-ehJW-log6/view?usp=share_link' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>Resume</span>
                </a>
                <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>
                </div>
            ) 
            : (
                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href='#main' className='group relative rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome size={20}/>
                            <span className='hidden group-hover:block absolute opacity-90 top-3 left-full ml-4 p-2 bg-gray-800 text-white rounded-md text-xs'>Home</span>
                        </a>
                        <a href='#work' className='group relative rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <GrProjects size={20}/> 
                            <span className='hidden group-hover:block absolute opacity-90 top-3 left-full ml-4 p-2 bg-gray-800 text-white rounded-md text-xs'>Work</span>
                        </a>
                        <a href='#project' className='group relative rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineProfile size={20}/>
                            <span className='hidden group-hover:block absolute opacity-90 top-3 left-full ml-4 p-2 bg-gray-800 text-white rounded-md text-xs'>Projects</span>
                        </a>
                        <a href='https://drive.google.com/file/d/1xi3-KURKnFDP-4JahzHXZ8-ehJW-log6/view?usp=share_link' className='group relative rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPerson size={20}/>
                            <span className='hidden group-hover:block absolute opacity-90 top-3 left-full ml-4 p-2 bg-gray-800 text-white rounded-md text-xs'>Resume</span>
                        </a>
                        <a href='#contact' className='group relative rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20}/>
                            <span className='hidden group-hover:block absolute opacity-90 top-3 left-full ml-4 p-2 bg-gray-800 text-white rounded-md text-xs'>Contact</span>
                        </a>
                    </div>
                </div>
            )
            
        }
    </div>
  )
}

export default sidenav

import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import mainImage from '../images/main.png';




const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src={mainImage} alt="image" />

      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold  text-gray-800 '>I am Vatsal Mandaliya</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I am a
            <TypeAnimation
              sequence={[
                'Frontend Developer', // Types 'One'
                1000, // Waits 1s
                'Competitive Programmer', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Plane Fanatic', // Types 'Three' without deleting 'Two'
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft : '5px' }}
            />
          </h2>
          <div>
            <FaTwitter className='cursor-pointer ' size={20} />
            <FaFacebookF className='cursor-pointer ' size={20} />
            <FaInstagram className='cursor-pointer ' size={20} />
            <FaLinkedin className='cursor-pointer ' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main
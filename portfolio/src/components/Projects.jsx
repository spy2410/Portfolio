import React from 'react';
import ProjectItem from './ProjectItems';
import gender_prediction from '../assets/gender_prediction.png'
import netflix_clone from '../assets/netflix_clone.png'
import contact_manager from '../assets/contact_manager.png'
import todo_manager from '../assets/todo_manager.png'


const Projects = () => {
  return (
    <div id='project' className='max-w-[lg] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Projects</h1>
        <p className='text-center py-8'></p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={todo_manager} title='Todo app' github_link = 'https://github.com/spy2410/ToDo-Manager'/>
            <ProjectItem img={netflix_clone} title = 'Netflix Clone' github_link = 'https://github.com/spy2410/netflix-clone'/>
            <ProjectItem img={contact_manager} title = 'Contact manager application' github_link = 'https://github.com/spy2410/Contact-Manager'/>
            <ProjectItem img={gender_prediction} title = 'Gender prediction application' github_link = 'https://github.com/spy2410/Gender_prediction_public_api_integration'/>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import WorkItems from './WorkItems'

const data = [
    {
        year: 2023,
        company: 'Perplex Energy',
        title: 'Frontend-Intern',
        duration: '2 months',
        details: 'During my internship, I was assigned to build Frontend from scratch with the help of React.js in conjunction with NextUI library. Collaborated with a team to deliver responsive and user-friendly responsive web applications. Used API from Json.bin website to store the power plant records received from the client. Technologies I have worked on is JavaScript, React.js, Next UI, json.bin for API Led end-to-end developement of UI dashboard.'
    },
    {
        year: 2023,
        title: 'SDE',
        company: 'Stealth startup',
        duration: 'Oct-present',
        details: 'Currently working on Schema design, product development'
    }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1024px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center pb-8 text-[#001b5e]'>Work</h1>
        {data.map((item,idx) => (
            <WorkItems 
                key={idx} 
                year = {item.year}
                title = {item.title}
                company = {item.company}
                duration = {item.duration}
                details = {item.details}
            />
        ))
        }
    </div>
  )
}

export default Work;
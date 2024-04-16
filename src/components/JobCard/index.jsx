import dayjs from 'dayjs'
import React from 'react'

function JobCard(props) {
    const skills = ["Javascript","React","Nodejs"]
    const date1 = dayjs(Date.now())
    const diffInDays = date1.diff(props.postedOn,"day")
  return (
    <div className='mx-40 mb-4 '>
        <div className='flex justify-between items-center  px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 cursor-pointer hover:translate-y-1'>
            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-lg font-semibold'>{props.tittle} - {props.company}</h1>
                <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                <div className='flex items-center gap-2'>
                    {skills.map((skill)=>(
                        <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-500 font-semibold'> Posted {diffInDays > 1? `${diffInDays} days`: `${diffInDays} days`} ago</p>
                <a href={props.job_link}>
                    <button className='text-blue-500 border border-blue-500 px-10 py-2 rounded-md'> Apply</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default JobCard
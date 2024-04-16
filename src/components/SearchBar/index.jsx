import React from 'react'
import { useEffect } from 'react'

function SearchBar() {

    const [jobCriteria, setjobCriteria] = useEffect({
        title: "",
        Location: "",
        experience: "",
        type: ""
    })

    const handleChange = () => {

    }

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
        <select onChange={handleChange} name='title'value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=""  hidden>Job Role</option>
            <option value="ios Developer">ios Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="ReactJs Developer">ReactJs Developer</option>
            <option value="Laravel Developer">Laravel Developer</option>
        </select>
        <select name='title'value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" hidden>Job Type</option>
            <option value="ios Developer">Full Time</option>
            <option value="Frontend Developer">Part Time</option>
            <option value="Backend Developer">Contract</option>
        </select>
        <select name='title'value={jobCriteria.Location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=""  hidden>Location</option>
            <option value="ios Developer">Remote</option>
            <option value="Frontend Developer">In-Office</option>
            <option value="Backend Developer">Hybrid</option>
        </select>
        <select name='title'value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value=""  hidden>Experience</option>
            <option value="ios Developer">Fresher</option>
            <option value="Frontend Developer">Junior Level</option>
            <option value="Backend Developer">Mid Level</option>
            <option value="ReactJs Developer">Senior Level</option>
        </select>
        <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar
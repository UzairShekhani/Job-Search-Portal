import React, { useState } from 'react'; // useState import kiya hai

function SearchBar(props) { // props ko function arguments mein pass kiya hai
    const [jobCriteria, setjobCriteria] = useState({ // useState ka sahi use kiya hai
        title: "",
        location: "", // "Location" ki jagah "location" use kiya hai
        experience: "",
        type: ""
    });

    const handleChange = (e) => {
        setjobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    console.log(jobCriteria);

    const search = async () => {
        await props.fetchJobsCustom(jobCriteria);
    };

    return (
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select onChange={handleChange} name='title' value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" hidden>Job Role</option>
                <option  value="ios Developer">ios Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="ReactJs Developer">ReactJs Developer</option>
                <option value="Laravel Developer">Laravel Developer</option>
            </select>
            <select onChange={handleChange} name='type' value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" hidden>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
            <select onChange={handleChange} name='location' value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" hidden>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>
            <select onChange={handleChange} name='experience' value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
                <option value="" hidden>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior Level">Junior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        </div>
    );
}

export default SearchBar;

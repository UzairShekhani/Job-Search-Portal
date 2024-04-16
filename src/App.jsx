import { useState } from "react"
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import jobData from "./DummyData"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "./firebase.config"


function App() {
    const [jobs, setJobs] = useState([])

    const fetchJobs = async() => {

    }

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <SearchBar/>
        {jobData.map((job)=> (
          <JobCard key={job.id} {...job}/>
        ))}
      </div>

    </>
  )
}

export default App

import { useEffect, useState } from "react"
import Header from "./components/Header"
import JobCard from "./components/JobCard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import jobData from "./DummyData"
import { collection, query, where, getDocs} from "firebase/firestore"
import { db } from "./firebase.config"


function App() {
    const [jobs, setJobs] = useState([])

    const fetchJobs = async() => {
      const tempJobs = []
      const q = query(collection(db, "job "));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((job) => {
        // console.log(doc.id, "=>", doc.data())
        tempJobs.push({
          ...job.data(),
          id : job.id
        });
      });
      setJobs(tempJobs)
    }


    useEffect(() => {
      fetchJobs()
    },[])

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

import { useEffect, useState } from "react";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

function App() {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const tempJobs = [];
            const jobRef = query(collection(db, "job"));
            const q = query(jobRef, orderBy("postedOn", "desc"));
            const Req = await getDocs(q);
            Req.forEach((job) => {
                tempJobs.push({
                    id: job.id,
                    ...job.data(),
                    postedOn : job.data().postedOn.toDate()
                });
            });
            setJobs(tempJobs);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <Header />
                <SearchBar />
                {jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
        </>
    );
}

export default App;
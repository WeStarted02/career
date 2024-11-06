import "./index.css";
import { useSelector } from "react-redux";
import img from "../../assets/career.jpg"
import axios from "axios";
import { useEffect, useState } from "react";

function WorkDeatil() {
    const color = useSelector((state) => state.changeColor);
    const workId = useSelector((state) => state.getWorkId);
    const [work, setWork] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:8080/workDetail/${workId}`,
            responseType: 'json'
        })
            .then(function (response) {
                const dataArray = response.data;
                const filteredList = dataArray.map(item => ({
                    companyId: item.company_id,
                    jobName: item.job_name,
                    loctaion: item.location,
                    salary: item.salary,
                    time: item.to_announce_time,
                    typeOfWorking: item.typeof_working,
                    workAbout: item.work_about,
                    workingTime: item.working_time
                }));
                setWork(filteredList);
                setLoading(false);
            })
            .catch(function (error) {
                console.error('Error fetching data:', error);
                setError(error); setLoading(false);
            });
    }, [workId]);
    if (loading) {
        return
        <div>Loading...</div>;
    } if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="workDetail" style={{color}}>
            <div >
                <img src={img} />
                <div >
                    <h2>{work[0].companyId}</h2>
                    <p>-{work[0].jobName}</p>
                </div>
            </div>
            <p className="jobName">-{work[0].jobName}</p>
            <p>-{work[0].typeOfWorking}</p>
            <p>-{work[0].workingTime}</p>
            <p>-{work[0].loctaion}</p>
            <p>-{work[0].salary}$</p>
            <p className="aboutJob" dangerouslySetInnerHTML={{ __html: work[0].workAbout }}></p>
        </div>
    );
}

export default WorkDeatil;
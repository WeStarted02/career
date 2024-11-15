import './index.css';
import WorksListCard from '../WorksListCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import career from '../../Images/work.png';
import { getWorkId } from '../../Redux/Actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function WorksList() {
  const [worksList, setWorksList] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.workList);

  useEffect(() => {
    const fetchWorks = () => {
      if (list.length > 0) {
        setWorksList(list);
      } else {
        axios({
          method: 'get',
          url: 'http://localhost:8080/all',
          responseType: 'json'
        })
          .then(function (response) {
            const dataArray = response.data;
            const filteredList = dataArray.map(item => ({
              id: item.id,
              title: item.job_name,
              company: "Westarted shirkati",
              image: career,
              stafka: item.working_time,
              actionType: item.typeof_working
            }));
            setWorksList(filteredList);
          })
          .catch(function (error) {
            console.error('Error fetching data:', error);
          });
      }
    };

    fetchWorks(); // İlk veri çekme işlemi

    const interval = setInterval(fetchWorks, 5000); // 5 saniyede bir veri yenileme

    return () => clearInterval(interval); // Temizlik işlemi

  }, [list, dispatch]);

  const handleClick = (id) => {
    dispatch(getWorkId(id));
    window.location.href = "/elon";
  };

  return (
    <div className='WorksList'>
      {worksList.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          <WorksListCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default WorksList;

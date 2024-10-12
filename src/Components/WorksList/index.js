import './index.css';
import WorksListCard from '../WorksListCard';
import { worksList } from '../../util/constant';

function WorksList() {
  const handleButton = () => {
    window.location.href = "/elon"
  }
  return (
    <div className='WorksList' onClick={handleButton}>
      {
        worksList.map(item => (
          <WorksListCard key={item.id} {...item} />
        ))
      }
    </div>
  )
}

export default WorksList
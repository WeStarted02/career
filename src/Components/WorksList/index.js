import  './index.css';
import WorksListCard from '../WorksListCard';
import { worksList } from '../../util/constant';

function WorksList() {
  return (
    <div className='WorksList'>
      {
        worksList.map(item => (
          <WorksListCard key={item.id} {...item}/>
        ))
      }
    </div>
  )
}

export default WorksList
import current from './CallApi'
import '../layout/mainprog.scss'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';


function MainPrograms() {

    return ( 
      <div id='fullProgram2'>
          <h2 className='allTit'>Today's programme</h2>
          <hr className='otherHr' />
         {current.map((program: any) => (
              <Link to={`/show/${program.show.id}`} id='program'>
    <div id='program2'>
      <><img id='coverimg2' key={program.show.image.medium} src={program.show.image.medium} alt="" />
      <div id='info2'>
        <div className='topProg'>
          <div>
          <h1 id='airtime2' key={program.airtime} >{program.airtime}</h1> 
          <h1 id='duration2'>{program.show.runtime} minutes</h1>
          </div>
          <h1 id='genre2' key={program.show.type}>{program.show.type}</h1>
          </div>
          <h2 key={program.show.name}>{program.show.name} - {program.name}</h2>
          <p key={program.show.summary} dangerouslySetInnerHTML={{__html:program.show.summary}}></p>
        </div></> 
    </div>
    </Link>
     ))}
  </div>
    )
  }

  export default MainPrograms
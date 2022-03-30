import '../layout/programs.scss'
import { Link } from 'react-router-dom'

const Programs = ( info : any) => {
  
  console.log(info);
  
    return (
      <Link to={`/show/${info.id}`} id='program'>
      <div id='program'>
      <>
      <img id='coverimg'src={info.image} alt="" />
      <div id='info'>
          <h1 id='airtime' >{info.airtime} {info.time}</h1> 
          <h2 >{info.name}</h2>
        </div></> 
    </div>
      </Link>


    
    )
  }
  
  export default Programs
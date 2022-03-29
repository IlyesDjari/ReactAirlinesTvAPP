import current from './CallApi'
import '../layout/programs.scss'


function Programs() {
    return ( 
      <div id='fullProgram'>
         {current.map((program: any) => (
    <div id='program'>
      <><img id='coverimg' key={program.show.image.medium} src={program.show.image.medium} alt="" />
      <div id='info'>
          <h1 id='airtime' key={program.airtime} >{program.airtime}</h1> 
          <h1 id='duration'>{program.show.runtime} minutes</h1>
          <h1 id='genre' key={program.show.type}>{program.show.type}</h1>
          <h2 key={program.show.name}>{program.show.name} - {program.name}</h2>
          <p key={program.show.summary} dangerouslySetInnerHTML={{__html:program.show.summary}}></p>
        </div></> 
    </div>
     ))}
  </div>
    )
  }

  export default Programs
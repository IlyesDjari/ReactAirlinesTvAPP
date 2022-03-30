import current from '../hooks/CallApi'
import '../layout/programs.scss'

console.log(current);


function Programs() {


  function sayHello(program: any) {
  console.log("hello");
  }
  
    return (
      <div id='fullProgram'>
         {current.map((program: any) => (
    <div id='program'>
      <button id='buttonDetail'  >
      <><img id='coverimg'src={program.show.image.medium} alt="" />
      <div id='info'>
          <h1 id='airtime' >{program.airtime}</h1> 
          <h1 id='duration' >{program.show.runtime} minutes</h1>
          <h1 id='genre'>{program.show.type}</h1>
          <h2 >{program.show.name} - {program.name}</h2>
          <p  dangerouslySetInnerHTML={{__html:program.show.summary}}></p>
        </div></> 
        </button>
    </div>
     ))}
  </div>
    )
  }
  
  export default Programs
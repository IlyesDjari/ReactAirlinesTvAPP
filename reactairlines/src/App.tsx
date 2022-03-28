import './App.css';

const current = [""]
const contentFiltered: { name: any; }[] = []


function App() {
  return <div>
     <Nav></Nav>
     <Channel></Channel>
     </div> ;
}

function Nav() {
  return <div id="navbar">
    <img src={require('./testimages/reactpurple.png')} alt="logo"/>
    <h1>ReactAirlines TV</h1>
    <form action="">
    <input type="text" id="searchbar" name="search" value="Search..."/>
    <button id='searchbtn'><img src={require('./testimages/search.png')} alt="searchIcon" /></button>
    </form>
      </div>
}

function Channel() {
  return <div id='channel'>
    <div id='channelbox'>
       <img id='channelimg' src={require('./testimages/vtml.png')} alt="" />
      <Programs></Programs>
      <Subprogram></Subprogram>
      <Subprogram></Subprogram>
      <Subprogram></Subprogram>
    </div>
    <div id='channelbox'>
    <img id='channelimg' src={require('./testimages/vtml.png')} alt="" />
      <Programs></Programs>
      <Subprogram></Subprogram>
      <Subprogram></Subprogram>
      <Subprogram></Subprogram>
    </div>
    <div id='channelbox'>
    <img id='channelimg' src={require('./testimages/vtml.png')} alt="" />
      <Programs></Programs>
      <Subprogram></Subprogram>
      <Subprogram></Subprogram>
      <Subprogram></Subprogram>
    </div>
  </div>
}

function Programs() {
  return <div id='program'>
    <img id='coverimg' src={require('./testimages/blade.jpg')} alt="" /> 
    <div id='info'>
    <h2></h2>
    <h1>Blade runner: the final cut</h1>
    <div id="underline"></div>
    </div>
  </div> 
}

function Subprogram() {
  return <div id='subprogram'>
      <h2>20:45-22:15</h2>
       <h1>Blade runner: the final cut</h1>
     </div>
}

function Programation() {
  fetch('https://api.tvmaze.com/schedule')
  .then(response => response.json)
  .then(data =>{return data}) 
}



async function apiCall() {
  let response = await fetch(
    'https://api.tvmaze.com/schedule'
  );
  let json = await response.json();
  ;
  current.push(json);


  json.map((content: any) => contentFiltered.push({name: content.name}));
  console.log(contentFiltered);
  
}

apiCall();






export default App;

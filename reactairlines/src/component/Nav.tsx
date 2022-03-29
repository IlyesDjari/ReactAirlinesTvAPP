import '../layout/nav.scss'

function Nav() {
    return <div id="navbar">
      <img src={require('../testimages/reactpurple.png')} alt="logo"/>
      <h1>ReactAirlines TV</h1>
      {/* <form action="">
      <input type="text" id="searchbar" name="search" value="Search..."/>
      <button id='searchbtn'><img src={require('./testimages/search.png')} alt="searchIcon" /></button>
      </form> */}
        </div>
  }

  export default Nav
import '../layout/nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
    return <div id="navbar">
    <Link to="/">
      <img id='logo' src={require('../testimages/reactpurple.png')} alt="logo"/>
      <h1 id='headerlogo'>ReactAirlines TV</h1></Link>
        </div>
  }

  export default Nav
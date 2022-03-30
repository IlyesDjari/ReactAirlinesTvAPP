import { useState, useContext } from "react"
import showsContext from "../context/showsContext"
import '../layout/nav.scss'

const Search = () => {
  const [askedSearch, setSearch] = useState("")
  const {searchShows} = useContext(showsContext)
  const onSearchHandeling = (e: { preventDefault: () => void; }) => 
  {e.preventDefault()
    searchShows(askedSearch)
    
    ;}
  return <div >
<form >
  <input id="searchbar" type="text" placeholder="Search your show..." value={askedSearch}
   onChange={(e) => setSearch(e.target.value)}/>
  <button className="buttonSearch" onClick={onSearchHandeling}>Search</button>
</form>
  </div>
}

export default Search
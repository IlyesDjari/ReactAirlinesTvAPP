import './App.css';
import Nav from './component/Nav';
import Channel from './component/Channel';
import { Result } from './component/SearchList';
import { Search } from './component/Search';
import { useSearch } from './services/CallApiSearch';
import { useDetail } from './services/CallApiDetail';

function App() {
  const { series, search, itemClick, details } = useSearch();
  const { detail } = useDetail();
  return <div>
    <Nav></Nav>
      <Search search={ search }/>
      <Result result={ series } itemClick={ itemClick }/>
      {
        details &&
        <div>
          <h1 >{ details?.name }</h1>
          <ul>
            {
              details?.genres.map(g => <li key={ g }>{ g }</li>)
            }
          </ul>
        </div>
      }
     <Channel></Channel>
     </div> ;
}




export default App;


import './App.css';
import Channel from './component/Channel';
import Info from './component/Info'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return  <div>
      <Routes>
      <Route path="/" element={<Channel />} />
      <Route path="/show/:id" element={<Info/>}/>
      </Routes>
     </div> 
     
}

export default App;


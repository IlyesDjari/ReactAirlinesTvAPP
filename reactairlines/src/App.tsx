import './App.css';
import Channel from './pages/Channel';
import Info from './pages/Info'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return  <div>
      <Routes>
      <Route path="/" element={<div className='bg'> <Channel /></div>} />
      <Route path="/show/:id" element={<Info/>}/>
      </Routes>
     </div> 
     
}

export default App;


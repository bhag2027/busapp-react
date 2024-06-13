import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components.jsx/AddUser';
import LoginUser from './components.jsx/LoginUser';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<LoginUser/>}/>
      <Route path='/reg' element={<AddUser/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

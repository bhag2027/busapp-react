import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components.jsx/AddUser';
import LoginUser from './components.jsx/LoginUser';
import AddBus from './components.jsx/AddBus';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<LoginUser/>}/>
     <Route path='/add' element={<AddBus/>}/>
      <Route path='/reg' element={<AddUser/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

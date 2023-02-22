import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  {NavBar} from './components/NavBar';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/' element={<NavBar/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

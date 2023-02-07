//where the front-end web pages start
import './App.css';
import Login from './Compments/Login/Login';
import Loginex from './Compments/Login/Loginex';
import NavBarMenu from './Compments/NavBar';
import { Routes, Route } from "react-router-dom";
import Search from './Compments/Search/Search';
import Welcome from './Compments/Welcome/Welcome';

function App() {// App is the main sturcture of our webpage
  // for each page, it will always include a navBar
  //Routes is for set up front-end pages and link them into componments.
  return (
    <div className="App">
      <NavBarMenu/> 
      <Routes>
        <Route path='/' element={<Welcome />} />   {/* http://localhost:3000/ */}
        <Route path='/login' element={<Login />} />{/* http://localhost:3000/login */}
        <Route path='/search' element={<Search />} />  {/* http://localhost:3000/search */}
        <Route path='/loginex' element={<Loginex />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import React,{useState} from'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import NavBar from './components/NavBar';

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
  <Router>
    <NavBar isAuth={isAuth}/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
      <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;

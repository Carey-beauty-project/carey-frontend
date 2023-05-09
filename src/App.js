import React from 'react';
import './App.css';
import './Components/pages/Gallery.css'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Switch,Route, Routes } from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Service';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/Signup';
import Contact from './Components/pages/Contact';
import Login from './Components/pages/Login';
import Gallery from './Components/pages/Gallery';
import { GalleryData } from './Components/pages/GalleryData';

function App() {

 

  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/myCourses' exact Component={Services}/>
      <Route path='/products' exact Component={Products}/>
      <Route path='/signup' exact Component={SignUp}/>
      <Route path='/gallery' exact Component={Gallery}/>
      <Route path='/Login' exact Component={Login}/>
     </Routes>
     </Router>
  );
}

export default App;

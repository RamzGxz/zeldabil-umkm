import React, { useState } from 'react';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Details from './Pages/Details';
import Categories from './Pages/Categories';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:name' element={<Categories/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details/data/:category/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
};

export default App;
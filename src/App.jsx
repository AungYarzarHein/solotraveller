import React from 'react';
import "./App.css";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';


const App = () => {
  return (
    <div className="App">
       <HelmetProvider>
      <BrowserRouter>
       <Routes>
        <Route index element={<Home />}  />
        <Route path='/posts' element={<Posts />} />
       </Routes>
      </BrowserRouter>
     </HelmetProvider>
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react';
import './App.css';
import Footbar from './components/footbar';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Dashboard from './view/dashboard';
import IntroModal from './view/modal/modal';

function App() {
    
  return (
    <div className="App">
        <Navbar />
        <Dashboard />
        <Footbar />
        <div className='flex justify-center'>
          <IntroModal />
        </div>        
    </div>
  );
}

export default App;

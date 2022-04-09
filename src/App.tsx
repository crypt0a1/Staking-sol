import React from 'react';
import './App.css';
import Footbar from './components/footbar';
import Navbar from './components/navbar';
import Dashboard from './view/dashboard';

function App() {
  return (
    <div className="App">
        <Navbar />
          <Dashboard />
        <Footbar />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Header from './components/Header'


function App() {
  const [mode, setMode] = useState(false);
  const [countries, setCountries] = useState([]);

  return (
    <div className={" mx-auto bg-gray-800 h-full min-h-screen "  + ( mode ? ' bg-gray-100 ' : 'null')}>
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} countries={countries} setCountries={setCountries} />}  />
        <Route path="/country/:code" element={<Details mode={mode} countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;

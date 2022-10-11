import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CariMobil from './pages/CariMobil';
import Detail from './pages/Detail';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/cari-mobil/:productId" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;

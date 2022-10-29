import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CariMobil from './pages/CariMobil';
import CariMobilContext from './pages/CariMobilContext';
import Detail from './pages/Detail';
import Header from './components/header';
import Sample from './pages/sample';

const App = () => {
  return (
    <div className="App">
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/cari-mobil" element={<CariMobil />} />
        <Route path="/cari-mobil-context" element={<CariMobilContext />} />
        <Route path="/cari-mobil/:productId" element={<Detail />} />
      </Routes>
    </HashRouter>
    </div>
  );
};

export default App;

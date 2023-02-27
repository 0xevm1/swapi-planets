import React from 'react';
import {Route, HashRouter, Routes } from 'react-router-dom';
import './App.css';
import Planet from "./Pages/Planet";
import {AppNav} from "./Components/AppNav";
import PlanetList from "./Pages/PlanetList";

const App = () => {
  return (
      <HashRouter>
          <AppNav />
          <Routes>
              <Route path="/" element={<PlanetList />} />
              <Route path=":id" element={<Planet />} />
          </Routes>
      </HashRouter>
  );
}

export default App;

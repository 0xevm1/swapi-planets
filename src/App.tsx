import React from 'react';
import {Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Planet from "./Pages/Planet";
import {AppNav} from "./Components/AppNav";
import PlanetList from "./Pages/PlanetList";

const App = () => {
  return (
      <BrowserRouter>
          <AppNav />
          <Routes>
              <Route path="/" element={<PlanetList />} />
              <Route path=":id" element={<Planet />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

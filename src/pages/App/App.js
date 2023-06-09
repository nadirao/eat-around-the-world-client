import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Featured from '../Featured/Featured';
import Itinerary from '../Itinerary/Itinerary';


export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/featured" element={<Featured />}></Route>
        <Route path="/itinerary" element={<Itinerary />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}


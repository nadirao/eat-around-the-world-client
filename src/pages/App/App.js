import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Featured from '../Featured/Featured';
import Restaurant from '../Restaurant/Restaurant';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import searchYelp from '../../hooks/yelp-api/searchYelp';


export default function App() {
  const [businesses, setBusinesses] = useState([])
  const handleSearchYelp = async (term, location) => {
    const data = await searchYelp(term, location)
    console.log(data)
    setBusinesses(data);
  }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/featured" element={<Featured businesses={businesses}/>}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/destinationform" element={<DestinationForm searchYelp={handleSearchYelp}/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}


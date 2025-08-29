import {Routes, Route } from "react-router-dom";
import logo1 from './logo.svg';
import './App.css';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Blog from '../src/Pages/Blog';
import Contact from '../src/Pages/Contact';
import Gallery from '../src/Pages/Gallery';
import Product from '../src/Pages/Product';
import Review from '../src/Pages/Review';
import Services from '../src/Pages/Services';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Service" element={<Services />} />
      
    </Routes>
    </div>
  );
}

export default App;

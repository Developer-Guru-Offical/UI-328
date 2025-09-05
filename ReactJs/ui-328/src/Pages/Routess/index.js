import {Routes, Route } from "react-router-dom";
import {style} from './Routes.module.scss';
import Home from "../Home";
import About from '../About';
import Blog from '../Blog';
import Contact from '../Contact';
import Gallery from '../Gallery';
import Product from '../Product';
import Review from '../Review';
import Services from '../Services';
import NotFound from "../NotFound";

const Routess=()=>{

return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/Service" element={<Services />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
}
export default Routess;
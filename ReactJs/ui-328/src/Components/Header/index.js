import './Header.css';
import logo from '../../assests/images/dg-logo.jpeg';
import {Link } from "react-router-dom";

const Header=()=>{
  return <>
  <div className='leftSection'>
    <img src={logo} className='logoCss'/>
  </div>
  <div className='rightSection'>
     <ul className='navbar1'>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/About">ABOUT</Link></li>
      <li><Link to="/Service">SERVICE</Link></li>
      <li><Link to="/Product">PRODUCT</Link></li>
      <li><Link to="/Review">REVIEW</Link></li>
      <li><Link to="/Blog">BLOG</Link></li>
      <li><Link to="/Gallery">GALLERY</Link></li>
      <li><Link to="/Contact">CONTACT</Link></li>
      <li><Link to="/Login">LOGIN</Link></li>
      <li><Link to="/register">REGISTER</Link></li>
      </ul>
  </div>
</>

}
export default Header;
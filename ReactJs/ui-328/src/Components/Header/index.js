import './Header.css';
import logo from '../../assests/images/dg-logo.jpeg';

const Header=()=>{
  return <>
  <div className='leftSection'>
    <img src={logo} className='logoCss'/>
  </div>
  <div className='rightSection'>
     <ul className='navbar1'>
      <li><a href="#">HOME</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">SERVICE</a></li>
      <li><a href="#">PRODUCT</a></li>
      <li><a href="#">REVIEW</a></li>
      <li><a href="#">BLOG</a></li>
      <li><a href="#">GALLERY</a></li>
      <li><a href="#">CONTACT</a></li>
      <li><a href="#">LOGIN</a></li>
      <li><a href="#">REGISTER</a></li>
      </ul>
  </div>
</>

}
export default Header;
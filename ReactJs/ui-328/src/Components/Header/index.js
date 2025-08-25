import './Header.css';
import logo from '../../assests/images/dg-logo.jpeg';

const Header=({name123,name2,name3,name4})=>{
  console.log(name3);
  console.log({name4});
  return <>
    <h1 className='textCss'> Welcome to {name123},{name2} </h1>
    <h5>Wlecome to: {name3[0]}</h5>
    <img src={logo}></img>
  </>

}
export default Header;
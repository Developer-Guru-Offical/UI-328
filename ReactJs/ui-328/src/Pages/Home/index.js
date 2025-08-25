
import './Home.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Index';

const Home=()=>{

const name="Developer Guru";
const name1="Coder";
const name2=['HTML',"CSS",'Bootstrap','JS'];
const name3={'H':'HTML','C':'CSS','B':'BOOTSTRAP','R':'REACT JS'}

return <>
    <div>
        <Header name123={name} name2={name1} name3={name2} name4={name3}/>
    </div>
     <div className='bodySection'>
          WELCOME TO HOME 
    </div>
     <div>
        <Footer/>
    </div>
     </>

}

export default  Home;
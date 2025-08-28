
import './Home.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/Index';
import Courses from '../../Components/Courses';

const Home=()=>{

const name="Developer Guru";
const name1="Coder";
const name2=['HTML',"CSS",'Bootstrap','JS'];
const name3={'H':'HTML','C':'CSS','B':'BOOTSTRAP','R':'REACT JS'}

return <>
    <div class="headerSection">
        <Header/>
    </div>
     <div className='bodySection'>
          WELCOME TO HOME 
    </div>
    <div className='courseSection'>
        <div class="leftCourseSection">
            <h6> OUR COURSES </h6>
        </div>
        <div class="rightCourseSection">
              <Courses/>
        </div>
     </div>
     <div className='footerSection'>
        <Footer/>
    </div>
     </>

}

export default  Home;
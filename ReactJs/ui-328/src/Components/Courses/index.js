
import './Courses.css';

const Courses=()=>{
    return <>
     <div className='container'>
            <div className="row">
                <div className="col-md-3">
                <div className='card'>
                    <div className='card-body shadow bg-primary text-white'>
                       <h4 className='pt-5 ps-5 pe-3 pb-5'> FULL STACK</h4>
                    </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className='card'>
                    <div className='card-body shadow bg-danger text-white'>
                        <h4 className='pt-5 ps-5 pe-3 pb-5'> MREN STACK</h4>
                    </div>
                </div>
                </div>

                <div className="col-md-3">
                <div className='card'>
                    <div className='card-body shadow bg-dark text-white'>
                     <h4 className='pt-5 ps-5 pe-3 pb-5'> MEAN STACK</h4>
                    </div>
                </div>
                </div>

            <div className="col-md-3">
                <div className='card'>
                    <div className='card-body shadow bg-success text-white'>
                     <h4 className='pt-5 ps-5 pe-3 pb-5'> DATA SCIENCE</h4>
                    </div>
                </div>
                </div>
            </div>
        
     </div>
    </>
}

export default Courses;
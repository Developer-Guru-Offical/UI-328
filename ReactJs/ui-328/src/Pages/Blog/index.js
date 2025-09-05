
import style from './Blog.module.scss';
import Header from '../../Components/Header';

const Blog=()=>{
    return <>
    <Header/>
     <h1 className={style.textTitle}> This is the Blog Components</h1>
    </>
}
export default Blog;
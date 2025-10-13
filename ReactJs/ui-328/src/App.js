
import logo1 from './logo.svg';
import './App.css';
import Routess from './Pages/Routess';
import MyProvider from './Pages/Context/MyProvider ';

function App() {
  return (
    <div className="App">
      <MyProvider>
       <Routess/>
     </MyProvider>
    </div>
  );
}

export default App;

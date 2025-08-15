import logo1 from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p> HI hello {7+1}</p>
        {/* <p>
         Welcome to Devloper Guru familly..!
        </p>
        <a
          className="App-link"
          href="https://www.developerguru.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More About Us..!
        </a> */}
      </header>
    </div>
  );
}

export default App;

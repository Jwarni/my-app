import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to  My app Test and build app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
        <p> New changes are made  </p>
      </header>
    </div>
  );
}

export default App;

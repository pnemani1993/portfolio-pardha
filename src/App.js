import logo from './logo.svg';
import './App.css';
import './Skills';
import './Skills.css';

function App() {
  return (
    <>
    <Skills/>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>

  );
}

function Skills(){
  return (
      <div className="Skills">
        <header className="Skills-header">
          <p>
            This is a trial for the new division
          </p>
        </header>
      </div>
    );
}


export default App;

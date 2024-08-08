import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {



  
  const data = [
    {
        State: "Uttar Pradesh",
        Capital: "Lucknow",
    },
    {
        State: "Gujarat",
        Capital: "Gandhinagar",
    },
    {
        State: "Karnataka",
        Capital: "Bengaluru",
    },
    {
        State: "Punjab",
        Capital: "Chandigarh",
    },
    {
        State: "Maharashtra",
        Capital: "Mumbai",
    },
];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <Profile state={data[0].State} capital= {data[0].Capital}/>
    </div>
  );
}

export default App;

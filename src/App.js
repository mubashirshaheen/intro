// import logo from './logo.svg';
import Employee from './Employee'
import OtherComponent from './OtherComponenet'
import './App.css';

function App() {
  const headerText="Hello World";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}       
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          <p>{headerText}</p>
        </a>
        <OtherComponent/>
        <Employee firstName="Mubashir"/>
      </header>

    </div>
  );
}

export default App;

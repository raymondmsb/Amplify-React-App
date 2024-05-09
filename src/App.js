import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <Authenticator >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello World!</h1>
        </header>
      </div>
    </Authenticator>
  );
}

export default App;

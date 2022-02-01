import logo from './logo.svg';
import './App.css';
import Bhnlegalconsent from './components/Bhnlegalconsent/Bhnlegalconsent'; 

function App() {
  return (
    <div className="App">
        <label>Enter your email:
          <input type="email" id="userEmail" placeholder="Your Email"/>
        </label>
        <Bhnlegalconsent userEmailRef='userEmail' />

        
    </div>
  );
}

export default App;

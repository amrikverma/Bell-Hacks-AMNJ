import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App"> 
      <NavBar />
      <SignIn />
    </div>
  );
}

export default App;

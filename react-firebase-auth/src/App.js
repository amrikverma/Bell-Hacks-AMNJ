import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import EmergencyBtn from './components/auth/EmergencyBtn'

function App() {
  return (
    <div className="App"> 
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      <EmergencyBtn/>
    </div>
  );
}

export default App;

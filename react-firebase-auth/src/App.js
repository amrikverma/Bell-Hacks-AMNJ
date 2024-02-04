import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import NavBar from './NavBar';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import EmergencyBtn from './components/auth/EmergencyBtn';
import ScheduleMeeting from './components/ScheduleMeeting';



function App() {
  return (
    <div className="App"> 
      <NavBar />
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      <EmergencyBtn/>
      <ScheduleMeeting/>
    </div>
  );
}

export default App;

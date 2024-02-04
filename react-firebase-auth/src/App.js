import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import NavBar from './NavBar';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
<<<<<<< HEAD
import EmergencyBtn from './components/auth/EmergencyBtn'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from "./components/Home"
import NotFound from "./components/NotFound"
=======
import EmergencyBtn from './components/auth/EmergencyBtn';
import ScheduleMeeting from './components/ScheduleMeeting';
>>>>>>> 235b87422b1cca4075f8a7c3e50db1305b3b2359

function App() {
  return (
    <div className="App"> 
<<<<<<< HEAD
    <NavBar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/logout" element={<AuthDetails/>} />
      </Routes>
    </Router>
    <EmergencyBtn/>
=======
      <NavBar />
      <SignIn/>
      <SignUp/>
      <AuthDetails/>
      <EmergencyBtn/>
>>>>>>> 235b87422b1cca4075f8a7c3e50db1305b3b2359
      
    </div>
  );
}

export default App;

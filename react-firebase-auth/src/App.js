import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import NavBar from './NavBar';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import EmergencyBtn from './components/auth/EmergencyBtn'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from "./components/Home"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="App"> 

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

      
    </div>
  );
}

export default App;

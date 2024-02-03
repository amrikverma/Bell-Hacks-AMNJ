import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import ChatBot from 'react-simple-chatbot';
 
const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        end: true
    }
];

function App() {
  return (
    <div className="App"> 
      <SignIn />

    </div>
  );
}

export default App;

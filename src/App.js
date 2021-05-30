//import logo from './logo.svg';
import { useState} from 'react'
import './App.css';
import Profile from './Components/Profile.js'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button className = "visibility-btn" onClick = {()=>setShow(!show)}>
        {show?"Hide Counter": "show Counter"}
      </button>
      {show && <Profile  />}
     
      
    </div>
  );
}

export default App;

import react from 'react'
import {Link} from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css';
import Section from './components/section'
import Result from './components/result'
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Section />
  
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// react router dom
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';
import { useState } from 'react';


function App() {
  const [twitterUsername, setTwitterUsername] = useState("")
  const [linkedinUsername, setLinkedinUsername] = useState("")

  window.document.title = "Profile Analyzer"

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing setTwitterUsername={setTwitterUsername} setLinkedinUsername={setLinkedinUsername} />} />
      <Route path="/dashboard" element={<Dashboard twitterUsername={twitterUsername} linkedinUsername={linkedinUsername} />} />
    </Routes>
  </BrowserRouter>

}

export default App;

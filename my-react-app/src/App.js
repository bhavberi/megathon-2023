import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// react router dom
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Landing from './Landing';
import { useState } from 'react';


function App() {
  const [personality, setPersonality] = useState(["", ""]);
  const [sentiment, setSentiment] = useState({
  })
  const [comments, setComments] = useState([

  ])
  const [jobs, setJobs] = useState(
    {
      "Soft engg": 1.0,
      "Data engg": 0.5,
      "Data scientist": 0.2,
    })

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing setPersonality={setPersonality} setSentiment={setSentiment} setComments={setComments} setJobs={setJobs} />} />
      <Route path="/dashboard" element={<Dashboard personality={personality} comments={comments} sentiment={sentiment} jobs={jobs} />} />
    </Routes>
  </BrowserRouter>

}

export default App;

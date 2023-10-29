import React, { useEffect } from 'react';
import { get_personality, setBarsAndComments, set_jobs } from './api';
import { useNavigate } from 'react-router-dom';

function Landing({
  setPersonality,
  setSentiment,
  setComments,
  setJobs
}) {

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    // get twitter username
    const twitter_username = document.querySelector('#twitterID').value;
    console.log(twitter_username);
    // get linkedin username
    const linkedin_username = document.querySelector('#linkedinID').value;
    console.log(linkedin_username);
    const personality_title = await get_personality(twitter_username)
    setPersonality(personality_title);
    console.log(personality_title);

    setBarsAndComments(twitter_username, setSentiment, setComments)
    set_jobs(setJobs)

    navigate('/dashboard');
  }
  return <>
    <section style={{ backgroundColor: '#eee', height: '100vh', alignment: 'center' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" >
            <div className="card mb-4">
              <div className="card-body text-center">
                {/* input linkedin profile link */}
                <div className="mb-3">
                  <label className="form-label">LinkedIn Profile Link</label>
                  <input type="text" id="linkedinID" className="form-control" placeholder="https://www.linkedin.com/in/username" />
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6" >
            <div className="card mb-4">
              <div className="card-body text-center">
                {/* input linkedin profile link */}
                <div className="mb-3">
                  <label className="form-label">Twitter Username</label>
                  <input type="text" id="twitterID" className="form-control" placeholder="username" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row">
          {/* generate report button */}
          <button className="btn btn-primary" style={{ width: "25%", marginLeft: "32vw" }}
            onClick={handleSubmit}

          >Generate Report</button>
        </div>
      </div>
    </section>
  </>
}

export default Landing;
import React, { useEffect, useState } from 'react';
import { get_llama_response_2, get_personality, setBarsAndComments, set_jobs } from './api';
import { html } from './index1';
function Dashboard({ twitterUsername, linkedinUsername }) {

  const [personality, setPersonality] = useState(["", ""]);
  const [sentiment, setSentiment] = useState({})
  const [comments, setComments] = useState([])
  const [jobs, setJobs] = useState({})

  const [llamaresponse2, setLlamaresponse2] = useState(null)

  const personality_title = personality[0]
  const llama_response = personality[1]

  window.afterTest = async function () {
    // console.log(window.testResults)
    const llr2 = await get_llama_response_2(window.testResults)
    setLlamaresponse2(llr2)
  }

  function fetch_jobs() {
    set_jobs(setJobs, linkedinUsername)
    setJobs({ "Loading...": "" })
  }

  function fetch_personality() {
    get_personality(twitterUsername, setPersonality)
    setPersonality(["Loading...", ""])
  }

  function fetch_sentiments() {
    setBarsAndComments(twitterUsername, setSentiment, setComments)
    setSentiment({ "Loading...": "" })
  }

  return <>
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "/"
                  }}
                >Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Candidate Report</li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4" style={{ height: "45vh" }}>
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3">John Reddy</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-5">
                  {/* <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button> */}
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0" style={{ height: "45vh" }}>
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4" style={{ height: "49.5vh" }}>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Reddy</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card mb-4 mb-md-0" style={{ height: '45vh' }}>
                <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1"> </span> Sentiment Analysis
                  </p>
                  {
                    sentiment["Loading..."] == "" && <div className="spinner-border" role="status"></div>
                  }
                  {
                    (Object.keys(sentiment).length === 0) && <button type="button" className="btn btn-warning" onClick={fetch_sentiments}>Run</button>
                  }
                  {
                    // if not loading in sentiment
                    // sentiment["Loading..."] == undefined &&
                    Object.keys(sentiment).map((key, index) => {
                      const val = sentiment[key]
                      return <>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }} key={key}>{key}</p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: `${val * 100}%` }} aria-valuenow={10}
                            aria-valuemin="0" aria-valuemax="1"></div>
                        </div>
                      </>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="overflow-auto" style={{ height: '49.5vh' }}>
                <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1"> </span> Personality Analysis
                  </p>
                  {
                    personality_title == "" && <button type="button" className="btn btn-success" onClick={fetch_personality}>Run</button>
                  }
                  {
                    personality_title == "Loading..." && <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  }
                  <h1>{personality_title != "Loading..." && personality_title}</h1>
                  <p>
                    {llama_response}
                  </p>
                </div>

              </div>
            </div>
            <div className="col-md-12">
              <div className="card mb-4 mb-md-0" style={{ height: '45vh' }}>
                <div className="overflow-auto" style={{ height: '45vh' }}>
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1"> </span> Negative Responses
                    </p>
                    {
                      (Object.keys(sentiment).length === 0) && <button type="button" className="btn btn-danger" onClick={fetch_sentiments}>Run</button>
                    }
                    {
                      sentiment["Loading..."] == "" && <div className="spinner-border" role="status"></div>
                    }
                    {
                      comments.map((item, index) => {
                        return <>
                          <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>{item}</p>
                        </>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4 mt-4">
            <div className="card mb-4 mb-md-0" style={{ height: '45vh' }}>
              <div className="overflow-auto" style={{ height: '45vh' }}>
                <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1"> </span> Jobs
                  </p>
                  {/* {
                    JSON.stringify(jobs)
                  } */}
                  {
                    jobs["Loading..."] == ""  && <div className="spinner-border" role="status"></div>
                  }
                  {
                    (Object.keys(jobs).length === 0) && <button type="button" className="btn btn-info" onClick={fetch_jobs}>Run</button>
                  }
                  {
                    Object.keys(jobs).map((key, index) => {
                      const val = jobs[key]
                      return <>
                        <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }} key={key}>{key}</p>
                        <div className="progress rounded" style={{ height: '5px' }}>
                          <div className="progress-bar" role="progressbar" style={{ width: `${val * 100}%` }} aria-valuenow={10}
                            aria-valuemin="0" aria-valuemax="1"></div>
                        </div>
                      </>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4">
            <div className="card mb-4 mb-md-0" style={{ height: '50vh' }}>
              <div className="overflow-auto" style={{ height: '50vh' }}>
                <div className="card-body">
                  <p className="mb-4"><span className="text-primary font-italic me-1"> </span> Big-5 Personality Test
                  </p>
                  {
                    (llamaresponse2 === null) &&
                    <div dangerouslySetInnerHTML={html}></div> || <div className="overflow-auto" style={{ height: '50vh' }}>
                      {llamaresponse2}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}

export default Dashboard;
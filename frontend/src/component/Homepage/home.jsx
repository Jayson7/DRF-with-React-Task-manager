import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Homepage() {
  axios
    .get('http://localhost:8000')
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })

  return (
    <div>
      {/* hello world */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

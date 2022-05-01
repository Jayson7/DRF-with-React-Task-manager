import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'

function Homepage() {
  const todos = useSelector((...state) => state.todoReducer)
  const dispatch = useDispatch()

  //   get todos from server

  axios
    .get('http://localhost:8000')
    .then((res) => {
      dispatch({
        type: 'STORE_TASK',
        payload: res.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })

  console.log(todos)

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
        {/* displa task in cards */}
        <div className="row">
          {/* {todos.forEach((todo) => (
            <div className="col-md-4">
              {' '}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{todo.title}</h5>
                  <p className="card-text">{todo.description}</p>
                  <p className="card-text">{todo.status}</p>
                  <p className="card-text">{todo.created_at}</p>
                  <p className="card-text">{todo.updated_at}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Homepage

import { React, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//  import { taskUpdate } from '../../actions/taskUpdate'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
export const Homepage = () => {
  const dispatch = useDispatch()

  const todo = useSelector((store) => store.tasks.task)

  const getTasks = () => {
    axios
      .get('http://localhost:8000')
      .then((res) => {
        dispatch({ type: 'TASK_UPDATE', payload: res.data })
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="container">
      <h1 className="text-center my-5"> All Tasks </h1>
      <Row xs={1} md={3} className="g-4">
        {' '}
        {todo
          ? todo.map((task) => {
              return (
                <div key={task.id}>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title> {task.name_of_task} </Card.Title>{' '}
                        <Card.Text>
                          {' '}
                          {task.task}{' '}
                          <small className="text-center">
                            {' '}
                            {task.date_created}{' '}
                          </small>{' '}
                        </Card.Text>{' '}
                        <Card.Footer className="bg-black">
                          <Link
                            to={`details/${task.id}`}
                            className=" btn btn-info  text-decoration-none text-dark m-2"
                          >
                            {' '}
                            View{' '}
                          </Link>
                          <Link
                            to={`editTask/${task.id}`}
                            className="m-2 btn btn-success  text-decoration-none text-dark"
                          >
                            Edit{' '}
                          </Link>{' '}
                          <Button
                            variant="danger"
                            onClick={() => {
                              axios
                                .delete(`http://localhost:8000/task/${task.id}`)
                                .then(() => {
                                  getTasks()
                                })
                                .catch((err) => console.log(err))
                            }}
                          >
                            Delete
                          </Button>
                        </Card.Footer>{' '}
                      </Card.Body>{' '}
                    </Card>{' '}
                  </Col>{' '}
                </div>
              )
            })
          : null}{' '}
      </Row>{' '}
    </div>
  )
}
export default Homepage

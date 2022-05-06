import { React, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//  import { taskUpdate } from '../../actions/taskUpdate'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
      <h1 className="text-center my-5">All Tasks</h1>

      <Row xs={1} md={3} className="g-4">
        {todo
          ? todo.map((task) => {
              return (
                <div key={task.id}>
                  <Col>
                    <Card>
                      <Card.Body>
                        <Card.Title>{task.name_of_task}</Card.Title>
                        <Card.Text>
                          {task.task}
                          <small className="text-center">
                            {' '}
                            {task.date_created}
                          </small>
                        </Card.Text>
                        <Card.Footer className="bg-black">
                          <Button className="m-2" variant="info">
                            <Link
                              to={`details/${task.id}`}
                              className="text-decoration-none text-white"
                            >
                              {' '}
                              View{' '}
                            </Link>
                          </Button>{' '}
                          <Button className="m-2">Edit</Button>
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              )
            })
          : null}
      </Row>
    </div>
  )
}
export default Homepage

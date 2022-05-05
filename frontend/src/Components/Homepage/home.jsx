import { React, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//  import { taskUpdate } from '../../actions/taskUpdate'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

export const Homepage = () => {
  const dispatch = useDispatch()
  const todo = useSelector((store) => store.tasks.task)
  console.log(todo)
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
      <h1>Homepage</h1>

      <Row xs={1} md={2} className="g-4">
        {todo
          ? todo.map((task) => {
              return (
                <Col key="{ task.id}">
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          : null}
      </Row>
    </div>
  )
}
export default Homepage

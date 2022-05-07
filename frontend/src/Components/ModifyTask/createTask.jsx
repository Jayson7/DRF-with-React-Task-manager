import { React, useReducer } from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import './createTask.css'

function CreateTask() {
  const initialState = {
    task: '',
    task_name: '',
  }
  function monitorReducer(regdata, { field, value }) {
    return {
      ...regdata,
      [field]: value,
    }
  }
  const [regdata, dispatch] = useReducer(monitorReducer, initialState)

  const { task, task_name } = regdata

  const onchange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })

    // output state using useSelector hook
  }
  return (
    <div>
      {/* put form in a box and place in the center of the page  */}
      <div className="container py-3   justify-content-center">
        <div className="wraps">
          <h3 className="my-3">Create A Task</h3>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              console.log(task, task_name)
              axios
                .post('http://localhost:8000', [task, task_name])
                .then(function (response) {
                  console.log(response)
                })
                .catch(function (error) {
                  console.log(error)
                })
            }}
          >
            <Form.Group className="mb-3 " controlId="formBasicText">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                name="task_name"
                value={task_name}
                onChange={onchange}
                required
                placeholder="Enter Task Name"
              />
            </Form.Group>

            <Form.Group className="mb-3  " controlId="formBasicText">
              <Form.Label>Task</Form.Label>

              <InputGroup>
                <FormControl
                  as="textarea"
                  required
                  name="task"
                  value={task}
                  onChange={onchange}
                  aria-label="With textarea"
                />
              </InputGroup>
            </Form.Group>

            <Button variant="primary" className="" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default CreateTask

import { React, useReducer, useState } from 'react'
import { Form, Button, InputGroup, FormControl, Modal } from 'react-bootstrap'
import axios from 'axios'
import './createTask.css'

function CreateTask() {
  const [modalShow, setModalShow] = useState(false)

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

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
                .post('http://localhost:8000/create', {
                  task: task,
                  name_of_task: task_name,
                })
                .then(function (response) {
                  console.log(response.data)
                  console.log(response.status)
                })
                .catch(function (error) {
                  console.log(error)
                })

              setModalShow(true)
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default CreateTask

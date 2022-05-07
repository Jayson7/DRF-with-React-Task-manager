import { React, useState } from 'react'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import Homepage from '../Homepage/home'
import { FaBars } from 'react-icons/fa'
import { Nav, Offcanvas } from 'react-bootstrap'
import ViewTask from '../ModifyTask/viewTask'
import CreateTask from '../ModifyTask/createTask'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <BrowserRouter>
        <div className="contaner-fluid  py-3  bg-black text-white text-center justify-content-end">
          <FaBars className="h2 mx-auto" onClick={handleShow} />
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h2> Task Generator </h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 d-grid">
              <Link
                className="text-decoration-none  my-3 text-success"
                id="link"
                onClick={handleClose}
                to="/"
              >
                Home
              </Link>

              <Link
                className="text-decoration-none  my-3 text-success"
                id="link"
                onClick={handleClose}
                to="/createTask"
              >
                Add Task
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/details/:id" element={<ViewTask />} />
          <Route exact path="/createTask" element={<CreateTask />} />
          <Route> 404 : Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Modal, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faGraduationCap, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';

function App() {
  const initialState = {
    title: '',
    course_code: '',
    department: '',
    students: 0,
    teachers: 0
  }
  const [newClass, setNewClass] = useState(initialState)
  const [addClassModal, setAddClassModal] = useState(false)
  const [listClassModal, setListClassModal] = useState(false)
  const [alertShow, setAlertShow] = useState(false)

  const addNewClass = () => {
    setAlertShow(true)
    console.log(newClass)
  }

  return (
    <Container fluid="sm" className='mt-5 pt-5'>
      <Row className="justify-content-md-center">
        <Col>
          <h1 className='p-5 m-5'>
            <FontAwesomeIcon icon={faGraduationCap} size='lg' />
            ClassRoom Management System
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Button variant="primary" size='lg' className='p-5 m-5' onClick={() => setAddClassModal(true)}>
            <FontAwesomeIcon icon={faGraduationCap} size='lg' />
            Add new Class
          </Button>
        </Col>
        <Col>
          <Button variant="success" size='lg' className='p-5 m-5' onClick={() => setListClassModal(true)}>
            <FontAwesomeIcon icon={faBuildingColumns} size='lg' />
            All Classes
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Button variant="danger" size='lg' className='p-5 m-5'>
            <FontAwesomeIcon icon={faAddressCard} size='lg' />
            Registration
          </Button>
        </Col>
        <Col>
          <Button variant="warning" size='lg' className='p-5 m-5'>
            <FontAwesomeIcon icon={faRightToBracket} size='lg' />
            Login
          </Button>
        </Col>
      </Row>

      <Modal
        show={addClassModal}
        size="lg"
        onHide={() => setAddClassModal(false)}
        aria-labelledby="add-class-model"
        className='mt-5 pt-5'
      >
        <Modal.Header closeButton>
          <Modal.Title id="add-class-model">
            <FontAwesomeIcon icon={faGraduationCap} size='lg' />
            Add New Class
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" name="title" placeholder="Title/Course Name. ex: class 5 primary " onChange={(e) => setNewClass({ ...newClass, [e.target.name]: e.target.value })} value={newClass.title} />
          <br />
          <Form.Control type="text" name="course_code" placeholder="Course code if any. ex: c5y2024" onChange={(e) => setNewClass({ ...newClass, [e.target.name]: e.target.value })} value={newClass.course_code} />
          <br />
          <Form.Select aria-label="select-department-label" name="department" onChange={(e) => setNewClass({ ...newClass, [e.target.name]: e.target.value })} value={newClass.department}>
            <option>Select Department type</option>
            <option value="sci">Science</option>
            <option value="art">Arts</option>
            <option value="com">Commerce</option>
            <option value="reg">Religion</option>
            <option value="spo">Sports</option>
          </Form.Select>
          <br />
          <Form.Control name="students" type="number" placeholder="Number of students" onChange={(e) => setNewClass({ ...newClass, [e.target.name]: e.target.value })} value={newClass.students} />
          <br />
          <Form.Control name="teachers" type="number" placeholder="Number of teachers" onChange={(e) => setNewClass({ ...newClass, [e.target.name]: e.target.value })} value={newClass.teachers} />
          <br />
          <br />
          <Alert variant='success' show={alertShow}>
            A new Class added successfully!
          </Alert>
          <Row>
            <Col>
              <Button variant="success" size='md' className='p-5 m-5 rounded-circle' onClick={addNewClass}>
                <FontAwesomeIcon icon={faAdd} size='lg' />
                Save
              </Button>
            </Col>
            <Col>
              <Button variant="info" size='md' className='p-5 m-5 rounded-circle' onClick={() => setNewClass(initialState)} >
                Reset
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

    </Container>
  );
}

export default App;

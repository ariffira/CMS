import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faGraduationCap, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { MyContext } from './MyContext';
import AddClass from './AddClass';
import ListClass from './ListClass';
import Login from './Login';
import Register from './Register';

function App() {
  // background picture
  const bg_picture = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%'
  }

  // context api values
  const [classList, setClassList] = useState([])

  const [addClassModal, setAddClassModal] = useState(false)
  const [listClassModal, setListClassModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)

  const initialState = {
    title: '',
    course_code: '',
    department: '',
    students: 0,
    teachers: 0
  }
  const [newClass, setNewClass] = useState(initialState)
  const [alertShow, setAlertShow] = useState(false)

  return (
    <div style={bg_picture}>
      <MyContext.Provider value={{ classList, setClassList, newClass, setNewClass, alertShow, setAlertShow, addClassModal, setAddClassModal, listClassModal, setListClassModal, loginModal, setLoginModal, registerModal, setRegisterModal }}>
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
              <Button variant="primary" className='p-5 m-5' onClick={() => setAddClassModal(true)}>
                <FontAwesomeIcon icon={faGraduationCap} size='lg' />
                Add new Class
              </Button>
            </Col>
            <Col>
              <Button variant="success" className='p-5 m-5' onClick={() => setListClassModal(true)}>
                <FontAwesomeIcon icon={faBuildingColumns} size='lg' />
                All Classes
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <Button variant="danger" className='p-5 m-5' onClick={() => setRegisterModal(true)}>
                <FontAwesomeIcon icon={faAddressCard} size='lg' />
                Registration
              </Button>
            </Col>
            <Col>
              <Button variant="warning" className='p-5 m-5' onClick={() => setLoginModal(true)}>
                <FontAwesomeIcon icon={faRightToBracket} size='lg' />
                Login
              </Button>
            </Col>
          </Row>
          <AddClass />
          <ListClass />
          <Login />
          <Register />
        </Container>
      </MyContext.Provider>
    </div>
  );
}

export default App;

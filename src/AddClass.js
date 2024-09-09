import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { Button, Row, Form, Alert, Modal, Col } from "react-bootstrap";
import { useContext } from 'react';
import { MyContext } from './MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function AddClass() {
    const initialState = {
        title: '',
        course_code: '',
        department: '',
        students: 0,
        teachers: 0
    }
    const {
        newClass,
        setNewClass,
        alertShow,
        setAlertShow,
        classList,
        setClassList,
        addClassModal,
        setAddClassModal
    } = useContext(MyContext)

    const addNewClass = () => {
        setAlertShow(true)
        console.log(newClass)
        // updates classList array using context api 
        setClassList([...classList, newClass])
        console.log(classList)
    }
    return (<>
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
    </>);
}

export default AddClass;
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { MyContext } from './MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import { faAddressCard, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function Register() {
    const {
        registerModal,
        setRegisterModal
    } = useContext(MyContext)

    return (<>
        <Modal
            show={registerModal}
            size="lg"
            onHide={() => setRegisterModal(false)}
            aria-labelledby="Register-model"
            className='mt-5 pt-5'
        >
            <Modal.Header closeButton>
                <Modal.Title id="add-class-model">
                    <FontAwesomeIcon icon={faAddressCard} size='lg' />
                    Register system
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm="2" className="text-center">
                        <FontAwesomeIcon icon={faUser} size='lg' />
                    </Col>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="User Name Please" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="2" className="text-center">
                        <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    </Col>
                    <Col sm="10">
                        <Form.Control type="email" placeholder="Your Email. ex: test@gmail.com " />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="2" className="text-center">
                        <FontAwesomeIcon icon={faLock} size='lg' />
                    </Col>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Your Password. ****" />
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row>
                    <Col>
                        <Button variant="success" size='md' className='p-5 m-5 rounded-circle'>
                            <FontAwesomeIcon icon={faAddressCard} size='lg' />
                            Register
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="info" size='md' className='p-5 m-5 rounded-circle'>
                            Reset
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    </>);
}

export default Register;
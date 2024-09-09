import { faEnvelope, faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { MyContext } from './MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";

function Login() {
    const {
        loginModal,
        setLoginModal
    } = useContext(MyContext)

    return (<>
        <Modal
            show={loginModal}
            size="lg"
            onHide={() => setLoginModal(false)}
            aria-labelledby="login-model"
            className='mt-5 pt-5'
        >
            <Modal.Header closeButton>
                <Modal.Title id="add-class-model">
                    <FontAwesomeIcon icon={faRightToBracket} size='lg' />
                    Login system
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                        <Button variant="danger" size='md' className='p-5 m-5 rounded-circle'>
                            <FontAwesomeIcon icon={faRightToBracket} size='lg' />
                            Login
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

export default Login;
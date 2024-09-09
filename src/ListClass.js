import { ListGroup, Modal } from "react-bootstrap";
import { useContext } from 'react';
import { MyContext } from './MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

function ListClass() {
    const {
        classList,
        listClassModal,
        setListClassModal
    } = useContext(MyContext)
    return (<>
        <Modal
            show={listClassModal}
            size="lg"
            onHide={() => setListClassModal(false)}
            aria-labelledby="add-class-model"
            className='mt-5 pt-5'
        >
            <Modal.Header closeButton>
                <Modal.Title id="add-class-model">
                    <FontAwesomeIcon icon={faBuildingColumns} size='lg' />
                    All classes List
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {classList && classList.map((item, index) => {
                        return (
                            <ListGroup.Item variant="success" key={index}>
                                Title/Class Name : {item.title},
                                Course_code: {item.course_code},
                                Students: {item.students},
                                Teachers: {item.teachers},
                                Department: {item.department}
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Modal.Body>
        </Modal>
    </>);
}

export default ListClass;
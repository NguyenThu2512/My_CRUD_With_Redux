import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { editDataUser } from '../action/actions';

function ModalEditUser(props) {
  const {isShowModalEditUser,handleClose, dataEditUser}=props
  const [email, setEmail]=useState("");
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")

  const dispatch = useDispatch()

  useEffect(()=>{
    setEmail(dataEditUser.email);
    setFirstName(dataEditUser.first_name);
    setLastName(dataEditUser.last_name);
  }, [dataEditUser])

  const handleUpdateUser=()=>{
    dispatch(editDataUser(dataEditUser.id, email, firstName, lastName))
    handleClose()
  }

  return (
    <div>
      <Modal show={isShowModalEditUser} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control type="email" value={email || ""} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>First Name: </Form.Label>
                  <Form.Control type="text" value={firstName || ""} onChange={(e)=> setFirstName(e.target.value)} placeholder="First name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name: </Form.Label>
                  <Form.Control type="text" value={lastName || ""} onChange={(e)=> setLastName(e.target.value)} placeholder="Last name" />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleUpdateUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}

export default ModalEditUser

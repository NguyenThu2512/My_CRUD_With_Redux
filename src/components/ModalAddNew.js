import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addDataUser } from '../action/actions';

function ModalAddNew() {
    const [email, setEmail]=useState("");
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const isCreating =useSelector(state=> state.user.isCreating)
    const dispatch =useDispatch()

    const handleAddNew = () => {
        dispatch(addDataUser(email, firstName, lastName))
        setEmail("")
        setFirstName("")
        setLastName("")
    }
  return (
    <div className='container my-4'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>First Name: </Form.Label>
                <Form.Control type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder="First name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name: </Form.Label>
                <Form.Control type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder="Last name" />
            </Form.Group>
        
            <Button variant="primary" onClick={()=> handleAddNew()} disabled={isCreating}>
                Create
            </Button>
        </Form>
    </div>
  )
}

export default ModalAddNew

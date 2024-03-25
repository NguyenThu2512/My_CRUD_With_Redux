import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Header() {
    const listUsers= useSelector(state=>state.user.listUsers)
    console.log("list:", listUsers)
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="d-flex">
                <Navbar.Brand href="#home">CRUD-REDUX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavDropdown title={`${listUsers.length} Users`} id="basic-nav-dropdown">
                        {
                            listUsers && listUsers.length>0 && listUsers.map(user=>{
                                return <NavDropdown.Item >{user.last_name} </NavDropdown.Item>
                            })
                        }
                    
                    
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
      
    </div>
  )
}

export default Header

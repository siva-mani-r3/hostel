import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
import './App.css'
const Navbar1 = () => {
  const navigate = useNavigate()
  const Logout=(e)=>{
    e.preventDefault();
        navigate('/login')
}

    return (
    <Navbar expand="lg fixed-top" style={{"background":"turquoise"}}>
<Container fluid>
  <Navbar.Brand href="https://www.aec.edu.in/" target='_blank'><img src='2.png'alt='siva' style={{"width":"70px","height":"50px"}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
   <Button   style={{"boxShadow":"0px 1px 5px 0px darkblue","backgroundColor":"white","color":"black","margin":"7px"}} ><Link to='/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22' style={{"textDecoration":"none","color":"black"}}>Home</Link></Button>
 <Button  style={{"boxShadow":"0px 1px 5px 0px darkblue","backgroundColor":"white","color":"black","margin":"7px"}}><Link to='/rooms' style={{"textDecoration":"none","color":"black"}}>Rooms</Link></Button>
    <Button  style={{"boxShadow":"0px 1px 5px 0px darkblue","backgroundColor":"white","color":"black","margin":"7px"}}><Link to='/available' style={{"textDecoration":"none","color":"black"}}>Available</Link></Button>
    </Nav>
    <Form className="d-flex">
      {/* <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search" 

      />
      <Button variant="outline-success"  >Search</Button> */}
      <Button variant="outline-danger" style={{"marginLeft":"10px"}} onClick={Logout}>Logout</Button>
    </Form>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}
export default Navbar1

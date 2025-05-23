import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import './header.css'


const  Header =()=> {
  return (
   <div className="wraper">
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#" className='logo'>Logo Here</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">providers</Nav.Link>
            <Nav.Link href="#action2">specialities</Nav.Link>
            <Nav.Link href="#action2">services</Nav.Link>
            <Nav.Link href="#action2">patient info</Nav.Link>
            <Nav.Link href="#action2">physical</Nav.Link>
            <Nav.Link href="#action2">Location/Contact</Nav.Link>
          
    
          </Nav>
         
           
            <Button className='search'><CiSearch className='svg' />Search</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default Header;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function NavBar(props) {
  const history = useHistory();

  const [user, setUser] = useState("");
  const logout = () => {
    localStorage.removeItem("userInfo");
    history.push("/login");
  };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link to='/'>
          <Navbar.Brand href='#home'>E-commerce</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavDropdown title={user.name} id='basic-nav-dropdown'>
              <>
                <Link to={"/addproduit"} className='dropdown-item' replace>
                  ajouter produit
                </Link>

                <Link to='/addcategorie' className='dropdown-item' replace>
                  ajouter gategorie
                </Link>
                <Link to='/categories' className='dropdown-item' replace>
                  List categories
                </Link>
              </>
              <Link to='/wishList' className='dropdown-item' replace>
                wish list
              </Link>
              <NavDropdown.Divider />
              <Button className='dropdown-item' onClick={logout}>
                logout
              </Button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import "./Header.css"

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="nav-heading" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          TravelWorld
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white ml-4">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      
    
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav style={{marginLeft:"auto"}} navbar>
          {context.user ? (
            
              <NavItem>
                
                <button className="bg-light rounded mr-3">
              <NavLink tag={Link} to="/"
                onClick={() => {
                  context.setUser(null);
                }}
                className="text-dark"
              >
                LogOut
              </NavLink>
              </button>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <button className="bg-light rounded">
                  <NavLink tag={Link} to="/signup" className="text-dark">
                  SignUp
                </NavLink></button>
              </NavItem>
              <NavItem>
              <button className="bg-light rounded">
                <NavLink tag={Link} to="/signin" className="text-dark">
                  SignIn
                </NavLink></button>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar>
        <Nav>
          <NavItem>
            <Link to="/" className="brand-name p-0">
              Easy Fresh Goodness
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/search" className="mx-4">
              Search
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;

import React from 'react'
import aakar from "./aakar.jpg"
import {NavbarBrand,Navbar,NavbarToggler,Collapse,Nav,NavbarText,NavItem,NavLink} from "reactstrap"
const NavbarComponent = () => {
    return (
        <div>
            {/* <Navbar
                color="light"
                expand="md"
                light   
                style={{height:"50px"}}
            >
                <NavbarBrand href="#">

                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                </Nav>
                <NavbarText>
                    <mob>Contact Us  : 9869405747</mob>
                </NavbarText>
                </Collapse>
            </Navbar> */}
                <div style={{textAlign:"center"}}>
                 <img src={aakar}  style={{width:"550px"}} alt="Aakar Clinic Image"/>
                </div>
        </div>
    )
}

export default NavbarComponent

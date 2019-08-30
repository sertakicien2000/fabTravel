import React from "react";
import "./NavBar.css";
import { Navbar, NavItem } from 'react-materialize';

const NavBar = props => (

    <Navbar brand={<img id="logo" src="uploads/logo.png" />} right>
        <NavItem href={"/create"}>Crée</NavItem>
        <NavItem href={"/view"}>Vue</NavItem>
        <NavItem onClick={props.logOut} href={"/"}>déconnecter {props.username}</NavItem>
    </Navbar>
)

export default NavBar;
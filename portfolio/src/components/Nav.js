import React from 'react';
import classes from './Nav.module.css';

import { Route, Routes } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav} from 'react-bootstrap';
//Containers
import HomeContainer from '../containers/homeContainer';
import SkillsContainer from '../containers/skillsContainer';
import AboutContainer from '../containers/aboutContainer';
import Default from './Default'

const NavBar = () => {
    return(
        <>
            <Navbar className={classes.NavWrapper} variant="dark">
                <LinkContainer to='/' exact="true"><Navbar.Brand className={classes.Brand}>Mile High Coding</Navbar.Brand></LinkContainer>
                <Nav className={classes.NavLink} >
                    <LinkContainer to='/' exact="true"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to='/skills' ><Nav.Link>Skills</Nav.Link></LinkContainer>
                    <LinkContainer to='/about' ><Nav.Link>About Me</Nav.Link></LinkContainer>
                    <LinkContainer to='/jobs' ><Nav.Link>Job History</Nav.Link></LinkContainer>
                    <LinkContainer to='/projects' ><Nav.Link>Projects</Nav.Link></LinkContainer>
                    <LinkContainer to='/contact' ><Nav.Link>Contact Me</Nav.Link></LinkContainer>
                </Nav>
            </Navbar>
            <Routes>
                <Route path="/" exact="true" element={<HomeContainer/>}/>
                <Route path="/skills" element={<SkillsContainer/>}/>
                <Route path="/about" element={<AboutContainer/>}/>
                <Route path="/jobs" element={null}/>
                <Route path="/projects" element={null}/>
                <Route path="/contact" element={null}/>
                <Route element={Default}/>
            </Routes>
        </>
    ) 
}

export default NavBar;
import React, {Component} from 'react';
import {Button, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import classes from './homeContainer.module.css';

class HomeContainer extends Component {
    render() {
        return(
            <Container fluid="true" className={classes.content}>
                <Row>
                    <h1 className={classes.heading}>Ethan Gruenemeier's Portfolio</h1>
                    <hr/>
                    <Col>
                        <p>
                            This site acts as an online resume and includes many examples of projects that
                            I have created over the course of my education. Please have a look around and feel
                            free to contact me by clicking the button below.
                        </p>
                        <p>
                            Ipsum in sunt tempor magna magna est ea do eu fugiat ex. Non exercitation proident deserunt irure laborum deserunt et dolor est nisi.
                            Duis aliqua excepteur adipisicing ullamco velit. Est in ex aliqua dolor qui amet voluptate exercitation commodo et non amet voluptate consectetur.
                            Minim adipisicing consectetur consequat excepteur. Ipsum in sunt tempor magna magna est ea do eu fugiat ex. Non exercitation proident deserunt irure laborum deserunt et dolor est nisi.
                            Duis aliqua excepteur adipisicing ullamco velit. Est in ex aliqua dolor qui amet voluptate exercitation commodo et non amet voluptate consectetur.
                            Minim adipisicing consectetur consequat excepteur.
                        </p>
                        <LinkContainer to="/contact" className="d-grid"><Button variant="primary">Contact Me</Button></LinkContainer>
                    </Col>
                    <Col>
                        <img fluid="true" src="https://picsum.photos/id/100/600/280" alt="placeholder" />
                        <p>Here is a download link if you would like a PDF of my resume.</p>
                        <LinkContainer className="d-grid" to="/download"><Button variant="primary">Download</Button></LinkContainer>
                    </Col>
                </Row>   
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>
                            
                    </Col>
                </Row>
            </Container>
        )
    }
    
}

export default HomeContainer;
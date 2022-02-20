import React, {Component} from 'react';
import {Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import classes from './homeContainer.module.css';

class HomeContainer extends Component {
    render() {
        return(
            <Container fluid="true" className={classes.content}>
                <br/>
                <Row>
                    <Card>
                        <Card.Img src="https://picsum.photos/id/100/850/270" alt="Card image" />
                        <Card.ImgOverlay className={classes.overlay}>
                            <Card.Title className={classes.heading}><h1>Ethan Gruenemeier's Portfolio</h1></Card.Title>
                            <Card.Text>
                                This site acts as an online resume and includes many examples of projects that
                                I have created over the course of my education. Please have a look around and feel
                                free to contact me by clicking the button below.
                            </Card.Text>
                            <LinkContainer to="/contact"><Button>Contact Me</Button></LinkContainer>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <CardGroup>
                            <Card className={classes.cards}>
                                <Card.Img variant="top" src="https://picsum.photos/id/121/200/140" />
                                <Card.Body>
                                    <Card.Title>Front End/React Development</Card.Title>
                                    <hr/>
                                    <Card.Text>
                                        Front End Web Development is one my main passions and I first started
                                        web development at the age of 16. I started learning basic HTML and CSS,
                                        then dove into learning vanilla JavaScript. I now spend most of my time developing
                                        with the library called ReactJS. Learn more about my React projects by clicking the
                                        button below.
                                    </Card.Text>
                                    <LinkContainer to="projects" ><Button variant="primary">Learn More</Button></LinkContainer>
                                </Card.Body>
                            </Card> 
                            <Card className={classes.cards}>
                                <Card.Img variant="top" src="https://picsum.photos/id/189/200/140" />
                                <Card.Body>
                                    <Card.Title>Mobile App Development</Card.Title>
                                    <hr/>
                                    <Card.Text>
                                        My first experience with development came when I was 12 years old.
                                        I started out by using MIT app inventor to create simple android applications.
                                        This website allows you to use a visual based programming language to design and
                                        build applications. Learn more about my android applications by clicking the button below.
                                    </Card.Text>
                                    <LinkContainer to="projects" ><Button variant="primary">Learn More</Button></LinkContainer>
                                </Card.Body>
                            </Card>
                            <Card className={classes.cards}>
                                <Card.Img variant="top" src="https://picsum.photos/id/190/200/140" />
                                <Card.Body>
                                    <Card.Title>3D Printing/Hardware Projects</Card.Title>
                                    <hr/>
                                    <Card.Text>
                                        While I have always enjoyed development, I've often added a hardware side
                                        to a lot of my projects. Starting from a young age I started using Raspberry Pi's
                                        to build various hardware projects. I would also use 3d printing technologies to 
                                        further develop these projects. Learn more about my hardware projects by clicking the button below.
                                    </Card.Text>
                                    <LinkContainer to="projects" ><Button variant="primary">Learn More</Button></LinkContainer>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
                <br/>
            </Container>
        )
    } 
}

export default HomeContainer;
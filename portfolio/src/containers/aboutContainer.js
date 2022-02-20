import React, { Component } from 'react';
import { Col, Container, Row, Card, Button, CardGroup } from 'react-bootstrap';
import classes from './aboutContainer.module.css';

class AboutContainer extends Component {
    render() {
        return(
            <Container className={classes.content}>
                <Row>
                    <h1>About Me</h1>
                    <hr/>
                    <Col>
                        <p>
                            Hello! My name is Ethan Gruenemeier and I am a current coding student
                            learning HTML, CSS, and Javascript. I currently live in Peoria Arizona
                            and attend Liberty High School along with West-Mec. I was born in Arizona
                            and have always lived here. I live with my parents, my older sister, and my
                            younger brother. I have always had an immense passion for coding and I hope
                            to one day get a job in the software development field. Since I was 12 years old
                            I have been messing around coding and programming. The very first project I
                            attempted was an app that I made in MIT app inventor.
                        </p>
                        <h2>Coursework</h2>

                    </Col>
                    <Col>
                        <h2>Education</h2>
                        <CardGroup>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/121/200/140" />
                                <Card.Body>
                                    <Card.Title>Northern Arizona University</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card> 
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://picsum.photos/id/189/200/140" />
                                <Card.Body>
                                    <Card.Title>Liberty High School/West-MEC</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutContainer;
import React, { Component } from 'react';
import { Container, Row, Col, Accordion, ProgressBar } from 'react-bootstrap';
import classes from './skillsContainer.module.css';

class SkillsContainer extends Component {
    render() {
        return (
            <Container className={classes.content}>
                <Row>
                    <h1>Skills</h1>
                        <hr/>
                    <Col>
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Critical Thinking</Accordion.Header>
                                <Accordion.Body>
                                    Using logic and reasoning to identify the strengths and weaknesses
                                    of alternative solutions, conclusions or approaches to problems.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Programming</Accordion.Header>
                                <Accordion.Body>
                                    Writing computer programs for various purposes.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Complex Problem Solving</Accordion.Header>
                                <Accordion.Body>
                                    Identifying complex problems and reviewing related information
                                    to develop and evaluate options and implement solutions.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Active Learning</Accordion.Header>
                                <Accordion.Body>
                                    Understanding the implications of new information for both current
                                    and future problem-solving and decision-making.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Systems Analysis</Accordion.Header>
                                <Accordion.Body>
                                    Determining how a system should work and how changes in conditions, operations,
                                    and the environment will affect outcomes.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className="">
                        <h5>JavaScript</h5>
                        <br/>
                        <ProgressBar striped variant="success" now={95} />
                        <br/>
                        <h5>ReactJS</h5>
                        <br/>
                        <ProgressBar striped variant="info" now={80} />
                        <br/>
                        <h5>Python</h5>
                        <br/>
                        <ProgressBar striped variant="warning" now={50} />
                        <br/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SkillsContainer;
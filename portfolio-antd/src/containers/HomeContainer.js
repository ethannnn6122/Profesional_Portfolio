import React, { Component } from 'react';
import { Carousel, Row, Col, Card, Button, Divider } from 'antd';
import { Link }from 'react-router-dom';

import classes from './HomeContainer.module.css';

class HomeContainer extends Component {
    render() {
        return(
            <>
                <Carousel autoplay effect='fade'>
                    <div>
                        <h2 className={classes.contentStyle}>Ethan Gruenemeier</h2>
                    </div>
                    <div>
                        <h3 className={classes.contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 className={classes.contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 className={classes.contentStyle}>4</h3>
                    </div>
                </Carousel>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card size="small" title="Front End/React Development" 
                            cover={<img alt="example" src="https://picsum.photos/300" />}
                            bordered={false}>
                            Front End Web Development is one my main passions and I first started web
                            development at the age of 16. I started learning basic HTML and CSS, then
                            dove into learning vanilla JavaScript. I now spend most of my time developing
                            with the library called ReactJS. Learn more about my React projects by clicking
                            the button below.
                            <Divider />
                            <Link to="/projects"><Button>Learn More</Button></Link>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="Mobile App Development" 
                            cover={<img alt="example" src="https://picsum.photos/300" />}
                            bordered={false}>
                            My first experience with development came when I was 12 years old.
                            I started out by using MIT app inventor to create simple android applications.
                            This website allows you to use a visual based programming language to design
                            and build applications. Learn more about my android applications by clicking
                            the button below.
                            <Divider />
                            <Link to="/projects"><Button>Learn More</Button></Link>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card size="small" title="3D Printing/Hardware Projects" 
                            cover={<img alt="example" src="https://picsum.photos/300" />}
                            bordered={false}>
                            While I have always enjoyed development, I've often added a hardware side to a
                            lot of my projects. Starting from a young age I started using Raspberry Pi's
                            to build various hardware projects. I would also use 3d printing technologies
                            to further develop these projects. Learn more about my hardware projects by
                            clicking the button below.
                            <Divider />
                            <Link to="/projects"><Button>Learn More</Button></Link>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default HomeContainer;
import React, { Component } from 'react';
import { Container , Col , Image } from 'react-bootstrap';
import './About.scss';


class About extends Component {
    render() {
        return (
            <div>
                <Image src ='assets/dog-people.jpg' className = 'header-image' />
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                     <Image src = 'assets/person-1.jpg' className = 'about-profile-pic' rounded />
                      <h3>Frank The Tank</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu ac tortor. 
                         Eu augue ut lectus arcu bibendum at. Tellus elementum sagittis vitae et.
                         Ultricies leo integer malesuada nunc vel risus. Accumsan lacus vel facilisis
                         volutpat est velit egestas. Eu tincidunt tortor  </p>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default About;
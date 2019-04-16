import React, { Component } from 'react';
import './News.scss';
import { Container , Row , Col , Image } from 'react-bootstrap';
import { Manager } from 'react-popper';

class News extends Component {
    render() {
        return (
            <div>
                <Image src = 'assets/mountain-man.jpg' className = 'header-image' />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm = {8} className ="main-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu ac tortor. 
                         Eu augue ut lectus arcu bibendum at. Tellus elementum sagittis vitae et.
                         Ultricies leo integer malesuada nunc vel risus. Accumsan lacus vel facilisis
                         volutpat est velit egestas. Eu tincidunt tortor Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu </p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu ac tortor. 
                         Eu augue ut lectus arcu bibendum at. Tellus elementum sagittis vitae et.
                         Ultricies leo integer malesuada nunc vel risus. Accumsan lacus vel facilisis
                         volutpat est velit egestas. Eu tincidunt tortor Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu </p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu ac tortor. 
                         Eu augue ut lectus arcu bibendum at. Tellus elementum sagittis vitae et.
                         Ultricies leo integer malesuada nunc vel risus. Accumsan lacus vel facilisis
                         volutpat est velit egestas. Eu tincidunt tortor Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu </p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu ac tortor. 
                         Eu augue ut lectus arcu bibendum at. Tellus elementum sagittis vitae et.
                         Ultricies leo integer malesuada nunc vel risus. Accumsan lacus vel facilisis
                         volutpat est velit egestas. Eu tincidunt tortor Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu </p>
                        </Col>
                        <Col xs = {12} sm ={4} className = "sidebar-section">
                        <Image src ='assets/dog-people.jpg' />
                        <p>Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcu Fringilla urna porttitor rhoncus dolor purus non enim. 
                         Lacus laoreet non curabitur gravida arcused do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Fringilla urna porttitor rhoncus dolor purus non enim.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default News;
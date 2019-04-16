import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron , Container , Row , Col , Image , Button} from 'react-bootstrap';
import './Home.scss';


class Home extends Component {
    render() {
        return (
        <Container>
            <Jumbotron>
                <h2>Welcome to our Website</h2>
                <p>This Website Just a Sample with React , React-Router and React-Bootstrap</p>
                <Link to = '/about'>
                  <Button variant = 'outline-info'>About</Button>
                </Link>
            </Jumbotron>
            <Row className = 'show-grid text-center'>
              <Col xs = {12} sm = {4} className ='person-wrapper'>
               <Image src = 'assets/person-1.jpg'  roundedCircle className = 'profile-pic' />
               <h4>Frank</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </Col>
              <Col xs = {12} sm = {4} className ='person-wrapper'>
               <Image src = 'assets/person-2.jpg'  roundedCircle className = 'profile-pic' />
               <h4>Sara</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </Col>              <Col xs = {12} sm = {4} className ='person-wrapper'>
               <Image src = 'assets/person-3.jpg'  roundedCircle className = 'profile-pic' />
               <h4>John</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
              </Col>
            </Row>
        </Container>
        );
    }
}

export default Home;
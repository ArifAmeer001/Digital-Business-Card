import './App.css';
import Particlebg from './components/particles';
import { Container, Row, Col, Button, Link } from 'bootstrap-4-react';

function App() {
  return (
    <>
    <Container>
    <Row justifyContent='center' row=''>
      <Col col='md-4 sm-10' className='card'>
      <Particlebg/><br/>
      <img src='./assets/arif.png' className='w-50 pb-3 card-img mask'></img>
      <Row justifyContent='center'>
        <h2>Arif Ameer Hussain</h2>
        <h5>Juinor Front-End Developer</h5>
      </Row>
      <Row className='pb-2 my-3'>
        <Col className='icon-box'>
          <Button className='btn btn-primary'>
            <img src='./assets/Email-logo.png' className='pr-3 icon'></img><span>Email</span>
          </Button>
        </Col>
        <Col className='icon-box'>
        <Button onclick="location.href = 'https://www.linkedin.com/in/arifameerhussain/';" className='btn btn-primary'>
          
            <img src='./assets/Linkedin-logo.png' className='pr-3 icon-2'></img><span>LinkedIn</span>
          </Button>
        </Col>
      </Row>
      <Row className='px-4 py-4 mx-2 mt-3 desc'>
        <h4>Anout</h4>
        <p>I am a Fronend-End Developer, with an interests in REACT. 
          I prefer to keep things simple and realistic, rather than exaggerate them.
        </p>
      </Row>
      <Row className='px-4 py-4 mx-2 my-4 desc '>
        <h4>Interests</h4>
        <p>I have interests in different technologies including React, React Native, Flutter, 
          Node, Express, FireBase.
        </p>
      </Row>
      <Row justifyContent='center' bg='dark' className='py-2'>
        <button className='btn btn-dark mx-2'><img src='./assets/GitHub-logo.png' className='icon footer'></img></button>
        <button className='btn btn-primary mx-2'><img src='./assets/Linkedin-logo.png' className='icon-2'></img></button>
        <button className='btn btn-dark mx-2'><img src='./assets/Twitter-logo.png' className='icon footer'></img></button>
      </Row>
      </Col>
    </Row>
    </Container>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, Row, NavItem, Image, Button, Col } from 'react-bootstrap';
import { Link, Paragraph } from 'react-bootstrap-icons';
import obslarge from './obslarge.png';
import logo from './65011256.png';
import appStore from './Download_on_the_App_Store_Badge.svg.png';
import playStore from './en_badge_web_generic.png';
import { Twitter } from "react-bootstrap-icons";



const Header = () => (
  <Navbar variant="dark" expand="lg" className="d-flex flex-wrap py-3 mb-4 border-bottom sticky-top header-colors">

    <Row className="container-fluid">
      <Col>
        <Container className="justify-content-start navbar-nav" fluid>
          <Navbar.Brand href="#" className="fs-4 obslogo justify-content-start navbar-nav">
            <Image alt="Logo" src={logo} className="d-inline-block align-top"/>{' '}
            OBSIDIAN</Navbar.Brand>
        </Container>
      </Col>
      <Col>
        <Container className="justify-content-end flex-row navbar-nav" fluid>
          <Nav className="justify-content-end nav-pills nav px-5 navbar-nav">
            <Nav.Link href="#" className="px-2 item-colors"><Twitter/></Nav.Link>
            <Nav.Link href="#" className="item-colors">Pricing</Nav.Link>
            <Nav.Link href="#" className="item-colors">Mobile</Nav.Link>
            <Nav.Link href="#" className="item-colors">Plugins</Nav.Link>
            <Nav.Link href="#" className="item-colors">Sync</Nav.Link>
            <Nav.Link href="#" className="item-colors">Publish</Nav.Link>
            <Nav.Link href="#" className="item-colors">Community</Nav.Link>
            <Nav.Link href="#" className="item-colors">Account</Nav.Link>
          </Nav>
        </Container>
      </Col>
    </Row>


  </Navbar>
);


const Body = () => (
  <Container className="text-white spacer container-fluid">
    <h1 className="text-center">
      A second brain,
      <br></br>
        for you, forever.
    </h1>
    <Container className="pt-3 fs-4 text-center item-colors">
      <p>
        Obsidian is a powerful <span className="span-style">knowledge</span> base on top of
        <br></br>
        a <span className="span-style">local folder</span> of plain Markdown files.
      </p>
    </Container>
    <Container className="text-center pt-4">
      <Button variant="purple" className="btn btn-lg">
        Get Obsidian for Linux (AppImage)
        <br></br>
        <span className="fs-5 item-colors">Version 0.15.9</span>
      </Button>
    </Container>
    <Container className="text-center text-gray pt-2 item-colors">
      <p>
        Also available for <span className="span-style">Windwows</span>, <span className="span-style">MacOS</span>, <span className="span-style">Linux(Snap)</span>, and <span className="span-style">Linux(Flatpak)</span>. <span className="span-style">More Platform</span>.
      </p>
    </Container>

    <Container className="pt-3">
      <Row>
        <Col>
          <Image className="float-end" src={appStore}></Image>
        </Col>
        <Col>
          <Image src={playStore}></Image>
        </Col>
      </Row>
    </Container>



  </Container>

);

const Footer = () => (
  <Container>
    <Container className="list-unstyled footer">
      <Row className="g-0 footrow">
        <Col className="col-margins">
          <li className="fme">Obsidian</li>
          <li>About Us</li>
          <li>Roadmap</li>
          <li>Merch Store</li>
        </Col>
        <Col className="col-margins">
          <li className="fme">Help</li>
          <li>Documentation</li>
          <li>FAQ</li>
          <li>Release notes</li>
        </Col>
        <Col className="col-margins">
          <li className="fme">Community</li>
          <li>Twitter</li>
          <li>Community Discord</li>
          <li>Forum</li>
        </Col>
        <Col className="col-2 col-margins">
          <li className="fme">Spread the Word</li>
          <li>Featured on Product Hunt</li>
          <li>Like us on AlternateTo</li>
          <li>Review us on Capterra</li>
          <li>Like us on Slant</li>
        </Col>
        <Col className="col-2 col-margins">
          <li className="fme">Legal</li>
          <li>License information (EULA)</li>
          <li>Terms of Service</li>
          <li>Privacy statement / Privacy Policy</li>
        </Col>
      </Row>
    </Container>
    <Container className="copyright">
      <span class="footer">© 2022 Obsidian</span>
    </Container>
  </Container>
);

const ObsidianReact = () => (
  <>
    <Header/>
    <Body/>
    <div className="pt-5 photo-center">
      <img className="img-screenshot align-items-center" src={obslarge} alt="Obsidian Example"></img>
    </div>
    <Footer/>
  </>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ObsidianReact />);
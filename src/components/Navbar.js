import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Finaltoggle from '.././ThemeProvider.js';
import { useTranslation } from 'react-i18next';

function FinalNavbar() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">{t('navbar.brand')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{t('navbar.home')}</Nav.Link>
            <NavDropdown title={t('navbar.pages.title')} id="basic-nav-dropdown">
              <NavDropdown.Item href="/Login">{t('navbar.pages.login')}</NavDropdown.Item>
              <NavDropdown.Item href="/Register">{t('navbar.pages.register')}</NavDropdown.Item>
              <NavDropdown.Item href="/Main">{t('navbar.pages.main')}</NavDropdown.Item>
              <NavDropdown.Item href="/Report">{t('navbar.pages.report')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            <Finaltoggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FinalNavbar;

import './App.css';
import { FaWhatsapp } from 'react-icons/fa';

import ScrollToTop from "./socrool";
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Plankote from './pages/Services/Plankote';
import ImarBarisi from './pages/Services/Imar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Altyapi from './pages/Services/Altyapi';
import Aplikasyon from './pages/Services/Aplikasyon';
import Deformasyon from './pages/Services/Deformasyon';
import Tevhid from './pages/Services/Tevhid';
import Fenni from './pages/Services/Fenni';
import Kamu from './pages/Services/Kamu';
import Hacim from './pages/Services/Hacim';
import Terk from './pages/Services/Terk';
import Betornarme from './pages/Services/Betonarme';
import Yolprofil from './pages/Services/Yolprofi';
import Vaziyet from './pages/Services/Vaziyet';
import Maden from './pages/Services/Maden';
import Anahtar from './pages/Services/Anahtar';
import Konut from './pages/Services/Konut';
import Mimari from './pages/Services/Mimari';
import Celikproje from './pages/Services/Celikproje';
import Kamuproje from './pages/Services/Kamuproje';
import Cevre from './pages/Services/Cevre';
import Taahut from './pages/Services/Taahut';
import Footer from '../src/components/Footer/Footer';
import N from '../src/utils/images/N.svg'
import Hizmet from './pages/Hizmet/Hizmet';
import Drone from './pages/Services/Drone';
import Sayisalyapi from './pages/Services/Sayisalyapi';
import Imarplani from './pages/Services/Imarplani';
import Madde18 from './pages/Services/Madde18';



function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className='position-absolute w-100 ' style={{ backgroundColor: '#000' }}>
        <Container className="d-flex align-items-center">
          <Navbar.Brand className="d-flex align-items-center" style={{ height: '70px' }}>
            <Link to="/" className="d-flex align-items-center">
              <img
                src={N}
                alt="Logo"
                style={{
                  height: '106px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'invert(100%)'
                }}
              />
            </Link>
          </Navbar.Brand>



          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100 align-items-center'>

              <Nav.Link href='/' className='text-uppercase text-white'>Anasayfa</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase text-white'>Hakkımızda</Nav.Link>
              <Nav.Link href='/hizmet' className='text-uppercase text-white'>HİZMETLER</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase text-white'>İLETİŞİM</Nav.Link>

              {/* Telefon ve E-mail */}
              <div className="d-flex gap-3 ms-3">
                <a href="tel:05068071231" className="d-flex align-items-center gap-1 text-white text-decoration-none">
                  <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "#dc3545" }} />
                  0506 807 12 31
                </a>
                <a href="mailto:simalharita@gmail.com" className="d-flex align-items-center gap-1 text-white text-decoration-none">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: "#dc3545" }} />
                  simalharita@gmail.com
                </a>
              </div>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      {/* Routes */}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hizmet' element={<Hizmet />} />
        <Route path='/services/plankote' element={<Plankote />} />
        <Route path='/services/imar' element={< ImarBarisi />} />
        <Route path='/services/altyapi' element={< Altyapi />} />
        <Route path='/services/aplikasyon' element={< Aplikasyon />} />
        <Route path='/services/deformasyon' element={< Deformasyon />} />
        <Route path='/services/tevhid' element={< Tevhid />} />
        <Route path='/services/fenni' element={< Fenni />} />
        <Route path='/services/kamu' element={< Kamu />} />
        <Route path='/services/hacim' element={< Hacim />} />
        <Route path='/services/terk' element={< Terk />} />
        <Route path='/services/betonarme' element={< Betornarme />} />
        <Route path='/services/yolprofil' element={< Yolprofil />} />
        <Route path='/services/vaziyet' element={< Vaziyet />} />
        <Route path='/services/maden' element={< Maden />} />
        <Route path='/services/anahtar' element={< Anahtar />} />
        <Route path='/services/konut' element={< Konut />} />
        <Route path='/services/mimari' element={< Mimari />} />
        <Route path='/services/celikproje' element={< Celikproje />} />
        <Route path='/services/kamuproje' element={< Kamuproje />} />
        <Route path='/services/cevre' element={< Cevre />} />
        <Route path='/services/taahut' element={< Taahut />} />
        <Route path='/services/drone' element={< Drone />} />
        <Route path='/services/sayisalyapi' element={< Sayisalyapi />} />
        <Route path='/services/imarplani' element={< Imarplani />} />
        <Route path='/services/madde18' element={< Madde18 />} />
      </Routes>


      <a
        href="https://wa.me/905319244992?text=Merhaba,"
        target='_blank' className='btn-whatsapp'
      >
        <FaWhatsapp size={45} color="#25D366" />
      </a>


      <Footer />

    </div>
  );
}

export default App;

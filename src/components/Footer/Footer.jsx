import React from 'react'

import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import N from '../../utils/images/N.svg'

function Footer() {
    return (
        <>

            {/* Footer */}
            <footer className="footer-bg pt-5 " style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">

                        {/* Hakkımızda / Logo */}
                        <div className="col-lg-4 mb-3 d-flex justify-content-center">
                            <div className="mt-0 text-center">
                                <div >
                                    <Link to="/" className="d-flex justify-content-center">
                                        <img
                                            src={N}
                                            alt="Logo"
                                            style={{
                                                height: '106px',
                                                width: 'auto',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Link>
                                </div>
                                <p>
                                    1998 yılında Erol Demirtaş ve Hasan Aytekin tarafından Tekirdağ ili Çorlu ilçesinde faaliyetine başlamış olan firmamız, en büyük gücünü sabırlı, kararlı ve istikrarlı duruşundan almaktadır. Günümüzde İstanbul ili tüm ilçelerinde hizmet vermeye devam etmektedir.
                                </p>
                                <ul className="social-icons list-unstyled d-flex justify-content-center gap-3">
                                    <li>
                                        <a href="https://www.facebook.com/simalharita" style={{ color: "#000", textDecoration: "none" }}>
                                            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "24px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/simalharita" style={{ color: "#000", textDecoration: "none" }}>
                                            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "24px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com/simalharita" style={{ color: "#000", textDecoration: "none" }}>
                                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tr.linkedin.com/simalharita" style={{ color: "#000", textDecoration: "none" }}>
                                            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "24px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" style={{ color: "#000", textDecoration: "none" }}>
                                            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "24px" }} />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        {/* Site İçi Bağlantılar */}
                        <div className="col-lg-4 mb-3 ">
                            <h3 className="head-after">SİTE İÇİ BAĞLANTILAR</h3>
                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-lg-6">

                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="/" style={{ color: "black", textDecoration: "none", display: "block", margin: "5px 0" }}>
                                                    <FontAwesomeIcon icon={faAngleRight} /> Anasayfa
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/about" style={{ color: "black", textDecoration: "none", display: "block", margin: "5px 0" }}>
                                                    <FontAwesomeIcon icon={faAngleRight} /> Hakkımızda
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/hizmet" style={{ color: "black", textDecoration: "none", display: "block", margin: "5px 0" }}>
                                                    <FontAwesomeIcon icon={faAngleRight} /> Hizmetlerimiz
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/contact" style={{ color: "black", textDecoration: "none", display: "block", margin: "5px 0" }}>
                                                    <FontAwesomeIcon icon={faAngleRight} /> İletişim
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled">
                                            {/* Boş */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* İletişim Bilgileri */}
                        <div className="col-lg-4 mb-3">
                            <h3 className="head-after">İLETİŞİM BİLGİLERİ</h3>
                            <div className="mt-4 footer-contact">
                                <h5><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "red", marginRight: "5px" }} /> Adres</h5>
                                <p>Merkez Mah. Halitpaşa Cad. Gazi Center İş Merkezi No:29/102 Gaziosmanpaşa/İstanbul PK:34065</p>
                                <h5><FontAwesomeIcon icon={faPhoneAlt} style={{ color: "red", marginRight: "5px" }} /> Telefon</h5>
                                <p>0506 807 12 31</p>
                                <h5><FontAwesomeIcon icon={faEnvelope} style={{ color: "red", marginRight: "5px" }} /> E-Posta</h5>
                                <p>simalharita@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            {/* Sub-Footer */}

        </>
    )
}

export default Footer
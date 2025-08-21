import React, { useState } from 'react';
import './Home.css';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate ekledik



const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate(); // useNavigate hook'u

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    // Sayfaya yönlendikten sonra en üst kısma kaydırma fonksiyonu
    const handleCoursesClick = () => {
        navigate('/courses');
        window.scrollTo(0, 0); // Sayfa en üstüne kaydırma
    };

    return (
        <div className='home-page '>
            <header className=' text-light '>
                <div className='container d-flex flex-column align-items-center mt-5'>
                    <h1 className='text-center  '>
                        ŞİMAL HARİTA
                    </h1>
                    <h3>Harita Mühendislik Proje ve Uygulama Hizmetleri</h3>
                    <p className='text-center fs-5'>Deneyimli ekibimizle birlikte ihtiyacınıza uygun tüm haritacılık hizmetlerini vermekteyiz.</p><br />

                    <div className='d-flex flex-column flex-sm-row align-items-center'>

                        <Link to="/hizmet">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Tüm Hizmetlerimiz İçin</button>
                        </Link>
                        <Link to="/contact">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>İletişim İçin</button>
                        </Link>
                    </div>
                    {/*       <div className='container text-white text-center pt-5'>
                        <h3 className='text-center mb-3'>Bizi Takip Edin</h3>
                        <ul className='list-inline'>
                            <li className='list-inline-item me-4'>
                                <a href='https://www.facebook.com' className='link-light'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </a>
                            </li>
                            <li className='list-inline-item me-4'>
                                <a href='https://www.instagram.com' className='link-light'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg></a>
                            </li>

                            <li className='list-inline-item me-4'>
                                <a href="https://twitter.com" className="link-light" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.008-.422A6.673 6.673 0 0 0 16 3.542a6.533 6.533 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.381A3.323 3.323 0 0 1 .64 6.575v.041a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.02-.617-.058a3.283 3.283 0 0 0 3.066 2.28 6.588 6.588 0 0 1-4.862 1.356 9.29 9.29 0 0 0 5.034 1.475" />
                                    </svg>
                                </a>
                            </li>


                            <li className='list-inline-item me-4'>
                                <a href="https://youtube.com" className="link-light" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999c-1.978.01-3.951.043-5.922.123-.71.03-1.253.636-1.264 1.352C.85 5.986.835 7.981.835 7.981s-.015 1.995.03 3.507c.011.716.555 1.323 1.265 1.353 1.97.08 3.944.113 5.922.123 1.978-.01 3.951-.043 5.922-.123.71-.03 1.253-.636 1.264-1.352.045-1.512.03-3.507.03-3.507s.015-1.995-.03-3.507c-.011-.716-.555-1.323-1.264-1.353-1.97-.08-3.944-.113-5.922-.123zM6.545 10.568V5.412l4.181 2.578-4.181 2.578z" />
                                    </svg>
                                </a>
                            </li>

                            <li className='list-inline-item me-4'>
                                <a href="https://linkedin.com" className="link-light" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.473 0 16 .513 16 1.146v13.708c0 .633-.527 1.146-1.175 1.146H1.175C.527 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.244c.837 0 1.357-.554 1.357-1.247-.015-.707-.52-1.247-1.342-1.247-.822 0-1.356.54-1.356 1.247 0 .693.519 1.247 1.327 1.247h.014zm4.908 8.244V9.359c0-.207.015-.414.076-.562.166-.414.545-.844 1.181-.844.832 0 1.164.636 1.164 1.568v4.04h2.4V9.246c0-2.22-1.182-3.247-2.757-3.247-1.27 0-1.845.7-2.165 1.19v.026h-.014v-1.025h-2.4c.03.667 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                            </li>

                        </ul>

                    </div>*/}
                </div>
            </header>
            <div>
                <ChooseSection />
            </div>




        </div>
    )
}

export default Home;

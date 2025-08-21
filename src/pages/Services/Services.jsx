import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import plankote from '../../utils/images/plankoteölcü.webp';
import aplike from '../../utils/images/aplike.webp';
import imar from '../../utils/images/imarbarisi-min.webp';
import terk from '../../utils/images/yolaterk-min.webp';
import tevhid from '../../utils/images/ifraz-min.webp';
import vaziyet from '../../utils/images/vaziyetplani-min.webp';
import taahüt from '../../utils/images/taahhüt-min.webp';
import drone from '../../utils/images/drone-min.webp';
import kübaj from '../../utils/images/kübaj.webp';
import yol from '../../utils/images/yolprofil.webp';
import altyapi from '../../utils/images/altyapiölcüm-min.webp'
import deformasyon from '../../utils/images/deformasyon-min.webp'
import sayyapi from '../../utils/images/sayisalyapi-min.webp';
import fenni from '../../utils/images/fennimesuliyet-min.webp';
import kamu from '../../utils/images/kamulastirma-min.webp';
import yüksekkatli from '../../utils/images/yüksekkatli-min.webp'
import maden from '../../utils/images/maden-min.webp';
import anahtar from '../../utils/images/anahtarteslim-min.webp'
import konut from '../../utils/images/yapıkonutproje-min.webp';
import mimari from '../../utils/images/mimaristatik-min.webp';
import celik from '../../utils/images/celik-min.webp'
import kamuproje from '../../utils/images/kamuproje-min.webp';
import cevre from '../../utils/images/cevredüzenleme-min.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway, faBalanceScale, faBriefcase, faBucket, faChargingStation, faCity, faDungeon, faGem, faIndustry, faKey, faMapSigns, faObjectGroup, faRoad, faRoute, faRuler, faTextHeight, faUsers, faTasks, faDrumSteelpan, faClipboardList, faBuilding, faLeaf } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h2 className='text-center mb-5 mt-5 fw-bold'>TÜM HİZMETLERİMİZ</h2>
            </div>
            <div className='row g-4 mb-5 mt-3'>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/plankote" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={plankote}
                                        alt="Plankote Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Plankote Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Mimari projelerin daha doğru ve etkin bir şekilde tasarlanabilmesi için Harita Mühendisleri tarafınca değişik ölçme şekilleri ile hazırlanan ve altlık olarak
                                        <Link to="/services/plankote">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }} // sadece aşağı kaydırıyor
                                            >
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>


                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/imar" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={imar}
                                        alt="imar barisi Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        İmar Barışı Hizmeti
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        İmara aykırı, ruhsatsız veya ruhsat eklerine aykırı yapıların kayıt altına alınması kanalıyla bu yapılara
                                        <Link to="/services/imar">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/aplikasyon" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={aplike}
                                        alt="aplikasyon Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Aplikasyon Ölçümleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Aplikasyon; “Taşınmaza ait mülkiyet veya irtifak hakkı sınırlarının, tapu plânındaki data ve
                                        <Link to="/services/apliasyon">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/terk" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={terk}
                                        alt="Terk Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Yola Terk İşlemi
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Kamuya (yola) terk işlemi; bayındır planlarının gerçekleştirilmesi esnasında taşınmazın mal
                                        <Link to="/services/terk">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/tevhid" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={tevhid}
                                        alt="Tevhid Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        İfraz - Tevhid İşlemleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Parselin bölünerek ayrılması işlemi ifraz, parselleri birbirinden ayırmak ve arazi ile arsa düzenlemesine uygun olarak planla belirlenen<br />
                                        <Link to="/services/ifraz">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/vaziyet" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={vaziyet}
                                        alt="vaziyet Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Vaziyet ve Bağımsız Plan Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Vaziyet planı, bir projede bulunan inşaat alanındaki tüm varlıkların yerinin yayınlandıği ölçekli haritalara
                                        <Link to="/services/vaziyet">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/taahut" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={taahüt}
                                        alt="taahüt Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        İNŞAAT TAAHHÜT HİZMETLERİ
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Şirket adına hertürlü inşaat yapmak üzere arsa almak, inşaatları tamamlayıp satmak, arsa sahibi olan gerçek ve tüzel kişilerle anlaşmalar yapıp
                                        <Link to="/services/taahut">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/drone" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={drone}
                                        alt="drone Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        DRONE İLE ÖLÇÜM HİZMETLERİ
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        <br />  Drone, önceden belirlenen rotalar üzerinde otomatik uçuş yaparak yüksek çözünürlüklü görüntüler toplar. Bu süreçte, görüntüler arasında yeterli örtüşme sağlanır ve konum bilgileri kaydedilir. <br />
                                        <Link to="/services/drone">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/hacim" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={kübaj}
                                        alt="kübaj- Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Kübaj - Hacim Hesaplama İşlemi
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Kübaj; sıkışma, kabarma, depo işlemleri göz önünde tutularak yapılan toprak hesabıdır. öteki bir anlam olarak, bir malzemenin hacmini hesaplama

                                        <Link to="/services/hacim">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/sayisalyapi" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={sayyapi}
                                        alt="kübaj- Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        3 Boyutlu Sayısal Yapı Modeli (City GML)
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Kübaj; sıkışma, kabarma, depo işlemleri göz önünde tutularak yapılan toprak hesabıdır. öteki bir

                                        <Link to="/services/sayisalyapi">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/Yolprofil" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={yol}
                                        alt="yol Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Yol Profil Belirleme Ölçümleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Bir yol güzergahının etüdü yolun arazide nereden geçeceğinin araştırılmasıdır.Zorunlu iki noktayı birbirine bağlayacak güzergah sayısı <br />

                                        <Link to="/services/yolprofil">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>





                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/altyapi" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={altyapi}
                                        alt="altyapi Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Altyapı ve GIS Ölçümleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Coğrafi data Sistemleri (CBS) pek çok alanda olduğu benzer biçimde altyapı uygulamalarında da yoğun olarak kullanılmaktadır. Altyapı
                                        <Link to="/services/altyapi">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/deformasyon" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={deformasyon}
                                        alt="deformasyon Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Deformasyon Ölçümleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Deformasyon Ölçmeleri, mühendislik ölçmeleri içinde önemli bir yere ve konuma sahiptir. Gerek üzerinde yaşadığımız organik ortamda
                                        <Link to="/services/deformasyon">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>

                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/fenni" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={fenni}
                                        alt="fenni Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Fenni Mesuliyet Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Yapının yürürlükteki kanun, imar planı, ilgili tüzük ve yönetmelik hükümleri, Türk Standartları Enstitüsü standartları, bilimsel kurallar, teknik şartnameler
                                        <Link to="/services/fenni">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/kamu" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={kamu}
                                        alt="kamu Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Kamulaştırma Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Kamu yararının gerektirdiği hallerde gerçek ve özel hukuk tüzel kişilerinin mülkiyetinde bulunan taşınmazların, kaynakların ve irtifak haklarının <br /><br />
                                        <Link to="/services/kamu">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/betonarme" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={yüksekkatli}
                                        alt="yüksekkatli Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Yüksek Katlı Betonarme Ölçüm Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Firmamız, yüksek katlı binalarda betonarme yada çelik yapılarla ilgili akla gelebilecek bütün ölçümleri,
                                        <Link to="/services/betonarme">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/maden" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={maden}
                                        alt="maden Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Maden ve Taşocağı Ölçüm Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Endüstrinin en önemli ayaklarından birisi olan maden sahası denetimleri ve ölçümleri Şimal Harita firmasının hizmet yelpazesi içinde <br />
                                        <Link to="/services/maden">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/anahtar" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={anahtar}
                                        alt="anahtar Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Anahtar Teslim İnşaat Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Gerek uzun vadeli yatırımlar, gerekse krediler aracılığıyla ev satın almak, her ne olursa olsun, dikkat ve özen gerektiren bir süreci ifade  <br /><br />
                                        <Link to="/services/anahtar">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/konut" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={konut}
                                        alt="konut Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Yapı ve Konut Projeleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        İnsanların, hayvanları ve bitkilerin ihtiyaçlarını karşılamak için çeşitli yapı malzemeleri ile inşaa edilen tesislere yapı denir. Yapılar içerisindekileri
                                        <Link to="/services/konut">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/mimari" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={mimari}
                                        alt="mimari Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Mimari , Statik Proje ve Ruhsatlandırma Hizmetleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Yapı ruhsatı için istenen belgeler arasında mimari proje de yer almaktadır. Peki, mimari proje nedir?
                                        <Link to="/services/mimari">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/celikproje" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={celik}
                                        alt="celik Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Çelik Konstrüksiyon Projeleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Çelik Konstrüksiyon tercih edilmesinin en büyük nedeni deprem bölgesinde bulunan yerlerde dayanıklılığın en üst seviyelerde <br />
                                        <Link to="/services/celikproje">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/kamuproje" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={kamuproje}
                                        alt="kamuproje Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Kamu Projeleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanununda“düzenleyici ve denetleyici kurum” olarak ifade edilen, günlük dilde ise <br />
                                        <Link to="/services/kamuproje">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>
                <div className='col-lg-4'>
                    <Card className='d-flex align-items-center text-center card-custom p-3'>
                        <a href="services/cevre" className='text-decoration-none text-dark w-100'>
                            <div className='pt-3 pb-3'>
                                <div className='mb-3'>
                                    <img
                                        className="img-fluid rounded"
                                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        src={cevre}
                                        alt="cevre Hizmetleri"
                                    />
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title as="h3" className='mb-2 fw-bold fs-5'>
                                        Çevre Düzenlemeleri
                                    </Card.Title>
                                    <Card.Text className='mb-0 fs-6'>
                                        Doğa, planlama ve tasarım ögelerini sistemli bir şekilde analiz yapan peyzaj mimarlığı, sanat, bilim, mühendislik ve teknolojiyi bir araya getirerek alan
                                        <Link to="/services/cevre">
                                            <button
                                                type='button'
                                                className='btn btn-danger btn-sm mx-0 mx-sm-2 my-2 my-sm-0'
                                                style={{ position: 'relative', top: '15px' }}>
                                                Devamı için
                                            </button>
                                        </Link>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </a>
                    </Card>
                </div>




            </div>


        </div>
    )
}

export default Services;







<div className='col-lg-4'>
    <Card className='d-flex align-items-center h-100 text-center card-custom'>
        <Link to="/services/plankote" className='text-decoration-none text-dark w-100'>
            <div className='pt-5 pb-5'>
                <div className='mb-4'>
                    <FontAwesomeIcon icon={faTextHeight} size="5x" />
                </div>
                <Card.Body>
                    <Card.Title as="h3" className='mb-3 fw-bold'>
                        Plankote Hizmetleri
                    </Card.Title>
                    <Card.Text className='mb-0'>
                        Mimari projelerin daha doğru ve etkin bir şekilde tasarlanabilmesi için Harita Mühendisleri tarafınca değişik ölçme şekilleri ile hazırlanan ve altlık olarak kullanılan ...
                    </Card.Text>
                </Card.Body>
            </div>
        </Link>
    </Card>
</div>



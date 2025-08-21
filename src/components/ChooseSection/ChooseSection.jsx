import React from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway, faBalanceScale, faBriefcase, faBucket, faChargingStation, faCity, faDungeon, faGem, faIndustry, faKey, faMapSigns, faObjectGroup, faRoad, faRoute, faRuler, faTextHeight, faUsers, faTasks, faDrumSteelpan, faClipboardList, faBuilding, faLeaf } from '@fortawesome/free-solid-svg-icons';
import Services from '../../pages/Services/Services';

function ChooseSection() {
    return (



        <div className='row g-3 mb-5 mt-3 py-3 justify-content-center'>
            <div className='col-12 col-sm-6 col-lg-3 d-flex'>
                <Card className='d-flex flex-column align-items-center border-0 h-100'>
                    <div className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#0d6efd" className="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                            <path d="M4 .5a.5.5 0 0 1 .5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5A1.5 1.5 0 0 1 14.5 2.5v11A1.5 1.5 0 0 1 13 15h-10A1.5 1.5 0 0 1 1.5 13.5v-11A1.5 1.5 0 0 1 3 1H4V.5a.5.5 0 0 1 .5-.5zM1 4v9.5a.5.5 0 0 0 .5.5H13.5a.5.5 0 0 0 .5-.5V4H1zm10.354 3.354a.5.5 0 0 0-.708-.708L8.5 9.793 7.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        </svg>
                    </div>
                    <Card.Body>
                        <Card.Title as="h3" className='text-center text-capitalize mb-3 fw-bold'>
                            Planlı ve Programlı Hizmet
                        </Card.Title>
                        <Card.Text className='text-center'>
                            Hizmetlerimizi sizlerle kararlaştırdığımız gün ve saat içinde gerçekleştiriyoruz.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='col-12 col-sm-6 col-lg-3 d-flex'>
                <Card className='d-flex flex-column align-items-center border-0 h-100'>
                    <div className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#0d6efd" className="bi bi-shield-check-fill" viewBox="0 0 16 16">
                            <path d="M8 0c-.69 0-1.38.128-2.04.375L2 2.5V8c0 5.25 3.906 7.998 6 8 2.094-.002 6-2.75 6-8V2.5l-3.96-2.125A7.32 7.32 0 0 0 8 0zm3.146 5.854a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 9.293l3.646-3.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </div>
                    <Card.Body>
                        <Card.Title as="h3" className='text-center text-capitalize mb-3 fw-bold'>
                            Garanti Veriyoruz
                        </Card.Title>
                        <Card.Text className='text-center'>
                            Sunulan hizmetlerin arkadasındayız. Her konuda destek ve garanti veriyoruz.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className='col-12 col-sm-6 col-lg-3 d-flex'>
                <Card className='d-flex flex-column align-items-center border-0 h-100'>
                    <div className='mt-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#0d6efd" viewBox="0 0 16 16">
                            <path d="M15.828.172a.5.5 0 0 0-.707 0L.172 15.121a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0L16.242 1.586a.5.5 0 0 0 0-.707l-.414-.414zM1.5 14.5l12-12 .707.707-12 12L1.5 14.5zm3-3l1-1 .707.707-1 1-.707-.707zm2-2l1-1 .707.707-1 1-.707-.707zm2-2l1-1 .707.707-1 1-.707-.707z" />
                        </svg>
                    </div>
                    <Card.Body>
                        <Card.Title as="h3" className='text-center text-capitalize mb-3 fw-bold'>
                            Yüksek Teknoloji
                        </Card.Title>
                        <Card.Text className='text-center'>
                            Hizmetlerimizi en gelişmiş teknoloji ile sağlıyoruz.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>



    )
}

export default ChooseSection;
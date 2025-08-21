import React from 'react';
import nebu from '../../utils/images/homeimg.webp'
function About() {
    return (
        <div className='about-page'>
            {/* Header */}
            <header style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='container text-center text-dark mt-5'>
                    <h2 className='fw-semibold'>HAKKIMIZDA</h2>
                </div>
            </header >

            {/* Content */}
            <div className='container'>
                <div className="row align-items-center">
                    {/* Text */}
                    <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-2 mb-lg-3 fw-bold text-dark'>ŞİMAL HARİTA MÜHENDİSLİK</h2>
                        <p className='mt-3'><strong className='text-dark'>Şimal Mühendislik ;</strong></p>

                        <p>
                            1998 yılında <strong className='text-dark'>Erol Demirtaş</strong> ve <strong className='text-dark'>Hasan Aytekin</strong> tarafından
                            Tekirdağ ili Çorlu ilçesinde faaliyetine başlamış olan firmamız, en büyük gücünü sabırlı, kararlı ve
                            istikrarlı duruşundan almaktadır. Günümüzde <strong className='text-dark'>İstanbul ili tüm ilçelerinde</strong> hizmet vermeye devam etmektedir.
                        </p>

                        <p>
                            Ülkemizde ve dünyadaki gelişmeleri yakından takip ederek teknolojik entegrasyonu sağlamak,
                            çalışma konularıyla ilgili yeni sistem ve teknolojileri üstlendiği projelerde kullanmak,
                            bu alanlarda birikim sahibi insanlar yetiştirmek{" "}
                            <strong className='text-dark'>
                                ŞİMAL Harita Mühendislik İnşaat Tic.Ltd.Şti.
                            </strong>{" "}
                            ’nin başlıca amaçları arasındadır.
                        </p>

                        <p>
                            Bu amaçlarla ihtiyaç duyulan yeni proje ve hizmet alanlarının araştırılması, oluşturulması, mevcutların iyileştirilmesi ile
                            dünyadaki teknolojik gelişmelerin izlenerek entegrasyonun sağlanması çalışmaları yürütülmektedir.
                        </p>

                        <p>
                            <strong className='text-dark'>ŞİMAL Harita Mühendislik İnşaat Tic.Ltd.Şti.</strong>; teknik olarak kusursuz, aynı zamanda ekonomik ve çevreye uyumlu
                            tasarımlarıyla üstlendiği projelerde işveren ve idarelerin beklentilerini aşmayı, yenilikçi ve dinamik ekibiyle sürekli daha iyisini aramayı politika olarak benimsemiştir.
                            Konusunda en iyi mühendislik yazılımlarına sahip olan <strong className='text-dark'>ŞİMAL Harita Mühendislik İnşaat Tic.Ltd.Şti.</strong>,
                            yetişmiş personeliyle teknolojiyi en iyi şekilde takip etmekte ve kullanabilmektedir.
                        </p>


                    </div>

                    {/* Image */}
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img
                            id='about-img'
                            src={nebu}
                            alt='Şimal Harita Mühendislik'
                            className='img-fluid rounded shadow'
                            style={{ maxHeight: "75%", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

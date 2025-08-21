import React from 'react';
import aplike from '../../utils/images/aplike.webp'

function Aplikasyon() {
    return (
        <div id="blog" className="container " >
            <div className="row justify-content-center">

                {/* Blog Centered */}
                <div className="col-md-10 col-lg-8 mb-4" style={{ marginTop: '87px' }}>
                    <div className="card shadow-sm border-0">

                        {/* Resim */}
                        <div className="text-center p-4">
                            <img
                                className="img-fluid rounded"
                                style={{ maxHeight: '250px', objectFit: 'cover' }}
                                src={aplike}
                                alt="Aplikasyon Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Aplikasyon Ölçümleri</h3>

                            <p>Aplikasyon; “Taşınmaza ait mülkiyet veya irtifak hakkı sınırlarının, tapu plânındaki data ve belgelerine uygun olarak zeminde işaretlenmesini”</p>

                            <p>Aplikasyon krokisi ise; “Parselin aplikasyon ölçü değerleri ile parsel sınır noktalarının durağan tesislere ve denetim noktalarına bağlı olarak zeminde alınan röperli ölçülerini gösteren krokiyi” İfade eder, şeklinde tanımlanmıştır.</p>

                            <p>Aplikasyon işlerinde özellikle bir sınırda ihtilaf varsa ihtilaflı sınırın sözlü olarak belirtilmesi gerekir. Taşınmaz malın hisseli ise, hissedarların hissesi oranında aplikasyon işlemi yapılmaz. Talep sahibi (İlgili birey/kamu kuruluş ve müesseseları …) istem belgesinde belirtilen gün ve saatte temin edeceği taşıt ile taşınmaz malın mahalline gidilir. Aplikasyonu yapılan parselin zeminde belirli olmayan köşe noktaları işaretlenir. Zeminde belirlenen parsel köşe noktalarında cephe kontrolü yapılır. Aplikasyon işleminin bitiminden sonra 2 nüsha aplikasyon krokisi düzenlenir. Düzenlenen krokide aplikasyon ölçü değerleriyle birlikte poligon noktaları ve parsel köşe noktalarının koordinat değerleri ile Tapu Plânları Tüzüğü gereğince yapılan işlemin üretim yöntemine ve haritanın ölçeğine nazaran hesaplanan yanılma sınırlarının belirtilmesi esastır.</p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Aplikasyon;

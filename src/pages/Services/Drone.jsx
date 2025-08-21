import React from 'react';
import drone from '../../utils/images/drone-min.webp';

function Drone() {
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
                                src={drone}
                                alt="Drone Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">DRON İLE FOTOGRAMETRİK ÖLÇÜM</h3>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Uçuş Planlaması ve Veri Toplama</strong>
                            </h5>
                            <p>
                                Drone, önceden belirlenen rotalar üzerinde otomatik uçuş yaparak yüksek çözünürlüklü görüntüler toplar. Bu süreçte, görüntüler arasında yeterli örtüşme sağlanır ve konum bilgileri kaydedilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Veri İşleme ve Modelleme</strong>
                            </h5>
                            <p>
                                Toplanan görüntüler, fotogrametri yazılımlarıyla işlenerek 3D nokta bulutları, ortofoto haritalar ve sayısal yüzey modelleri (DSM/DEM) oluşturulur. Bu modeller, arazi eğimi, yükseklik ve hacim hesaplamaları gibi analizler için kullanılır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Harita Üretimi ve Entegrasyon</strong>
                            </h5>
                            <p>
                                İşlenmiş veriler, Coğrafi Bilgi Sistemleri (GIS) ile entegre edilerek kullanıma hazır haritalara dönüştürülür. Bu haritalar, CAD ve GeoTIFF gibi formatlarda dışa aktarılabilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Drone Kullanılarak Yaptğımız İşlerden Bazıları</strong>
                            </h5>
                            <p>
                                HALİHAZIR ÇİZİMİ <br />
                                KÜBAJ HESAPLARI <br />
                                YOL GÜZERGAHIN İSTENİLEN ÖLÇÜLERDE BOY PROFİLİ VE ENKESİTLERİN ÇİZİMİ <br />
                                EŞYÜKSELTİ EGRİLERİNİN ÇİZİMİ VE KOTLARIN YAZDIRILMASI <br />
                                İSTENİLEN ARALIKTA VE SAYIDA NOKTA OLUŞTURULMASI

                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Avantajları</strong>
                            </h5>
                            <p>
                                Hızlı Veri Toplama: Geniş alanlar kısa sürede haritalanabilir.<br />

                                Yüksek Doğruluk: RTK/PPK destekli dronlar, santimetre düzeyinde hassasiyet sağlar.<br />

                                Düşük Maliyet: Geleneksel yöntemlere göre daha ekonomik çözümler sunar.<br />

                                Güvenli Uygulama: Ulaşılması zor ve tehlikeli bölgelerde güvenli veri toplama imkanı tanır.<br />

                                Çeşitli Uygulama Alanları: Afet yönetimi, tarım, inşaat, çevresel izleme gibi birçok alanda kullanılır.
                            </p>
                            <p>
                                Drone ile harita ölçümü, modern haritacılık uygulamalarında önemli bir yer tutmaktadır. Bu teknoloji, daha hızlı, güvenli ve ekonomik çözümler sunarak, geleneksel yöntemlerin yerini almaktadır.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Drone;

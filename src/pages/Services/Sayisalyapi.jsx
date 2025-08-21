import React from 'react';
import sayyapi from '../../utils/images/sayisalyapi-min.webp';

function Sayisalyapi() {
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
                                src={sayyapi}
                                alt="Sayisalyapi Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">3 Boyutlu Sayısal Yapı Modeli (City GML)</h3>

                            <p>
                                Tapu ve Kadastro Genel Müdürlüğü tarafından Bina ve bağımsız bölümlerin geometrisinin 3 boyutlu dijital ortamda yönetilmesi amacıyla çeşitli çalışmalar yapılmış ve bunun sonucunda 2020 yılında “3B Şehir Modelleri Üretimi ve 3B Kadastro Altlıklarının Oluşturulması Projesi” başlatılmıştır. Bu proje ile TKGM tarafından üretilen veya ürettirilecek olan üç boyutlu verilerin; üretim takibi, doğrulama ve barındırılması, entegrasyonu, sunumu, paylaşım ve süreklilik modelini içeren TKGM 3B Şehir Modelleri Yönetim Bilgi Sisteminin kurulması amaçlanmıştır.
                            </p>
                            <p>
                                Tapu ve Kadastro Genel Müdürlüğü Tapu Dairesi Başkanlığı tarafından yayımlanan 01.09.2021 tarihli ve 2021/4 sayılı “Kat İrtifakı ve Kat Mülkiyeti” konulu Genelgede belirtildiği üzere kat irtifakı ve kat mülkiyeti kurulması işlemleri öncesinde, ülke koordinat sisteminde hazırlanacak City GML formatındaki üç boyutlu sayısal yapı modellerinin yapı ruhsatı ve yapı kullanma izin belgesi düzenlemeye yetkili idarelerce yapı aplikasyon projesi ile birlikte güvenli elektronik ortamda kadastro müdürlüğüne gönderilmesi gerekmektedir.
                            </p>
                            <p>
                                City GML formatındaki Üç Boyutlu Yapı Modellerinin Üretimi için İşverenle Serbest Harita ve Kadastro Mühendisi arasında Harita ve Kadastro Mühendisleri Odası (HKMO) TİP2 Sözleşmesi yapılarak işe başlanır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">3 BOYUTLU YAPI MEDELLERİ ÜRETİMİ İŞLEMİNDE İSTENEN BELGELER</strong>
                            </h5>
                            <p>
                                Tapu Sicil Kayıt Sureti veya Tapu Senedi (Fotokopi)<br />
                                İnşaat Ruhsatı Fotokopisi<br />
                                Mimari Proje (Autocad DWG formatında)<br />
                                Yol Kotu Tutanakları (Fotokopi)<br />
                                İlgili Belediyesinden alınan Yapı Kimlik, Numarataj, Bağımsız Bölüm Kimlik<br />
                                Numaraları (MAKS Numaraları)<br />
                                HKMO TİP-2 Sözleşme (Büromuzda Hazırlanıp imzalanacaktır)
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sayisalyapi;

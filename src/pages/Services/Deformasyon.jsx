import React from 'react';
import deformasyon from '../../utils/images/defofoto.webp'

function Deformasyon() {
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
                                src={deformasyon}
                                alt="Deformasyon Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Deformasyon Ölçüm Hizmeti</h3>

                            <p>  Deformasyon Ölçmeleri, mühendislik ölçmeleri içinde önemli bir yere ve konuma sahiptir. Gerek üzerinde yaşadığımız organik ortamda, gerekse insan eliyle inşa edilmiş mühendislik yapılarında zaman içinde ortaya çıkabilecek geometrik değişimlerin (deformasyonların) neticeları, insan yaşamını ve onun güvenliğini yakından ilgilendirmektedir. çünkü, mühendislik yapıları ve çevresindeki geometrik değişimlerin izlenmesi, belirlenmesi ve tanımlanması son aşama örutubet taşımaktadır.</p>

                            <p>  Son yıllarda deformasyon ölçmeleri, jeodezinin en önemli uygulama alanlarından biri olmuştur.Hareketlerin izlenmesi çalışmalarında genellikle statik deformasyon modelleri yeterli olmaktadır.

                                Tünel ve Otoyollarda Deformasyon Ölçüleri Baraj Deformasyon Ölçüleri İnşaat Sahaları İle Maden Ocaklarındaki Deformasyon Ölçüleri vb.</p>

                            <p> Özet Deformasyon Ölçmeleri, mühendislik ölçmeleri içinde önemli bir yere ve konuma haizdir. Gerek üzerinde yaşadığımız organik ortamda, gerekse insan eliyle inşa edilmiş mühendislik yapılarında zaman içinde ortaya çıkabilecek geometrik değişimlerin (deformasyonların) sonuçları, insan yaşamını ve onun güvenliğini yakından ilgilendirmektedir.

                                Bu sebeple, mühendislik yapıları ve çevresindeki geometrik değişimlerin izlenmesi, belirlenmesi ve tanımlanması son derece örutubet taşımaktadır. Bu çalışmada, Baraj, Köprü, Tünel gibi önemli mühendislik yapılarında zaman içinde ortaya çıkabilecek geometrik değişimlerin ve bu değişimlere yol açan bazı parametrelerin izlenmesinde kullanılan yöntem, donanım, ölçme ve analizinden söz edilmiştir.</p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Deformasyon;

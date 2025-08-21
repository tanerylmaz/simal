import React from 'react';
import imarplanidegisiklik from '../../utils/images/imarplanidegisiklik.webp'

function Imarplani() {
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
                                src={imarplanidegisiklik}
                                alt="imarplanidegisiklik Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">İMAR PLANI VE İMAR TADİLAT PROJESİ</h3>

                            <p>
                                Onaylı halihazırdaki haritalar üzerinde ve kadastral durumu işlenmiş olan arazi parçalarının kullanış biçimlerini, bölgedeki gelecekteki nüfus yoğunluğunu, ulaşım sistemlerini ve problemerinin çözümünü göstermek amacıyla 1/1000 veya 1/5000 ölçekte düzenlenen, detaylı bir raporla açıklanan ve raporu ile bir bütün olan planlar, nazım imar planı olarak tanımlanıyor.
                            </p>
                            <p>
                                Uygulama imar planı ise, nazım imar planına uygun olarak hazırlanan ve çeşitli bölgelerin yapı adalarını, bunların yoğunluk ve düzenini, yolları ve uygulama için gerekli imar uygulama programlarına esas olacak uygulama etaplarını ve esaslarını ve diğer bilgileri ayrıntıları ile gösteren ve 1/1000 ölçekte düzenlenen raporuyla bir bütün olan plan olarak ifade ediliyor.
                            </p>
                            <p>
                                İmar tadilatı, nazım ve uygulama imar planlarının ihtiyaca cevap vermemesi durumlarında söz konusu oluyor. Bu noktada ihtiyaçların karşılanması adına İmar tadilatı planı yapılıyor.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">İmar tadilatı nasıl yapılır?</strong>
                            </h5>
                            <p>
                                Gerek nazım ve gerekse uygulama imar planlarının ihtiyaca cevap vermediği ve uygulamasının problem olduğu durumlarda; planın tümünün veya bir kısmının plan yapım tekniklerine uyularak yenilenmesi sonucu elde edilen plandır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">İmar tadilatı planı için gerekli belgeler:</strong>
                            </h5>
                            <p>
                                Dilekçe (TC Kimlik No, Telefon No, Adres bulunacak) <br />

                                Tapu Fotokopisi<br />

                                Kimlik Fotokopisi<br />

                                Koordinatlı Plan Örneği
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Imarplani;

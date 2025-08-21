import React from 'react';
import mimari from '../../utils/images/mimaristatik-min.webp';

function Mimari() {
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
                                src={mimari}
                                alt="mimari Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Mimari , Statik Proje ve Ruhsatlandırma Hizmetleri</h3>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Mimari Proje Nedir?</strong>
                            </h5>
                            <p>
                                Yapı ruhsatı için istenen belgeler arasında mimari proje de yer almaktadır. Peki, mimari proje nedir? Mimari projelere başlanmadan önce yapılan incelemeler , Yapı ruhsatı, bir taşınmazın inşa edilebilmesi için gerekli inşaata başlama lisansıdır. Yani yapı ruhsatı inşaata başlanırken alınır. İnşa edilecek tüm yapılar için alınması zorunlu bir belgedir. Yapı ruhsatı alabilmek için istenen belgeler arasında mimari proje de yer alır.
                            </p>
                            <p>
                                Mimari proje, inşa edilecek yapının dış görüntüsü, iç dizaynı, kitlelerin birbiriyle oranı, planları gibi tüm ayrıntıların yer aldığı projedir. Mimari projeler, yapıların mimarı tarafından hazırlanır.Mimari projeye başlanmadan önce mimar “ilk incelemeyi” gerçekleştirir.
                            </p>
                            <p>
                                Mimarın yerinde yapacağı inceleme sırasında, arsanın çapa uygunluğu, yol şebekesi, kanalizasyon, elektrik ve bunlarla ilgili bağlantılar kontrol edilir. Arsanın kuzey yönü ve manzara durumu kontrol edilir. Arsadaki ağaçlar, kuyu, havuz, sarnıç incelenir. Arsanın topoğrafik durumu tespit edilir. İklim şartları incelenir.
                            </p>
                            <p>
                                Mimar yaptığı ilk inceleme sonrasında imar durumunu çıkartır. Mimar, mesleki bilgi ve becerisini kullanarak bir bağlantı şeması ortaya çıkarır.Mimari projeler, Bayındırlık ve İskân Bakanlığı veya ilgili belediye tarafından tespit edilen çizim ve tanzim esaslarına göre hazırlanmalıdır.
                            </p>
                            <p>
                                Projenin kapağında; arsanın yeri, tapu kaydı, ada, pafta ve parsel numaraları ve alanı ile mevcutsa üzerinde bulunan yapılar, yapılacak yapının cinsi, kat sayısı, bina taban alanı ile inşaat alanı, hangi amaçla kullanılacağı ve yapı sahibi ile ilgili bilgiler ile projeyi çizen kişi ile ilgili bilgiler yer almalıdır.İlgili belediyelerce tasdik işlemleri yapılan mimari projeler için belli bir miktarda ücret ödenmesi gerekmektedir. Bu ücretler her sene belirlenir, mesken ve işyerleri için farklı miktarları bulunur.

                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Statik Proje Nedir?</strong>
                            </h5>
                            <p>
                                Bilindiği üzere mimari proje yapıldıktan sonra , yani zemin işleri ve proje tamamlandıktan sonra bu proje inşaat mühendisine gönderilir ve yapının statik analizleri yapılması istenir.Ayrıca statik analizlerle ortaya çıkan stabilite problemleri ve kolon yerleşkesinin değiştirilmesi inşaat mühendisleri tarafından sağlanır. Statik proje binanın rijitliğinin ölçülmesi başka bir anlamda binanın yüklere karşı direncinin ölçülmesidir.
                            </p>
                            <p>
                                Statik proje çok önemli bir konudur.Binanın betonarme hesaplarının yanı sıra statik hesaplarının yapılması binaya tekil yükler altında ve hareketli yükler altında nasıl davrandığı hakkında bize bilgi verir.Betonarme projeye statik proje bittikten sonra başlanır.Çünkü yapıya gelecek yükler , hareketli yükler ,kren kuvvetleri ,krenleri fren yükleri statik proje sayesinde belirlenir ve yapının bu yükler altındaki direnci bu sayede bulunabilmektedir.
                            </p>
                            <p>
                                Statik projesi iyi olmayan bir sistem çökmeye maruz kalır.Statik proje deprem yüklerinin belirlenmesinde de büyük rol oynar ,bu yüzden çok dikkatli bir biçimde yapılmalıdır .Bina üzerine etkiyen tüm yükler statik projede ele alınmalıdır ve binanın rijitliği sağlanmalıdır ,aksi halde bir çok ölümcül sorun ortaya çıkacaktır.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Mimari;

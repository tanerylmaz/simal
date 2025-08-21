import React from 'react';
import madde18 from '../../utils/images/madde18.webp'

function Madde18() {
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
                                src={madde18}
                                alt="madde18 Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">18. Madde Uygulaması</h3>
                            <h3 className="card-title fw-bold mb-3 text-center">Parselasyon İşlemi</h3>

                            <p>
                                İmar Kanunu'nun 18. Maddesi, yerleşim yerlerinde düzgün imar parselleri oluşturmayı amaçlar ve bu işlemi, belediyeler veya valilikler gibi yerel yönetim birimleri tarafından yürütülen parselasyon işlemleri ile gerçekleştirir. Madde 18 uygulamasının amacı, imar planına uygun alanlar yaratmak, buralarda kamuya ait yollar, parklar ve yeşil alanlar gibi ihtiyaçları karşılayacak alanlar oluşturmaktır. Bu düzenleme, özellikle plansız veya plansız gelişmiş yerleşimlerde, hem kamu hem de vatandaşların çıkarlarını koruma amacı taşır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">18. Madde Uygulaması Nasıl Yapılır?</strong>
                            </h5>
                            <p>
                                İlk Aşama - Mülkiyet Analizi: Düzenleme yapılacak alanın mevcut durumunu inceleyerek başlanır. Bu kapsamda her parsel, bir bütün olarak ele alınır ve mevcut mülkiyet durumları dikkate alınır.<br />

                                Düzenleme Ortaklık Payı (DOP) Kesintisi: Her parselden eşit oranda kesinti yapılarak düzenleme alanında yol, park gibi kamusal alanlar oluşturulur. Bu kesinti %40’ı aşamaz. Bu düzenleme ortaklık payı (DOP) ile, artan değer karşılığında kamusal alanlar için bir kaynak sağlanır. Ancak bu işlem yapılırken, parsel sahiplerinin mülkiyet hakkı korunur ve kesintiler herkes için aynı oranda olur.<br />

                                Parselasyon ve Mülkiyet Dağılımı: DOP kesintisi yapıldıktan sonra kalan arazi parsellere ayrılır ve maliklere, yani arazi sahiplerine orijinal sahip oldukları oranlarda dağıtılır. Örneğin, başta %20 hisseye sahip biri, parselasyon sonrasında da yeni imar parsellerinde %20 hisse alır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">18. Maddeye Karşı İtiraz Edilebilir mi?</strong>
                            </h5>
                            <p>
                                Bu işlemler idari işlemler olduğundan, vatandaşlar mahkemeye başvurarak iptal davası açabilir. Eğer bu düzenleme mülk sahibinin haklarını ihlal ediyorsa, yetkili mahkemeye başvurarak parselasyon işleminin iptalini talep edebilir. Mahkeme kararıyla bir parselasyon işlemi iptal edilirse, kök parsele yani eski duruma dönülür.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Madde 18'in Genel Manada Vatandaşa Etkisi Nasıldır?</strong>
                            </h5>
                            <p>
                                Madde 18 uygulaması, yerleşim yerlerinde düzenli ve planlı yapılaşmayı sağlarken, mevcut mülk sahiplerinin imar planına uygun bir biçimde haklarının korunmasını amaçlar. Ancak uygulamada hatalar veya değer kayıpları yaşanabilir ve bu durumlarda vatandaşlara hukuki yollarla haklarını savunma imkânı tanınır. Bu yüzden, yerel yönetimlerin bu düzenlemeyi doğru, şeffaf ve vatandaş haklarını gözetecek şekilde uygulamaları büyük önem taşır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Madde 18'in Getirebileceği Bazı Sorunlar</strong>
                            </h5>
                            <p>
                                Bu düzenleme bazen mülk sahipleri açısından sorunlar yaratabilir. İşte sık karşılaşılan durumlar:
                            </p>
                            <p>
                                Yer Değişikliği: Yeni parselin, eski parselin konumundan farklı bir yere düşmesi soruna yol açabilir. Normalde, mülk sahibinin eski yerinin yakınında veya aynı konumda parsel verilmesine çalışılır. Bu mümkün değilse, kişi tamamen farklı bir alanda parsel sahibi olabilir. Bu durum değer kaybına veya mülkiyetin kullanımında zorluklara yol açabilir.<br />

                                Konut ve Yapı Durumu: Eğer düzenlemeye giren alanda bir yapı varsa, bu yapının korunup korunamayacağı değerlendirilir. Yapının planlara ve imar mevzuatına göre korunmasında sakınca yoksa, yapı olduğu gibi kalır. Ancak yapı uygun değilse, yeni parsel içinde farklı bir konumda veya başka maliklerle hisseli hale gelebilir. Yapının sahibi ile parselin yeni sahibi arasındaki ilişkiler bu durumda karmaşık hale gelebilir.<br />

                                Eşit Kesinti Yapılmaması Durumu: Tüm parsellerden eşit DOP kesintisi yapılması gerekir. Ancak bazen yanlış veya haksız bir biçimde daha fazla kesinti yapılabilir. Bu durumda vatandaşlar idari mahkemede iptal davası açabilir.<br />

                                Değer Farkı Sorunu: Düzenleme öncesi parsellerle, düzenleme sonrası verilen parseller arasında büyük bir değer farkı olmamalıdır. Eğer böyle bir değer farkı varsa, vatandaşlar için bir hak kaybı oluşur ve düzenleme mahkeme kararıyla iptal edilebilir.<br />

                                Kamu Alanları ve Hisse Verilme Sorunu: Parselasyon işlemi sonrasında vatandaşa yapılaşma izni olan bir imar parselinden hisse verilmesi gerekir. Eğer vatandaş yapı adasında değil de park veya yeşil alan gibi bir bölgede hisse alırsa, bu durumda düzenleme yine hukuka aykırı olur.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Madde18;

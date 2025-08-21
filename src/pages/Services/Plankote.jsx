import React from 'react';
import plankote from '../../utils/images/plankoteölcü.webp';

function Plankote() {
    return (
        <div id="blog" className="container " >
            <div className="row justify-content-center">

                {/* Blog Centered */}
                <div className="col-md-10 col-lg-8 mb-4" style={{ marginTop: '87px' }}>
                    <div className="card shadow-sm border-0">

                        <div className="text-center p-4">
                            <img
                                className="img-fluid rounded"
                                style={{ maxHeight: '250px', objectFit: 'cover' }}
                                src={plankote}
                                alt="Plankote Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Plankote Hizmetleri</h3>

                            <p>Mimari projelerin daha doğru ve etkin bir şekilde tasarlanabilmesi için Harita Mühendisleri tarafınca değişik ölçme şekilleri ile hazırlanan ve altlık olarak kullanılan bölgenin detaylı durumunu, topoğrafyasını ve tüm yapıları yansıtan haritalara Plankote denir. Arazinin yapısına bakılırsa belirli aralıklarla ve eğimin değiştiği her noktada alım yapılmasıyla kaynaklanır. Resmi evraklar için kullanılacaksa arazinin bulunduğu il, ilçe, köy, pafta numarası, ada ve parsel bilgileriyle beraber arazide bulunan mevcut yol, bina, şev, direk, çeşme şeklinde sembollerle tanımlanan nesnelerle birlikte belirli aralıklarla arazinin mevcut kotları gösterilir.</p>

                            <p>İstenilen prezisyona göre ortalama 3-5 metre de bir ayrıntılar noktası alınır. Ölçme işlemi bilgisayara veri transferi mümkün olan total station cihazlarıyla yapılır. Yapılış amacına nazaran faklılık göstermesine karşın genel olarak, binalar, yollar, alt ve üst yapılar (rogar kapakları, doğalgaz, su, aydınlatma direkleri, vb), şevler ve tüm arazi yapısı ölçülür.</p>

                            <p>Ölçmeler istenilen detayda yapılmaktadır. Bu ayrıntılar genellikle arazi üzerine yapılacak projenin ebatlarına ve önemine bakılırsa değişmektedir. 3 m ile 10 m içinde alım sıklığı değişmektedir. Yine istenilen ölçekte çizimi gerçekleştirilmektedir. Ölçek olarak 1/100, 1/200, 1/500 ve/yada 1/1000 olarak ölçme gerçekleştirilir ve istenirse kağıt baskıya verilir.</p>

                            <p>Bir projenin yapılması ve uygulanması esnasında projenin yapılacağı arazinin topoğrafik durumunun ölçülmesi önemlidir. Bu ölçümler harita yapımı için gerekli ölçmeler ile aynı olmakla beraber hassasiyet ve ölçüm tekniği açısından farklılık gösterir. Plankote için meydana getirilen ölçmeler istenilen hassasiyete bağlı olmak üzere iki şekilde yapılır.</p>

                            <p>Trigonometrik yükseklik ve kutupsal koordinat ölçme yöntemi ile meydana getirilen plankote: Bu yöntemde 3-5m de bir arazinin belirtilen yöntemlerle kotlarının alınması, hesaplanması ve uygun ölçekte çizimidir. Karelajlı Plankote: Bu yöntemde arazi hassasiyet kriterine göre her 3-5m de bir çakılan kazıklarla kare ağına bölünür. Daha sonra bu kare ağında geometrik nivelman yapılmak sureti ile her bir kazığın mm hassasiyetinde kot değerleri hesaplanır.</p>

                            <p>Plankote çalışmaları bir çok alanda kullanılmaktadır. Hemen derhal tüm inşaat projeleri, proje çalışması yapılacak alanın plankote ölçümlerini isterler. Plankote ölçümlerinde, etrafta bulunan yollar ve binalar ölçülür. Çünkü projelendirilen arazinin üzerinde yapılacak olan tesis, konut ya da herhangi bir yapı, yüksekliğini mevcut yoldan alacaktır.</p>

                            <p><strong>Plankote nedir?</strong></p>
                            <p>Plankote kısaca, projelere altlık teşkil etmek amacıyla hazırlanan, arazinin topografik durumu ile birlikte tüm detayları kapsayan haritalardır. Harita mühendisleri tarafından değişik ölçme yöntemleri ile hazırlanan, arazinin topoğrafik yapısını gösteren bir harita türüdür.</p>

                            <p><strong>Plankote nasıl yapılır?</strong></p>
                            <p>1) Trigonometrik yükseklik ve kutupsal koordinat ölçme yöntemi ile: Her 3-5 metre’de bir arazinin belirtilen yöntemlerle kotlarının alınması, hesaplanması ve uygun ölçekte çizilmesidir.</p>
                            <p>2) Karelajlı plankote: Arazi hassasiyet kriterine göre her 3-5 metre’de bir çakılan kazıklarla kare ağına bölünür. Daha sonra bu kare ağında geometrik nivelman yapılmak sureti ile her bir kazığın mm hassasiyetinde kot değerleri hesaplanır.</p>

                            <p><strong>Plankote ölçümü hangi cihazlar ile yapılır?</strong></p>
                            <p>Plankote ölçümleri, günümüzde GPS veya Total Station (Elektronik Takometre) olarak adlandırılan cihazlar yardımı ile kolayca yapılabilmektedir. Ölçüm aralığı, ölçüm yapan kişinin belirlediği ölçeğe bağlıdır.</p>

                            <p><strong>Plankote hangi programlar ile hesaplanır?</strong></p>
                            <p>Arazi ortamında okunarak ölçüm cihazlarına kayıt edilen veriler, ofiste bilgisayara aktarılır ve CAD programları (AutoCAD, NetCAD vb.) ile çizimi yapılır.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Plankote;

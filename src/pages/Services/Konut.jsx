import React from 'react';
import konut from '../../utils/images/yapıkonutproje-min.webp';

function Konut() {
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
                                src={konut}
                                alt="Konut Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Yapı ve Konut Projeleri</h3>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Yapı</strong>
                            </h5>

                            <p>
                                İnsanların, hayvanları ve bitkilerin ihtiyaçlarını karşılamak için çeşitli yapı malzemeleri ile inşaa edilen tesislere yapı denir. Yapılar içerisindekileri olumsuz doğa koşullarından koruyan, tasarım ile birlikte bir çok yapı malzemesinin bir araya gelerek oluşturduğu bir bütündür.
                            </p>
                            <p>
                                Yapılarda belirli bir standart olmalıdır, bu standartlar insanların yaşadıkları ortamda konfor ve huzurlu yaşayabilmesi için asgari şartların sağlanmasıdır. Yapılar emniyetli, ekonomik, estetik ve fonksiyonel olmalıdır.
                            </p>
                            <p>
                                Yapılar birçok özelliklerine göre değişik şekillerde sınıflandırılabilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">İNŞAAT MAKSATINA GÖRE YAPI SINIFLARI</strong>
                            </h5>
                            <p>
                                Konaklama yapıları (otel vb.) <br />
                                Sağlık Yapıları (hastane vb.)<br />
                                Dini yapılar (Cami vb.) <br />
                                Ticaret yapıları (iş merkesi vb.) <br />
                                Sosyal yapılar (tiyato, sinema vb.) <br />
                                Ulaştırma yapıları (yol, köprü vb.) <br />
                                Su yapıları (baraj vb.) <br />
                                Spor yapıları (stadyum vb.) <br />
                                Eğitim yapıları (okul vb.) <br />
                                Anıtlar Konutlar (ev, apartman vb.) <br />
                                Endüstri yapıları (fabrika vb.)
                            </p>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">TAŞIYICI ELEMANLARINA GÖRE YAPI SINIFLARI</strong>
                            </h5>
                            <p>
                                Yapının kaba inşaatına oluşturan ve yük taşıyan elemanların, yapılış ve üzerine gelen yükleri taşıyış şekillerine göre sınıflandırılmasıdır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Yığma (masif) Yapılar </strong>
                            </h5>
                            <p>
                                Binalardaki döşeme ve çatı gibi yatay taşıyıcı sistem yükleri, iç ve dış duvarlar tarafından taşınarak temele nakledilecek şekilde yapılan yapılardır. Bu tür yapılarda yükün tamamını duvar taşıdığı için, yapının bazı bölgelerindeki duvarların değiştirilmesi veya iptal edilmesi tehlikeli ve zordur. Ahşap yığma ve kagir yığma olarak ikiye ayrılırlar.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Karkas İskeletli Yapılar  </strong>
                            </h5>
                            <p>
                                Bu yapılarda yükü taşıma ve aktarma işlemi şu sıraya göre oluşturulmalıdır. Döşeme ve çatı kendi ağırlıklarını ve üzerlerine gelen yükleri yatay taşıyıcı elemanlar olan kirişlere iletirler. Daha sonra bu kirişler bu yükleri, üzerine oturdukları düşey taşıyıcı elemanlara  yani kolonlara iletirler.
                            </p>
                            <p>
                                Kolonlarda bu yükleri temele iletirler. Yapıdaki bu sistem sayesinde kolonlar arasında boşluklar oluşur. Bu boşlukları kapatmak ve yapıyı bölmelere ayırmak için tuğla veya gaz beton bloklarından duvar örülür. Yapının bir kısmı karkas, bir kısmı da  ahşap yapılabillir. Bu tür yapılara karma yapı, veya yarı karkas, yarı yığma yapı denir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Ahşap İskeletli Yapılar  </strong>
                            </h5>
                            <p>
                                Ahşap iskeletli yapılar; yatay ve düşey  taşıyıcı elemanları ağaçtan yapılan bir yapı türüdür. Tarihi evler vb.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Betonarme İskeletli Yapılar  </strong>
                            </h5>
                            <p>
                                Yatay ve düşey taşıyıcı sistemi betonarme yapı elemanlarından oluşan yapı türüdür. Ülkemizde en çok kullanılan yağı türüdür.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Çelik İskeletli Yapılar  </strong>
                            </h5>
                            <p>
                                Yatay ve düşey taşıyıcı elemanları çelikten yapılan yapılardır. Bu elemanlar çeşitli cins ve ebatlardaki, profil ve levhalardan; kaynak, cıvata ve perçin gibi birleştirme yöntemlerinden yararlanılarak oluşturulurlar.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">  Prefabrike Yapılar  </strong>
                            </h5>
                            <p>
                                Binanın taşıyıcı sistemini oluşturan yapı elemanları, inşaa mahalinde birleştirilebilecek şekilde önceden hazırlanan yapı türüdür. Hafif ve ağır prefabrike olmak üzere ikiye ayrılırlar.
                            </p>
                            <h4 className="text-lg font-bold">
                                <strong className="text-red-500">   SÜREKLİLİĞİNE GÖRE YAPI SINIFLARI  </strong>
                            </h4>
                            <p>
                                Yapı kullanım amacına hizmet edecek şekilde planlanırken, kullanım süresine göre geçici ve kalıcı olmak üzere iki kısma ayrılır.

                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">  Geçici Yapılar  </strong>
                            </h5>
                            <p>
                                Kısa ve geçici bir süre kullanılmak ve ihtiyaçlara cevap vermek üzere, başkasının ya da bizzat sahibinin toprağı üzerine yapılan şantiye binası, kulübe, vb. hafif yapılardır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">  Kalıcı Yapılar  </strong>
                            </h5>
                            <p>
                                Süresiz kullanılmak veya uzun bir süre kullanılması ve belirli ihtiyaçlara cevap vermesi için yapılan yapılardır. Tapu siciline kayıtlıdırlar.
                            </p>
                            <h4 className="text-lg font-bold">
                                <strong className="text-red-500"> BULUNDUKLARI YERE GÖRE YAPI SINIFLARI  </strong>
                            </h4>
                            <p>
                                Yapılar tamamen büyük bir kısmı yer yüzeyinin altında veya üzerinde inşaa ediliş durumuna göre ikiye ayrılırlar
                            </p>
                            <p>
                                Alt Yapılar : Yol, su, kanalizasyon, köprü vb. ile zemin seviyesinin altında kalan yapılara denir.<br />
                                Üst Yapılar : Zemin seviyesinin üstünde yapılan tüm yapılardır.
                            </p>
                            <h4 className="text-lg font-bold">
                                <strong className="text-red-500"> MÜLKİYETİNE GÖRE YAPI SINIFLARI                                </strong>
                            </h4>
                            <p>
                                Resmi Yapılar : Devletin kamu ve kuruluşlarına yapmış veya yaptırmış olduğu yapılardır.<br />
                                Vakıf Yapıları : Toplum hizmetlerinin devamlı olarak yürütülebilmesi için şahıs veya kurumlar tarafından yardım ve bağış olarak bırakılan mülk veya kapitalleri işletilen resmi nitelik taşıyan kuruluşlara vakıf denir. Vakıflar tarafından inşaa edilen veya mülkiyetleri vakıflara devredilen yapılara vakıf yapıları denir. <br />Özel Yapılar : Şahıs veya işletmeler tarafından inşaa ettirilen veya çeşitli amaçlarla kullanılan yapılardır.
                            </p>
                            <h4 className="text-lg font-bold">
                                <strong className="text-red-500">İNŞAA EVRELERİNE GÖRE YAPI SINIFLARI</strong>
                            </h4>
                            <p>
                                Kaba Yapı : Temel, duvar, kolon, kiriş, döşeme vb. işleri kapsayan iş grubuna kaba yapı denir. <br />
                                İnce Yapı : Bir yapıda kaba yapıdan sonra gelen ve sıva, boya, badana, yalıtım, temiz ve pis su tesisatı vb. işleri kapsayan ve kaba yapıyı örten uygulamalara ince yapı denir.

                            </p>
                            <p>
                                İnsanlar tarafından kullanılan, insanların yaşama ihtiyacı ve barınma ihtiyacı için oluşturulmuş yapılara konut ismi verilmektedir. Bu konutlar ister ahşap malzemeyle, ister toprak malzemeyle istenirse de betonarme malzemeyle inşa edilebilmektedir.

                            </p>
                            <p>
                                Bu inşalarla bu yapıtların etrafı duvarlarla çevrelenir ve içerisinde konutun boyutuna göre oda ya da odalar yaratılır. İnsanlar bu konutlarında bu odalarda uyuyup uyanır, yaşamsal faaliyetlerini bu odalar içerisinde gerçekleştirir, iş hayatı ve sosyal hayat dışında kalan zamanlarını kendilerine ait konutların içerisinde harcarlar.
                            </p>
                            <p>
                                Konut yapıları müstakil konutlar, apartman konutları, residence konutları gibi pek çok alt başlık altında incelenebilmektedir. Müstakil konutlarda kendinize ait tüzel bir bahçe alanınız bulunabildiği gibi apartman dairelerinde böyle bir imkanınız bulunmamaktadır. Çünkü apartmanın etrafındaki yeşil alanlar tek bir kişiye değil bütün apartman sakinlerinin ortak kullanımı adına inşa edilmiştir.
                            </p>
                            <p>
                                Bunun dışında bireysel konutlar eğer apartman dairesi türündeyse herkesin kendi konutu bir duvarla birbirinden ayrılıp ayrı ayrı daireler haline getirilmektedir. İnsanların bir konut sahibi olabilmeleri adına son yıllarda müthiş derecede fazla konut inşa edilmiş, bankalarla yapılabilen antlaşmalar sonrası çekilen “konut kredileri” sayesinde kişiler uzun vadeler süresince kendilerince makul fiyatlarla konut kredisini ödeyip bir yandan da kendilerine ait konutlarında hayatlarını sürdürebilme konforunu yakalayabilmektedirler.
                            </p>
                            <p>
                                Ayrıca bireylerin uzun zamanlardır biriktirdikleri para miktarına göre, ailelerinin kalabalıklık sayılarına göre ya da aradıkları konfor standartlarına göre yüzlerce çeşit konut bulunmaktadır. Kalabalık aileler çok fazla odası olan konutları, konforuna düşkün aileler müstakil konutları ya da residence konutlarını; birikmiş bir maddi gücü olan bireyler ise de standart konutlardan daha gösterişli konutları satın alma imkanına sahip olabilmektedirler.
                            </p>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">  Toplu Konut Nedir?  </strong>
                            </h5>
                            <p>
                                Toplu konut, günümüzde şehirlerin barınma ihtiyacını karşılamak için inşa edilen ve birden fazla konuttan oluşan yerleşim alanlarıdır. Bu daireler genelde Devlet eliyle yapılan yatırımlar sonucunda oluşur. Toplu konutlar, vatandaşlara uygun kredi desteği sağlanarak satılır.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">   Türkiye’de Toplu Konut Sistemi </strong>
                            </h5>
                            <p>
                                Toplu Konut İdare Başkanlığı kısa ve bilinen adıyla TOKİ, Türkiye’de en çok toplu konut ihalesi gerçekleştiren kuruluştur. Başkanlık, aynı zamanda özel şirketlere de kredi ve arsa ile destek vermektedir. Böylece toplu konut sayısının artması teşvik edilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Toplu Konut Bölgesi</strong>
                            </h5>
                            <p>
                                Toplu konut bölgesi, ortak konut yapımının yer aldığı ve binlerce aileye barınma imkanı sağlayan evlerin olduğu bölgedir. Bu bölgelerin oluşturulabilmesi için Toplu Konut Bölgesi Uygunluk Belgesine TOKİ, Valilik ve Belediye onayıyla sahip olması gerekir. Bu mülkiyetlerde en az 400 konut yer alabilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Toplu Konutlar Neden Yapılır?</strong>
                            </h5>
                            <p>
                                Şehirlerde artan nüfus doğal olarak barınma ihtiyacını doğurmuştur. Toplu konut projeleri, aynı zamanda kredi desteğiyle vatandaşların kendi evlerine sahip olmasını sağlar. Ayrıca bu bölgeler, sosyal yaşama da katkı sağlamaktadır. Bu yapıların depreme dayanıklı olarak inşa edilmesi, kentsel dönüşüm sürecini de olumlu yönde etkilemektedir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Toplu Konut Kanunu</strong>
                            </h5>
                            <p>
                                Toplu konut kanunu 1984 yılında kabul edilen 2985 Sayılı bir Kanundur. Konut ihtiyacının karşılanması için gerekli olan usul ve esasların düzenlenmesi ve devletin yapacağı desteklemeler ile ilgili maddeleri içerir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Toplam konut alanı ne demek?</strong>
                            </h5>
                            <p>
                                Bir bölgede veya bir yerleşim alanında konut kullanımı için ayrılan ve planlaması yapılan alanlara konut alanı deniyor. Yönetmeliğe göre de konut alanı, “Yerleşme ve gelişme alanlarında konut kullanımına yönelik olarak planlanan alanlar konut alanlarıdır” şeklinde tanımlanmaktadır.
                            </p>
                            <p>
                                İmar planlarında konut kullanımına yönelik olarak planlanan ve ayrıca yönetmeliğin 19’uncu maddesinde belirtilen fonksiyonların da yer alabildiği alanlar da diyebiliriz. Öte yandan mevzubahis maddede yapılaşma koşulları yer alıyor. Buna göre:
                            </p>
                            <p>
                                lgili idare meclisince yol boyu ticaret olarak teşekkül ettiği karar altına alınan konut alanlarında bulunan parsellerin; zemin kat ve yol seviyesinde veya açığa çıkan bodrum katlarının yoldan cephe alan mekânlarında ya da binanın birinci katında veya bodrum katlarında zemin katta yer alan mekanla içten bağlantılı olan ve binanın ortak merdivenleri ile ilişkilendirilmeyen, getirilecek kullanıma ilişkin otopark ihtiyacını karşılamak kaydıyla, gürültü ve kirlilik oluşturmayan ve imalâthane niteliğinde olmayan, gayrisıhhi özellik taşımayan, halkın günlük ihtiyaçlarını karşılamaya yönelik dükkân, kuaför, terzi, eczane, anaokulu ve kreş ile gelişme alanları hariç; Sağlık Bakanlığınca aranan şartlar sağlanmak kaydıyla günübirlik sağlık hizmeti sunulan sağlık kabini, muayenehane, aile sağlığı merkezi, ağız ve diş sağlığı merkezi, diyaliz merkezi, acil servis içermeyen tıp merkezi, psikoteknik değerlendirme merkezi, üremeye yardımcı tedavi merkezi, fizik tedavi müessesesi, genetik hastalıklar tanı merkezi, evde bakım merkezi, işitme cihazı merkezi, ısmarlama protez ve ortez merkezi ve lokanta, pastane gibi konut dışı hizmetler verilebilir.
                            </p>
                            <p>
                                İlgili idare meclisince yol boyu ticaret olarak teşekkül ettiği karar altına alınan konut kullanımına ayrılan parsellerde ilgili kamu kurumunun belirlediği standartları sağlamak ve uygun görüşü alınmak ve ayrıca getirilecek kullanıma ilişkin otopark ihtiyacı karşılanmak kaydıyla müstakil olarak; yurt, anaokulu, aile sağlığı merkezi, kreş, ticari katlı otopark binaları ile gelişme alanları haricinde özel sağlık tesisi, özel eğitim tesisi ve yapılabilir. Konut alanlarında (1) numaralı alt bentte belirtilenler haricinde özel sağlık tesisi yapılabilmesi için uygulama imar planında bu amaçla değişiklik yapılarak konut kullanımından çıkarılması gerekir.
                            </p>
                            <p>
                                Konut alanlarında kalsa dahi parsellerin konut binası yapılıncaya kadar açık otopark, bahçe düzenlemesi ve peyzajı yapılarak kullandırılmasına ilgili idaresi yetkilidir.
                            </p>
                            <p>
                                Yol boyu ticaret olarak belirlenenler de dâhil konut alanlarında kalan parsellerin araç giriş çıkışından kaynaklanan trafik yükünü azaltmak amacıyla ve ilgili idareden geçit hakkı almak koşuluyla otopark olarak kullanılan bodrum katlarından plan kararı ile kamuya ait yer altı otoparkına araç giriş çıkışı verilebilir.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Konut;

import React from 'react';
import yol from '../../utils/images/yolprofil.webp';

function Yolprofil() {
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
                                src={yol}
                                alt="Yolprofil Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">YOL PROFİL ve GÜZERGAH BELİRLEME</h3>

                            <p> Bir yol güzergahının etüdü yolun arazide nereden geçeceğinin araştırılmasıdır.Zorunlu iki noktayı birbirine bağlayacak güzergah sayısı ilk bakışta bir çok gibi görünse de gerçekte çeşitli engel ve sınırlamalar sebebiyle bunların sayısı fazla olmaz.Hatta bazı durumlarda arazinin yapısına göre en uygun olanını bulmak amacıyla karşılaştırma yapmaya imkan verecek ikinci bir seçenek bulunamaz.Bir güzergah etüdü genel olarak iki aşamada yapılır.</p>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> İlk etüt / kesin etüd</strong>
                            </h5>
                            <p>
                                Projeye başlamadan önce yolun geçeceği arazi hakkında gerekli bilgileri toplamak gerek arazide ve gerekse büroda çalışma ve karşılaştırmalar yaparak yolun geçeceği arazi şeridini saptamak işidir.
                            </p>

                            <p>
                                İlk etüd genel olarak iki aşamada yapılır:<br />

                                İstikşaf (Ön Araştırma) / Ön proje

                            </p>


                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">  İstikşaf (Yol güzergahı araştırması)</strong>
                            </h5>
                            <p>
                                İki zorunlu nokta içinde detaylı bir etüt oluşturmaya değer hangi güzergahı yada güzergahları seçmek icap ettiğinin kısa esaslı  bir araştırmasıdır. Ayrıca çeşitli güzergahlar ortaya çıkabilir bu güzergahlarda sonradan kati etüd aşamasında daha detaylı olarak incelenir kesin güzergaha karar verilir. İstikşaf önce haritalar üzerinde yapılır.Bunun için 1/25000 ölçekli topoğrafik haritalar ile 1/100000 ölçekli jeolojik haritalar amaca uygundur.İstikşaf aşamasında aşağıdaki etütler yapılır.
                            </p>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Siyasal ve Askeri etüd</strong>
                            </h5>
                            <p>
                                Bir yol güzergahının tayininde ülkenin sulhta ve savaşta bu yolu askeri bakımdan kullanıp kullanmayacağının etüdü gerekir.Düzgüsel bir yol güzergahı bu bakımdan etüd edilebileceği şeklinde,askeri fakatçlara hizmet etmek üzere askeri düşüncelerle bir yol yapımı söz mevzusu olabilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Teknik ve Ekonomik etüd</strong>
                            </h5>
                            <p>
                                Yol maliyeti az ve standartları elde eden bir halde inşa edilmelidir.Yolun temel özelliklerini belirten bu standartlara “Proje Standartları” denilir.
                            </p>
                            <p>
                                Başlıca proje standartları şunlardır:
                            </p>
                            <p>
                                Proje hızı - Maksimum eğim - Minumum kurb yarıçapı - Enkesit tipi <br />
                                Bir yol projesinde öteki proje standartlarının tesbiti ve düzenlenmesi bakımından bir “proje hızı” seçilir.
                            </p>



                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Proje Hızı</strong>
                            </h5>
                            <p>
                                Başka taşıtların etkisi söz mevzusu değilken düzgüsel hava koşullarında güvenle yapılabilecek en yüksek hız olarak tanımlanır.Proje hızının seçilmesinde yolun derslikı,arazinin topoğrafik durumu,trafik karakteristikleri şeklinde etkenler göz önünde tutulur.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Maksimum Eğim</strong>
                            </h5>
                            <p>
                                Yolun sınıfı,arazinin topoğrafik durumu,kaplama cinsi ile yoldan faydalanacak trafikteki hakim taşıt cinsine nazaran belirlenir.Dağlık arazide bu eğim daha yüksek tutulur.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Minumum Kurb Yarıçap</strong>
                            </h5>
                            <p>
                                Taşıtlar bir kurbda hareket ederken merkezkaç kuvvetinin etkisiyle kurbun dışına doğru itilir.Proje hızı arttıkça merkezkaç kuvvetinin büyüyeceği düşünülerek kurb yarıçapı seçiminde proje hızının göz önünde tutulması gerekir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Enkesit Tipi</strong>
                            </h5>
                            <p>
                                Yolun genişliğinin,şevlerin üst yapı cinsinin ve dolayısıyla kaplamanın belirlenmesi için önceden bilinmesi gereken bir özelliktir.Kurblarda standartlara göre deverde saptanmalıdır. Proje standartları belli olan bir yolda teknik etüd genellikle üç yönden yapılır.
                            </p>
                            <p>
                                Trafik etüdü - Jeolojik ve zemin etüdü - Proje standartları ve arazi engebesi bakımından güzergah etüdü

                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Trafik Etüdü</strong>
                            </h5>
                            <p>
                                Yol trafiği ile ilgili bilgilerin ve taşıtların yol üzerinde güvenli hareketinin sağlanması için gerekli etüdlerin yapılmasıdır.Bu etüd de:
                            </p>
                            <p>
                                Taşıt sayısı2-Taşıtların eşeysel ve ağırlıkları / Taşıtların hızı ve buna gore dever / <br />Trafik hacmi günlük,haftalık,aylık ve yıllık değişimler-Duruş geçiş görüş uzunlukları
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Jeolojik Etüd ve Zemin Etüdü</strong>
                            </h5>
                            <p>
                                Yolun geçeceği arazi üzerinde yerbilim ve zemin mekaniği bakımından lüzumlu etüdlerin yapılmasıdır.Proje standartları ve arazi engebesi bakımından etüd , uygun proje standartların elde eden ve arazinin topoğrafik durumunu gözönünde tutarak yapılacak bir teknik etüdde aşağıda belirtilecek özellikler sağlanmalıdır.
                            </p>
                            <p>
                                Geçki zorunlu noktaları birbirine bağlanmalıdır.Bu tarz şeylerin yanında daha ufak yerleşme merkezleri ,büyük bir sanayi veya turistik merkez,demiryolu,deniz yolu,yada hava ulaşımı ile ilgili bir terminal,dağlık yada batak bir bölge yada bir nehrin aşılması sırasında bulunabilecek en uygun geçiş yerleri de bazı durumlarda ara zorunlu nokta durumunda olabilirler.

                            </p>
                            <p>
                                Maksimum boyuna eğim,proje hızına,arazi cinsine ve kaplama çeşidine uygun seçilmelidir.Bu koşulları elde eden maksimum eğimin mümkün olduğu kadar minik seçilmesi istenir.Bu bakımdan yolun büyük eğimler gerektirmeyen yerlerden geçirilmesi uygun olur.İki zorunlu nokta arasında yer alan yolda,eğim kaybı olmamalıdır.Örneğin yükselerek giden bir araziden geçecek bir yolda yükselerek gitmelidir.

                            </p>
                            <p>
                                Tek eğimli devamlı çıkışlar uygun değildir.Devamlı çıkış icra eden bir taşıt büyük bir hız kaybına uğrayacaktır.Bu bakımdan bu şekilde yerlerde taşıtın hız kazanabilceği “sahanlıklar” yapılmalıdır.En fazla 2-3 km de bir 300-400 m sahanlıklar oluşturulması yeterlidir.
                            </p>

                            <h4 className="text-lg font-bold">
                                <strong className="text-red-500"> KARAYOLU İLE İLGİLİ BAZI TERİMLER</strong>
                            </h4>
                            <p>
                                Ana Yol: Ana trafiğe açık olan ve bunu kesen karayolundaki trafiğin, bu yolu geçerken veya bu yola girerken, ilk geçiş hakkını vermesi gerektiği işaretlerle belirlenmiş karayoludur.<br /> Ariyet: Yarmadan çıkan malzemenin dolgu için yeterli miktarda yada uygun özellikte olmaması halinde uygun bir araç-gereç ocağından alınan malzemedir. <br />
                                Aliyman: Yolun proje yatay hattındaki doğrusal kısmıdır. Alt geçit: Karayolunun diğer bir karayolu veya demir yolunu alttan geçmesini sağlayan yapıdır. <br />
                                Aplikasyon: Yol ekseninin araziye uygulanmasıdır. <br />
                                Ayırıcı (Ayırtman): Taşıt yollarını yada yol bölümlerini birbirinden ayıran, bir taraftaki taşıtların öteki tarafa geçmesini yasaklayan, engellemiş olan yada zorlaştıran karayolu yapısı, trafik tertibatı yada gerecidir. <br />
                                Ayrılma şeridi (Yavaşlama şeridi): Bir platformdan ayrılacak olan bir taşıtın hızlı trafik akımından ayrıldıktan sonrasında ilerideki kurba güvenle girmek için yavaşlamasını sağlayan bir hız değişiklik yapma şerididir. <br />
                                Banket: Yaya yolu ayrılmamış karayolunda, taşıt yolu kenarı ile şev başı veya hendek iç üst kenar içinde kalan ve olağan olarak yayaların ve hayvanların kullanacağı, mecburi hallerde de araçların faydalanabileceği  kısımdır. <br />
                                Bombe (Yol Çatı Eğimi): Yol platformundaki suların yüzeysel drenajını sağlamak amacıyla yol enkesitinde eksenden iki kenara doğru uygulanan negatif eğimdir.<br />
                                Bordür: Kaplama ile tretuvar veya refüj arasındaki kot farkını sağlamak için yapılmış ayırıcı elemanlardır. <br />
                                Bölünmüş Yol: Bir yöndeki trafiğe ilişkin taşıt yolunun bir ayırıcı ile belirli şekilde diğer taşıt yolundan ayrılması ile meydana gelen karayoludur.<br />
                                Boykesit (Profil): Yol ekseninin düşey düzlemdeki iz düşümü yada kotlu yol eksenidir.Boykesit yolun geçki ekseni süresince alınan kesittir. Boykesitte arazi siyah çizgiyle, yol kırmızı çizgiyle gösterilecektir. Plan üzerinde, her enkesitin eksendeki arazi kotu okunarak boykesite siyah kot olarak işaretlenecek ve siyah kotların birleştirilmesiyle siyah çizgi elde edilecektir.Boykesitte yol ekseni yapım sonrası kırmızı çizgi ile belirlenir ve kırmızı çizgi birden fazla eğime sahip olabilir. Minimum kırmızı çizgi eğimi 0.005 ve maksimum eğim 0.08 dir. <br />
                                Brükner: Yarmadan dolguya veya ariyetten dolguya ve yarmadan depoya yapılacak en ekonomik taşımaların ve bunların mesafelerinin grafik bir gösterimidir. <br />
                                Çok şeritli yollar (şehir dışı): Herbir yöndeki trafik için minimum iki şeridi bulunan ve 3 km’den daha kısa olmamak koşyüce ile trafiğin periyodik olarak kesintiye uğratılabileceği erişim kontrolsüz veya yarı kontrollü karayollarıdır. Safha yolu: Transit trafiğin şehir merkezine girmeksizin geçişini sağlamak amacıyla meydana getirilen ve kenti kuşaklayan karayoludur. <br />
                                Depo (D): Yarma fazlası yada niteliksiz kazı malzemesinin hacmidir. Dever: Yatay kurplarda merkezkaç kuvveti sebebiyle taşıtların dışarıya savrulmalarını önlemek için yol platformuna uygulanan enine eğimdir. <br />
                                Drenaj: Yeraltı ve yüzeysel suların yol gövdesine zarar vermeden uzaklaştırılmasıdır.<br />
                                Dolgu: Yol gabarisinin proje düşey hat (Kırmızı hat) kotlarına uygun olarak teşkil edilebilmesi amacıyla meydana getirilen ve doğal zemin ile yol üstyapısı içinde kalan kısımdır. <br />
                                Duruş görüş mesafesi (DGM): Sürücülerin bir tehlikeyi fark edip durabilmeleri için lüzumlu mesafedir.<br />
                                Düşey kurp: Birbirini izleyen farklı eğimlerdeki proje düşey hatlarını birleştiren parabolik yada dairesel düşey yol kesimidir. <br />
                                Düzeltilmiş proje (As-Built, Uygulanmış Proje): kati ve uygulama (tatbikat) projelerine nazaran yapım çalışmaları sonucunda oluşan değişiklikleri de içine alan ve en son durumu yansıtan projelerdir. <br />
                                Enkesit:Yol gövdesi tabakaları ve elemanlarının yeterli genişlikte bir arazi kullanımını da kapsayacak şekilde eksene dik düşey düzlem ile arakesitidir. <br />
                                Eşitlik(Müsavat): Ripaj, varyant yada ölçüm değişiklıkları nedeni ile kotta veya kilometrede yapılan değişikliklerin geri (G) ve ileri (İ) olarak belirtilmesidir. (Örneğin 6+845.12G/6+840.33İ gibi) <br />
                                Geçiş eğrisi: Kurplarda merkezkaç kuvvetinin taşıta olan etkisine karşı ani olmayan düzenli bir geçiş sağlamak amacıyla aliynman ile kurp arasına yerleştirilen eğri parçasıdır. <br />
                                Geometrik standart:Yolun; genişlik, eğim, kurp yarıçapları, proje hızı ve trafik sayısı şeklinde ölçüleridir. <br />
                                Görüş mesafesi: Karayolu güvenliği açısından sürücülerin, kendi şeridinde seyir halinde iken ilerisinde beklemedik bir objeyle karşılaştıklarında kontrollü manevra yapabilmelerini sağlayacak mesafedir.<br />
                                Geçiş görüş mesafesi: İki şeritli yollarda bir taşıtın diğer bir taşıtı güvenli bir halde geçebilmesi için zıt yönde seyreden taşıtlar arasındaki emniyetli mesafedir. <br />
                                Güzergah (Geçki): Karayolunun harita üzerinde takip etmiş olduğu yatay hattır. <br />
                                Halihazır harita: Yerleşme alanlarının mevcut yapı ve arazi kullanım durumlarını gösteren eşyükselti eğrili, kot ve koordinatlı, detaylı ve farklı ölçekli haritalardır. <br />
                                Hendek: Karayolunda platformdan yada şevlerinden gelen yüzeysel suları toplayıp uygun yerlere boşalım eden yüzeysel drenaj yapısıdır. <br />
                                İntikal ve reaksiyon mesafesi: Sürücünün gördüğü engeli algılaması, tanıması ve alınacak önlemi tasarlaması ile fren uygulaması için lüzumlu vakit süresinde taşıtın almış olduğu mesafedir. <br />
                                Kafa hendeği: Yarma kesimlerinde yüzeysel suların yarma şevlerine ve yol gövdesine zarar vermesini önlemek amacıyla yarma şevi ile organik topografyanın kesişme çizgisinden (şev kazığı çizgisi) yamaç yukarı tarafta açılan drenaj yapısıdır. <br />
                                Kavşak: İki veya daha çok karayolunun kesişmesi, birleşmesi ve ayrılması ile oluşan ortak alanlardır. <br />
                                Kaplama: Yol üstyapısının kaymaya, trafiğin aşındırmasına ve iklim koşullarının ayrıştırma etkisine karşı koyarken aynı zamanda yük taşıyan en üst tabakasıdır. (Asfalt betonu, beton, parke vb.) <br />
                                Kilometre: Yol üzerinde herhangi bir noktanın proje başlangıcına olan uzaklığının kilometre (+) metre olarak ifadesidir (15+225.05 benzer biçimde). <br />
                                Kot: Herhangi bir noktanın belirli bir düzleme nazaran alçaklık veya yüksekliğidir. <br />
                                Köprülü kavşak: İki veya daha fazla yolun hareket halindeki trafiği etkilemeden farklı düzlemde kavşak köprüsü ile meydana getirilmiş bağlantı yolu sistemidir. <br />
                                Köprü: Hesap açıklığı 10m’den büyük (10m dahil) akarsu, vadi, karayolu, demiryolu benzer biçimde engelleri geçmek amacıyla kullanılan karayolu yapısıdır. <br />
                                Kurp (Yatay ve düşey kurp): Proje yatay ve düşey hattındaki doğrusal kesimleri birleştiren eğrisel yada dairesel karayolu kesimidir. <br />
                                Lase: Kısa mesafede yükselmek gerektiğinde birbirini kısa aralıklarla izleyen çok sayıdaki ufak yatay kurplar ile oluşturulan yol kesimidir. <br />
                                Menfez: İnşaası yapılacak yol yapısı ile akım çizgileri kesilen mecra, dere ve akarsulardaki akışı uygun şekilde geçindirmek ve mücavir alanlardan yola gelecek her türlü suyu, yolun işletme süresi boyunca yerine getireceği fonksiyonu zedelemeyecek şekilde yoldan geçirerek uzaklaştırmak için yerel trafik ile yaya ve hayvan geçişleri için yol gövdesi altında inşa edilen ve açıklığı 10 metreye kadar olan sanat yapısıdır. <br />
                                Nivelman: Noktalar arasındaki yükseklik farkının belirlenmesidir. <br />
                                Ön Etüt (İstikşaf): Başlangıç ve sonu tespit edilen iki nokta arasında göreceği hizmet (yerleşim, sosyal ve ekonomik) bakımından uzunluk, toprak işleri, drenaj, jeolojik ve topoğrafik yapı ile trafik ve gelişme faktörleri gibi hususlar gözönünde tutularak, karayolu geometrik standartları ile trafik güvenliğini teknik ve ekonomik olarak karşılayacak yol güzergahının veya güzergahlarının haritalar üzerinde yada arazide araştırılmasıdır. <br />
                                Palye hendekleri: Palyeli olarak meydana getirilen yarma ve dolgularda şeve ve palyeye gelen yüzeysel sularının toplanıp deşarj edildiği drenaj yapısıdır.<br />
                                Peyzaj: Karayolunun naturel çaşama üzerindeki negatif etkilerini en aza indirebilmek, şev stabilitesine katkıda bulunmak, gürültü ve egzos gazlarına karşı engel oluşturmak, yolun monotonluğunu kırmak ve yola estetik bir görünüm kazanmıştırrmak amacıyla yapılan tasarım ve uygulama çalışmalarıdır. <br />
                                Proje gabarisi: araçların yüklü yada yüksüz olarak karayolunda güvenli seyirlerini temin amacıyla karayolu yapılarının (köprü, tünel vb.) uzunluk, genişlik ve yüksekliklerini belirleyen ölçülerdir. <br />
                                Platform: Karayolunun, taşıt yolu (kaplama) ile yaya yolu (kaldırım) veya banketinden oluşan kısmıdır. <br />
                                Plankote: Herhangi bir kavşak, tesis yada sanat yapısının yapılacağı arazi bölümünün kotlu, tesviye eğrili ve detaylı planının çıkarılmasıdır. <br />
                                Rakortman: Yön yada eğim değişikliklerini güvenlik ve konfor gereksinimlerine uygun bir süreklilik ve hızda gerçekleştirmek amacıyla kullanılan doğru ve eğridir. <br />
                                Refüj: Bölünmüş bir yolda zıt yönlerde hareket eden trafiği birbirinden ayıran kısımdır. <br />
                                Ripaj: Yapı ve toprak işlerini azaltmak amacı ile yol ekseninin enine kesit içinde sağa veya sola kaydırılmasıdır. <br />
                                Rögar: Yol yüzey sularının yer yer ana drenaj kanalına boşalma etmek için bordür kenarına meydana getirilen tesisdir. <br />
                                Röper: Yol süresince en çok 500m’de bir düzenlenen ve gidiş-dönüş nivelmanı ile koordinatları belirlenmiş sabit noktalardır. <br />
                                Sanat yapıları: Köprü, tünel, menfez, istinat/iksa duvarı, tahkimat vb. Mühendislik yapılarıdır. <br />
                                Some noktası: Aliymanların kesişme noktasıdır. Şerit: Taşıtların bir dizi halinde güvenli seyredebilmeleri için taşıt yolunun ayrılmış bölümüdür. <br />
                                Şev: Yarma ve dolgularda, platform kenarının doğal zeminle bağlantısını sağlamak amacıyla oluşturulan eğimli zemindir.<br />
                                Üst geçit: Karayolunun diğer bir karayolu veya demiryolunu üstten geçmesini sağlayan yapıdır. Varyant: Yolun bir kısmının yada tamamının çeşitli nedenler ile değiştirilmiş kısmıdır. <br />
                                Yarma: Üstyapı alt kotunun üzerinde kalan kazı hacmidir. <br />
                                Yarma hendeği: Yarmalarda platform ve şevlerden gelen suları toplayıp uygun yerlere boşaltan yapılardır. <br />
                                Yatay kurp: Yolun aliymanları birleştiren eğrisel kısımdır. <br />
                                Şakuli Kurb (DÜŞEY KURB) :Uzunluğunun tespiti:
                                <br /> Görüş uzaklığı:Yollar üzerindeki taşıtların emniyetle yol alabilmeleri için sürücü önündeki yolun yeter boyunda bir kesimini görebilmelidir.Genel olarak iki ve daha fazla şeritli yollarda sürücünün emniyetli frenuzaklığı kadar bir yol kesimini görmesi gerekir.Trafik akışını yavaşlatmamak amacıyla,öndeki ağır taşıtları geçebilmek için,yeteri kadar görüş sağlanabilen kesimlerin yol süresince temin edilmiş olmasıda gerekir. <br />
                                Emniyetli duruş için görüş uzaklığı :Motorlu taşıt sürücüsünün,yol üzerinde oluşabilecek herhangi bir tehlikeyi,taşıtını emniyetle durdurabilecek kadar bir uzaklıktan görebilmesi gerekir.Bu uzaklık,sürücünün intikal ve tepki zamanları zarfında taşıtın aldığı yol ile fren uzaklığının toplamına eşittir. <br />
                                Fren tepki ve intikal zamanları :Özellikle A.B.D de meydana getirilen geniş araştırmalar nihayetinde ,fren reaksiyon zamanının (tehlikenin intikal etmiş olduğu andan fren uygulamasına geçinceye kadar geçen zaman)ortalama yarım saniye olduğu saptanmıştır.Sadece bu değerinin kişlere gore değişeceği göz önüne alınarak,yol projeleri hazırlanırken fren tepki zamanı 1 sn olarak kabul edilmesi uygun görülmüştür. <br />
                                İntikal süresi: Tehlikenin görüldüğü andan itibaren gerek olup olmadığı kararına varıncaya kadar geçen zamandır. Bu süre sürücünün dikkatine bağlıdır.Özellikle yüksek hızlarda,dikkat yoğunlaştığı için intikal zamanı kısadır.Buna karşılık yavaş hızlara uzundur.Meydana getirilen gözlemler sonuncunda intikal vakitının 0.25-2.50 saniye içinde değişmiş olduğu görülmüştür. Değişik hızlara bakılırsa fren intikal ve reaksiyon zamanlarının toplamı verilmiştir
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Yolprofil;

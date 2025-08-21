import React from 'react';
import vaziyet from '../../utils/images/vaziyetpfoto.webp';

function Vaziyet() {
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
                                src={vaziyet}
                                alt="Vaziyet Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Vaziyet ve Bağımsız Plan Hizmetleri</h3>

                            <p>
                                Vaziyet planı, bir projede bulunan inşaat alanındaki tüm varlıkların yerinin yayınlandıği ölçekli haritalara denir.Konum planında bina yeri, yol, yön durumu, ağaç, telefon direği, su ve elektrik hatları şeklinde unsurlar yer alır.
                            </p>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Peki, Durum planı nasıl mi çizilir?</strong>
                            </h5>

                            <p>
                                Durum planı, kadastro müdürlüklerinden alınan aplikasyon krokisi, tasdikli kotlu kroki ve 1/1000 ölçekli bayındır planı paftalarından yararlanılarak çizilir. Konum planı çiziminde plan şartları ve bayındır mevzuatı da dikkate alınır.Projenin ebatlarına ve elde edilen informasyon paftalarının ölçeğine nazaran 1/200, 1/2000 ve 1/500 ölçekleri de kullanılabilir.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Durum planında neler bulunur?</strong>
                            </h5>
                            <p>
                                Tanımlı röper noktası <br />
                                Eğim <br />
                                Yaya taşıt ilişkisi  <br />
                                Yotlar (özellikle çatı)  <br />
                                Çatı gösterimi <br />
                                Yakın çevre düzenlemesi  <br />
                                Yönler, hakim rüzgar  <br />
                                Toplam metrekare  <br />
                                Siluet, arazi kesiti  <br />
                                Cadde sokak tanımları  <br />
                                Çizgi kademelenmesi
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500"> Durum planının özellikleri nedir?</strong>
                            </h5>

                            <p>

                                Yapı kitlesi, plan görünüşü yada görüş açısı olarak çizilir. İç ayrıntı gösterilmez. <br />
                                Yapı giriş yeri, arsa içindeki giriş yolu, garaj yolu ve diğer gezinti yolu gösterilir. <br />
                                Garaj bahçıvan yada kapıcı evi, kömürlük şeklinde tamamlayıcı yapılar var ise çizilir.<br />
                                Kuyu, sarnıç, fosseptik çukuru benzer biçimde yeraltı yapıları ile arsada mevcut olan ağaçlar gösterilir.<br />
                                Arsa köşeleri ve gerekli yerlerinin teras döşemelerinin ve ihtiyaç duyulan diğere yerlerin kotları, kabul edilen sıfır kotuna gore kotlandırılır. <br />
                                Yapı birden çok bloklar halinde ise, her yapı bloğunun ismi yada işareti kendi bloğu üzerine yazılır. <br />
                                Arsanın parsel numarası, komşu parsel numaraları ile birlikte gösterilir. <br />
                                Yapının komşu arsalara ve yola olan ölçüsü, yapının kitle ölçüsü, arsa dışındaki yolun adı ve genişliği yazılır.<br />
                                Komşu yapılar kendi arsalarında gösterilip, kaç katlı oldukları belirtilir. <br />
                                Yapı kitlesi üzerinde kesit bölgeleri gösterilip plan haricinde kalmak üzere iki kesiti çizilir. <br />Kesitlerde yapı katlarının ve arazi ile kesiştiği yerlerin kotları yazılır. <br />
                                Yapının kuzey yönü işaretlenir. <br />
                                Çizim ile gösterilenlerden başka, durum planında, paftanın uygun yerine yapılacak tablolar yardımıyla yapı ile ilgili (kat alanı, yapı toplam alanı, yapı cinsi, yapı bedeli, meslek odalarınca istenen bilgiler, yapı kadastro kayıtları vb.) bilgiler verilir. <br />Konum planı ölçeği genellikle 1/200 yada 1/500 olur. Sadece proje büyüklüğü bakımından 1/1000, 1/2000 ölçekli de olabilir.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Vaziyet;

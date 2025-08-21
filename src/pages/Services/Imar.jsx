import React from 'react';
import imar from '../../utils/images/imarbarisifoto.webp';

function Imar() {
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
                                src={imar}
                                alt="imar Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">İmar Barışı Hizmeti</h3>

                            <p>İmara aykırı, ruhsatsız veya ruhsat eklerine aykırı yapıların kayıt altına alınması kanalıyla bu yapılara yasallık kazanmıştırrılmasıdır. Iyelik sorunu sebebiyle arsa görünen yapıların, resmi olarak doğalgaz ve su bağlanamama benzer biçimde sorunların önüne geçilecektir. Ülkemizde 2017 yılından önce yapılmış ve bu durumda olan tüm binalar şehir, kat büyüklüğü, metrekare şeklinde herhangi bir şarta bakılmadan kapsam içerisinde olacaktır.</p>

                            <p>İmar barışı sayesinde yapı kayıt belgesi alan yapılar elektrik, su ve doğalgaz bağlayabileceklerdir. Yapı kayıt belgesi alan yapılarda işyeri açma ve çalışma ruhsatı yapı kullanma izin belgesi aranmaksızın verilir. İmar barışı ile yapının kaçak olma durumu ortadan kalkacak ancak depremsellik açısından oluşacak olan olumsuzluğun giderilmesi amacıyla tüm tedbirler malik veya malikler tarafınca alınacaktır.</p>

                            <p>İmar mevzuatına aykırı olan yapılar için çıkarılar yıkım kararı ile eğitim edilemeyen para cezaları yapının resmileştirilmesinin akabinde iptali gerçekleşecektir. Plana uygun yapılan yapılarla mukayese edildiğinde itilaflı olan mevcut binaların büyük çoğunluğu extra hak sağlamış olmaktadır. Bu konum cüzi bir miktarla resmileştirilerek plana uygun meydana getirilen yapılarla aynı ayni haklara haiz olunmaktadır.İmar barışı ile kat mülkiyetine geçen yapılar hukuki olarak kıymet arz edebileceklerdir. Bu sayede bankaya mevcut yapıyı güvence göstererek kredi çekebilme olanağı sağlanmış olacaktır.</p>

                            <p>Yapı kayıt belgesi için ödenecek bedel arsa rayiç bedeli, arsa yüz ölçümü, toplam yapı alanı ve yapının niteliği dikkate alınmak kaydı ile taşınmaz tek kullanımlı veya karma kullanımlı olması durumu gözetilerek arsa oranlarına müteakiben konutta yüzde üç ticari yapılarda yüzde beş olmak üzere yapı ortalama bedeli esas alınarak hesaplanacak olan karşılık eğitim edilecektir.Yapı kayıt belgesi binayı yıkılana kadar yasal hale getirmiş olur. Bu belge ile eski ise kentsel dönüşme girene kadar, yeni yapılmışsa binanın ömrü kadar, aslabir şekilde binadan kaynaklı imar cezası ve imar kirliliği gibi cezalar verilmez.</p>

                            <p>Başvurular e-devlet üzerinden veya illerinde bulunan Çevre ve Şehircilik İl Müdürlüklerindeki ilgili birimlerden yapılmaktadır.E-devlet şifresi , Geçerli bir cep telefonu numarası ve e-posta adresi , Beyan edilecek yapının adresi , Tapusu varsa ada ve parsel bilgileri , Toplam inşaat alanı, konutların ve işyerlerinin ayrı ayrı toplam alanları (metrekare), yapıdaki konut ve işyeri sayısı, arsa/arazinin emlak vergi birim değeri (ilgili belediyeden alınabilecek) , Yapının bulunduğu arsanın alanı, varsa tapudaki alan yoksa beyan edilecek alan (metrekare) , Yapı sınıfı (sistemin sunacağı seçeneklerden seçilecek) , İmar mevzuatına aykırılığın tarif edilmesi ve yapıyı gösteren ve aykırılık kısmını gösteren birer tane fotoğraf.( Fotoğrafların dosya formatının ‘jpg, jpeg veya png’ olması gereklidir.) , Kadastro Müdürlüğüne başvuru İşlemi İçin İstenen Evraklar (Zemin Tespit Tutanağı onaylamaı) , İstemde Bulunanın Kimlik Belgesi , İstemde Bulunan Temsilci İse Temsil Belgesi , Yapı Kayıt Belgesi/Belgeleri , Zemin Tespit Tutanağı , Tapu Malikleri yada Maliklerden minimum birisi ile LİHKAB/SHKMMB içinde düzenlenmiş olan Hizmet Sözleşmesi/Tip Sözleşme ve fatura , Sözleşmeye İlişkin tahakkuk eden Damga Vergisinin Ödendiğine Dair makbuz . Yapı Kayıt Belgesi , Zemin Tespit Tutanağı (EK-1), SHKMMB (Harita firması) tarafınca hazırlanan belge , Umumi hizmet alanlarına denk gelen alanların bulunmuş olduğunun tespit edilmesi halinde bu kısımların terk edildiğine ilişkin belediyesinden veya kurumundan alınan belge , Yapının güncel halinin bulunduğu Mimari Proje , Yönetim Planı , Mecburi deprem (DASK) sigortası , Yapı kayıt belgesi için ödenen meblağ kadar bir bedelin Çevre ve Şehircilik Bakanlığının merkez muhasebe birimi hesabına yatırıldığına ilişkin belge (Söz mevzusu ödemenin yapı kayıt belgesi tarihinden sonrasında yapılmış olmasına dikkat edilecektir)</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Imar;
